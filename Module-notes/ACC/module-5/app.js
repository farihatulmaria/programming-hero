const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');

//middleWare
app.use(express.json());
app.use(cors());

//schema design
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true,"Plese add a name to the products"], // vaildating if a name is given
    trim: true, // only to take the name of the product but not the space around it
    unique: [true,"Name must be unique"], // the name can't match with another name of a product
    minLength: [3,"Name must have at least 3 characters."],
    maxLength: [100,"Name can't be this long"]
  },
  description: {
    type: String,
    required: [true,"The product must have a description"]
  },
  price: {
    type: Number,
    rquired: [true,"The product must have a price"],
    min: [0, "Price can't be negative"],
  },
  unit: {
    type: String,
    required: true,
    enum: {
      values: ["kg", "litre", "pcs"],
      message: "unit value can't be {VALUE}, must be kg/litre/pcs"
    },
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, "quantity can't be negative"],
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
    message: "Qunatity must be an integer",
  }, 
  status: {
    type: String,
    required: true,
    enum: {
      values: ["in-stock", "out-of-stock", "discontinued"],
      message: "status can't be {VALUE}",
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

// Model


const Product = mongoose.model("Product",productSchema)
 


app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.post("/api/v1/product",async (req,res,next)=>{
  try {
    // save or create product
    const product = new Product(req.body);
    if(product.quantity == 0){
      product.status = "out-of-stock"
    }
    const result = await product.save() 
    // const result = await product.create(req.body)
    res.status(200).json({
      status:'success',
      message:'Data inserted successfully ! 😊',
      data: result
    })
    res.send('it works')
  } catch (err) {
    res.status(400).json({
      status:"fail",
      message:"Data can't be inserted successfully 😱",
      error: err.message
    })
  }
})


module.exports = app;


