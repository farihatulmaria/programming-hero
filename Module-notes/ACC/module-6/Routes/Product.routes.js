const express = require('express');
const productController = require('../Controllers/Product.controllers');
const router = express.Router();

router
    .route('/')
        .get(productController.getProducts)
        .post(productController.createProduct)
router
    .route('/bulk-update')
        .patch(productController.bulkUpdateProduct)
router
    .route('/bulk-delete')
        .delete(productController.bulkDeleteProduct)
router
    .route('/:id')
        .patch(productController.updateAProduct)
        .delete(productController.deleteAProduct)

module.exports = router