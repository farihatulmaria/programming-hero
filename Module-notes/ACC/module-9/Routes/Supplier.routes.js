const express = require('express');
const supplierController = require('../Controllers/Supplier.Controllers.js');
const {authorization} = require("../middlewares/authorization")
const {verifyToken} = require("../middlewares/velifyToken")
const router = express.Router();

router.use(verifyToken)
router.route("/")
    .get(supplierController.getSuppliers)
    .post(authorization("admin","store-manger"), supplierController.createASupplier)

router.route("/:id")
    .get(supplierController.getASupplierById)
    .patch(authorization("admin","store-manger"),supplierController.updateASupplierById)
    .delete(authorization("admin","store-manger"),supplierController.deleteASupplierById)
    
module.exports = router