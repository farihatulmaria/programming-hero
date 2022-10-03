const Users = require("../Models/Brands.Models")

module.exports.signUpService = async (userInfo)=>{
    const newUser = await Users.create(userInfo);
    return newUser;
}

module.exports.getUserByEmail = async (email)=> return await Users.findOne({email:email});