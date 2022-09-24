const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middlewares
app.use(express.json());
app.use(cors());


//routes
const productRoute = require('./Routes/Product.routes.js');
const brandRoute = require("./Routes/Brand.routes.js");

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


app.use('/api/v1/product', productRoute);
app.use("/api/v1/brand", brandRoute);

module.exports = app;


