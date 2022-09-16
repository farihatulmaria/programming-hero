const mongoose = require('mongoose');
//schema design
const productSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true,"Plese add a name to the products".red.bold], // vaildating if a name is given
      trim: true, // only to take the name of the product but not the space around it
      unique: [true,"Name must be unique".red.bold], // the name can't match with another name of a product
      minLength: [3,"Name must have at least 3 characters.".red.bold],
      maxLength: [100,"Name can't be this long".red.bold]
    },
    description: {
      type: String,
      required: [true,"The product must have a description".red.bold]
    },
    price: {
      type: Number,
      rquired: [true,"The product must have a price".red.bold],
      min: [0, "Price can't be negative".red.bold],
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs"],
        message: "unit value can't be {VALUE}, must be kg/litre/pcs".red.bold
      },
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "quantity can't be negative".red.bold],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true
          } else {
            return false
          }
        },
      },
      message: "Qunatity must be an integer".red.bold,
    }, 
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "status can't be {VALUE}".red.bold,
      },
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    // updatedAt: {
    //   type: Date,
    //   detfault: Date.now
    // }
    // supplier: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Supplier"
    // },
    // categories: [{
    //   name: {
    //     type: String,
    //     required: true
    //   },
    //   _id: mongoose.Schema.Types.ObjectId
    // }]
  },{
    timestamps: true,
  })
  
  // mongoose middlewares for saving dat : pre / post
  
  productSchema.pre("save",function(next){
    console.log("before saving data".bgGreen.bold);
    if(this.quantity == 0){
      this.status = "out-of-stock"
    } 
    // adding some functionality to the products data before saving it to the database
    next();
  })
  
  
  /* productSchema.post("save",function(doc,next){
    console.log("after saving data".bgGreen.bold);
    // adding some functionality to the products data after post it to the database
    next();
  }) */
  
  productSchema.methods.logger = function(){
    console.log(`Data saved for ${this.name} in the database`.green.bold);
  }
  
  
  // Model
  
  
const Product = mongoose.model("Product",productSchema)

module.exports = Product;