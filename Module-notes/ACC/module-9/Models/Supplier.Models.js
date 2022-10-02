const mongoose = require('mongoose');
const validator = require('validator');
const {ObjectId} = mongoose.Schema.Types;


const supplierSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provid a name"],
        trim:true,
        lowercase:true,
        minLength:[3,"Name must be at least 3 characters"],
        maxLength:[100,"Name can't be too large"]
    },
    email:{
        type:String,
        validate:[validator.isEmail,"Please provid a email"],
        trim:true,
        lowercase:true,
        unique:true
    },
    brands:{
        name:{
            type:String,
            trim:true,
            required:true
        },
        id:{
            type:ObjectId,
            required:true,
            ref:'Brand'
        }
    },
    contactNumber: [{
        type: String,
        required: [true, "Please provide a contact number"],
        validate: {
          validator: (value) => {
            return validator.isMobilePhone(value);
        },
          message: "Please provide a valid phone number",
        }
    }],
    emergencyContactNumber: {
        type: String,
        required: [true, "Please provide  a emergency contact number"],
        validate: {
          validator: (value) => {
            return validator.isMobilePhone(value);
          },
          message: "Please provide a valid phone number",
        },
    },
    tradeLicenceNumber: {
        type: Number,
        required: [true, "Please provide your trade licence number"],
    },
    presentAddress:{
        type:String,
        required:[true,"Please Provide your present address"]
    },
    permanentAddress:{
        type:String,
        required:[true,"Please Provide your permanent address"]
    },
    store:{
        type:String,
        required:true,
        lowercase:true,
        enum: {
            values: ["dhaka", "chattogram", "rajshahi", "sylhet", "khulna", "barishal", "rangpur", "mymensingh"],
            message: "{VALUE} is not a valid name"
          }
    },
    imageURL:{
        type:String,
        validate:[validator.isURL,"Please provid a vaild image url"]
    },
    nationalIdImageURL:{
        type:String,
        validate:[validator.isURL,"Please provid a vaild image url"]
    },
    status:{
        type:String,
        enum:{
            values: ["active", "in-active"],
            message: " status can't be {VALUE} "
        },
    },
},{timestamps:true})



const Supplier = mongoose.model("Supplier",supplierSchema);

module.exports = Supplier;