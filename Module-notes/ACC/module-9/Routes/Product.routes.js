const express = require('express');
const ProductController = require('../Controllers/Product.Controllers');
const router = express.Router();

router.route("/")
        .get(ProductController.getAllProducts)
        .post(ProductController.createAProducts)

router.route("/:id")
        .get(ProductController.getAProduct)
        .patch(ProductController.updateAProduct)

module.exports = router