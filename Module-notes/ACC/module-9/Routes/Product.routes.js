const express = require('express');
const productController = require('../Controllers/Product.Controllers');
const { authorization } = require('../middlewares/authorization');
const router = express.Router();
const uploader = require('../middlewares/uploader')

router.post("/file-upload",uploader.single("image"),productController.uploadAFile)

router.route("/")
        .get(productController.getAllProducts)
        .post(authorization("admin","store-manger"),productController.createAProducts)

router.route("/:id")
        .get(productController.getAProduct)
        .patch(authorization("admin","store-manger"), productController.updateAProduct)
        .delete(authorization("admin"), productController.deleteAProduct)

module.exports = router