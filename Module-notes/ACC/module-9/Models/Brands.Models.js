const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types

const brandSchme = mongoose.Schema({
    name:{
        type: String,
        required: [true,"There must be a brand"],
        trim:true,
        maxLength:100,
        unique:true,
        lowercase: true
    },
    description:String,
    email: {
        type:String,
        lowercase: true,
        validate:[validator.isEmail,'Please provide a vaild email']
    },
    webstie: {
        type:String,
        validate: [validator.isURL,"Please provide a vaild url"]
    },
    location:String,
    products:[{
        type:ObjectId,
        ref:"Product"
    }],
    suppliers:[{
       name:String,
       contactNumber: String,
       id:{
           type:ObjectId,
           ref:"supplier"
       },
    }],
    status:{
        type:String,
        enum:["active","inactive"],
        default:"active"
    }
},{
    timestamps:true
})

const Brand = mongoose.model('Brand',brandSchme);

module.exports = Brand;