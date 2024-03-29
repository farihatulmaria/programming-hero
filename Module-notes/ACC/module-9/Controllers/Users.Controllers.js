const bcrypt = require('bcryptjs');
const { signUpService, getUserByEmail, deleteUser,getAllUsersService } = require("../Services/Users.Services");
const { sendMailWithMailGun,sendMailWithGmail } = require('../utils/email');
const { generateToken } = require('../utils/token');

module.exports.getAllUsers = async(req,res)=>{
    try {
        const users = await getAllUsersService();
        res.status(200).json({
            status:'passed',
            message:"got all the users",
            Data:users
        })
        
    } catch (err) {
        res.status(200).json({
            status:'passed',
            message:"can't get all the users",
            Data:result
        }) 
    }
}

module.exports.signUp = async (req,res,next)=>{
    const userInfo = req.body;
    try {
        const user = await signUpService(userInfo);
        const token = user.generateConfirmationToken();

        await user.save({ validateBeforeSave: false });
    
        const mailData = {
          to: [user.email],
          subject: "Verify your Account",
          text: `Thank you for creating your account. Please confirm your account here: ${req.protocol}://${req.get("host")}${req.originalUrl}/confirmation/${token}`,
        };


        res.status(200).json({
            status:'passed',
            message:"you are now a user",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"you aren't a user now",
            error:err.message
        })
    }
}

module.exports.confirmEmail = async (req, res) => {
    try {
      const { token } = req.params;
  
  
      const user = await findUserByToken(token);
  
      if(!user){
        return res.status(403).json({
          status: "fail",
          error: "Invalid token"
        });
      }
  
      const expired = new Date() > new Date(user.confirmationTokenExpires);
  
      if(expired){
        return res.status(401).json({
          status: "fail",
          error: "Token expired"
        });
      }
  
      user.status = "active";
      user.confirmationToken = undefined;
      user.confirmationTokenExpires = undefined;
  
      user.save({ validateBeforeSave: false });
  
      res.status(200).json({
        status: "success",
        message: "Successfully activated your account.",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "fail",
        error,
      });
    }
  };
/** 
 * 1. Check if email and pasword are given
 * 2. find user with email in db
 * 3. if no users found send message
 * 4. compare password
 * 5. if password isn't correct send message
 * 6. check if the user is active
 * 7. if the user isn't active than send the message
 * 8. generate token
 * 9. send user and the token
*/

module.exports.signUp = async (req,res,next)=>{
    const {email,password} = req.body;
    try {
        if(!email || !password){
            res.status(401).json({
                status:'You shall not pass',
                error:"please provide your email and password",
            })
        }
        const user = await getUserByEmail(email);
        if(!user){
            res.status(401).json({
                status:'You shall not pass',
                error:"You aren't a user. Please create a account first",
            })
        }
        const isPasswordValid = user.comparePassword(password,user.password)
        if(!isPasswordValid){
            res.status(403).json({
                status:'You shall not pass',
                error:"You're password isn't correct",
            })
        }
        if(user.status != "active"){
            res.status(401).json({
                status:'You shall not pass',
                error:"You're account isn't active yet",
            })
        }
        const userToken = generateToken(user);
        const {password:pwd ,...others} =  user.toObject()

        res.status(200).json({
            status:'passed',
            message:"You are a user now",
            Data:{
                user:others
                token:userToken
            }
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"you aren't a user",
            error:err.message
        })
    }
}

module.exports.getMe = async(req,res)=>{
    try {
        const user = await getUserByEmail(req?.user?.email);
        res.status(200).json({
            status:'passed',
            message:"You are a user",
            Data:user
        })
        
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"you aren't a user",
            error:err.message
        })
    }
}

module.exports.deleteUser = async(req,res)=>{
    const { id } = req.params
    try {
        const result = await deleteUser(id);
        res.status(200).json({
            status:'passed',
            message:"deleted the user",
            Data:result
        })
        
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't delete the user",
            error:err.message
        })
    }
}
