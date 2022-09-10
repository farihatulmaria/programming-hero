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
    unique: true,
    
  }
})

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


module.exports = app;