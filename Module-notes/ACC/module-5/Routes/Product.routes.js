const express = require('express');
const productController = require('../Controllers/Product.controllers');
const router = express.Router();

router
    .route('/')
        .get(productController.getProducts)
        .post(productController.creatProduct)

module.exports = router