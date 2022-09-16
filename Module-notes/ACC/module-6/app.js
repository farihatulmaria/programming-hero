const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const colors = require("colors");
const productRouter = require("./Routes/Product.routes");
//middleWare
app.use(express.json());
app.use(cors());
 


app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use("/api/v1/product", productRouter)

module.exports = app;


