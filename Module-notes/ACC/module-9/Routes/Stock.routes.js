const express = require('express');
const stockController = require('../Controllers/Stock.Controllers.js');
const {authorization} =require("../middlewares/authorization")
const router = express.Router();

router.route("/")
    .get(stockController.getStocks)
    .post(authorization("admin"),stockController.createStock)

router.route("/:id")
    .get(stockController.getStockById)
    .patch(authorization("admin"),stockController.updateStock)
    .delete(authorization("admin"),stockController.deleteStockById)
module.exports = router