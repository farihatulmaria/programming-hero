const jwt = require('jsonwebtoken');
module.exports.generateToken = (userInfo)=>{
    const payLoad = {
        email:userInfo.email,
        role:userInfo.role
    };
    const token = jwt.sign(payLoad,process.env.TOKEN,{
        expiresIn:"20"
    })
    return token
}

