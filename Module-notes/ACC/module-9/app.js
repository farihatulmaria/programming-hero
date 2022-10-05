const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middlewares
app.use(express.json());
app.use(cors());


//routes
const productRoute = require('./Routes/Product.routes');
const brandRoute = require("./Routes/Brand.routes");
const storeRoute = require("./Routes/Store.routes");
const categoryRoute = require("./Routes/Category.routes");
const supplierRoute = require("./Routes/Supplier.routes");
const stockRoute = require("./Routes/Stock.routes");

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


app.use('/api/v1/product', productRoute);
app.use("/api/v1/brand", brandRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/store", storeRoute);
app.use("/api/v1/supplier", supplierRoute);
app.use("/api/v1/stock", stockRoute);

module.exports = app;

