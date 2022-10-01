const express = require('express');
const supplierController = require('../Controllers/Supplier.Controllers.js');
const router = express.Router();

router.route("/")
    .get(supplierController.getSuppliers)
    .post(supplierController.createASupplier)

router.route("/:id")
    .get(supplierController.getASupplierById)
    .patch(supplierController.updateASupplierById)
    
module.exports = router