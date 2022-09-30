const mongoose = require('mongoose');
const validator = require('validator');
const {ObjectId} = mongoose.Schema.Types

const categorySchma = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a category"],
        trim:true,
        unique:true,
        lowercase:true,
        maxLength:100
    },
    description:String, 
    imageURL:{
        type:String,
        validate:[validator.isURL,"Please provide a valid image URL"]
    },
},{timestamps:true})


const Category = mongoose.model("Category",categorySchma);

module.exports = Category