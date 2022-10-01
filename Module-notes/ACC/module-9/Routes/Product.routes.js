const express = require('express');
const productController = require('../Controllers/Product.Controllers');
const router = express.Router();
const uploader = require('../middlewares/uploader')

router.post("/file-upload",uploader.single("image"),productController.uploadAFile)

router.route("/")
        .get(productController.getAllProducts)
        .post(productController.createAProducts)

router.route("/:id")
        .get(productController.getAProduct)
        .patch(productController.updateAProduct)

module.exports = router