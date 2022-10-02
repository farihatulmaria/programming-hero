const mongoose = require('mongoose');
const validator = require('validator');
const {ObjectId} = mongoose.Schema.Types;


const stockSchema = mongoose.Schema({
    productId:{
        type:ObjectId,
        required:true,
        ref:"Product"
    },
    name:{
        type:String,
        required:[true,"Please provide a store"],
        trim:true,
        unique:true,
        lowercase:true,
        maxLength:100,
    },
    description:String,
    unit:{
        type: String,
        required: true,
        enum: {
            values: ["kg", "litre", "pcs", "bag"],
            message: "unit value can't be {VALUE}, must be kg/litre/pcs/bag"
        }
    },
    price:{
        type:Number,
        required:[true,'Product must have a price'],
        min:[1,"Price can't be negative"]
    },/* 
    imageURLS: [{
        type: String,
        required: true,
        validate:[validator.isURl,"Please provide valid image urls"]
    }], */
    imageURLS: [{
        type: String,
        required: true,
        validate: {
          validator: (value) => {
            if (!Array.isArray(value)) {
              return false;
            }
            let isValid = true;
            value.forEach(url => {
              if (!validator.isURL(url)) {
                isValid = false;
              }
            });
            return isValid;
          },
          message: "Please provide valid image urls"
        }
    }],
    quantity:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:{
            values: ["in-stock", "out-of-stock", "discontinued"],
            message: " status can't be {VALUE} "
        },
    },
    store:{
        name:{
            type:String,
            required:[true,"Please provide a store"],
            trim:true,
            unique:true,
            lowercase:true,
            maxLength:100,
            enum: {
                values: ["dhaka", "chattogram", "rajshahi", "sylhet", "khulna", "barishal", "rangpur", "mymensingh"],
                message: "{VALUE} is not a valid name"
              }
        },
        id:{
            type:ObjectId,
            required:true,
            ref:'Store'
        }
    },
     suppliedBy:{
         name:{
             type:String,
             required:[true,"Please add the suppliers name"],
             trim:true
         },
         id:{
             type:ObjectId,
             ref:'Supplier'
         }
     },
     category: {
        type: String,
        required: true,
    },

    brand: {
        name: {
          type: String,
          required: true,
        },
        id: {
          type: ObjectId,
          ref: "Brand",
          required: true,
        }
      },
      sellCount:{
          type:Number,
          default:0,
          min:0
      }
},{timestamps:true})



const Stock = mongoose.model("Stock",stockSchema);

module.exports = Stock;