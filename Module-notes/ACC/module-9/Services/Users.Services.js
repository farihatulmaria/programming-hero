const Users = require("../Models/Users.Models")


module.exports.getAllUsersService = async ()=>{
    const allUsers = await Users.find({});
    return allUsers;
}

module.exports.signUpService = async (userInfo)=>{
    const newUser = await Users.create(userInfo);
    return newUser;
}

module.exports.getUserByEmail = async (email)=> return await Users.findOne({email:email});

module.exports.deleteUser = async (userId)=>{
    const deletedUser = await Users.deleteOne({_id:userId});
    return deletedUser;
}
