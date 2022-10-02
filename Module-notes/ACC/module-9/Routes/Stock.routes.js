const express = require('express');
const stockController = require('../Controllers/Stock.Controllers.js');
const router = express.Router();

router.route("/")
  .post(stockController.createStock)
  .get(stockController.getStocks)

router.route("/:id")
  .get(stockController.getStockById)
  .patch(stockController.updateStock)
  .delete(stockController.deleteStockById)
module.exports = router