const express = require('express');
const ProductController = require('../Controllers/Product.Controllers');
const router = express.Router();
const multer = require('multer');
const uploader = multer({dest:"image/"})
router.post("/file-upload",uploader.single("image"),ProductController.uploadAFile)
router.route("/")
        .get(ProductController.getAllProducts)
        .post(ProductController.createAProducts)

router.route("/:id")
        .get(ProductController.getAProduct)
        .patch(ProductController.updateAProduct)

module.exports = router