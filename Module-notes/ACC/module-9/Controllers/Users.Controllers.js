const bcrypt = require('bcryptjs');
const { signUpService, getUserByEmail } = require("../Services/Users.Services")

module.exports.signUp = async (req,res,next)=>{
    const userInfo = req.body;
    try {
        const result = await signUpService(userInfo);
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

        res.status(200).json({
            status:'passed',
            message:"you are a user",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"you aren't a user",
            error:err.message
        })
    }
}

