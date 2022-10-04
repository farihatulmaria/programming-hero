const jwt = require('jsonwebtoken');
const { promisify } = require("util");
/**
 * 1.check that the token is exists
 * 2. if no send message
 * 3. deacode the token
 * 4. id valid next 
*/
module.exports.verifyToken = async(req,res,next)=>{
    try {
        const token = req?.headers?.autorization.split(" ").[1];
        if(!token){
            res.status(401).json({
                status:'You shall not pass',
                message:"You aren't logged in",
                error:err.message
            })
        }
        const decodedToken = await promisify(jwt.verify()(token,process.env.TOKEN));
        // const user = User.findOne({ email: decoded.email })

        req.user = decoded;

        next();

    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"you aren't a user",
            error:err.message
        })
    }
}