const express = require('express');
const brandController = require('../Controllers/Brand.Controllers');
const { authorization } = require('../middlewares/authorization');
const { verifyToken } = require('../middlewares/velifyToken');
const router = express.Router();

router.use(verifyToken)
router.route("/")
    .get(brandController.getBrands)
    .post(authorization("admin"),brandController.createBrand)

router.route("/:id")
    .get(brandController.getBrandById)
    .patch(authorization("admin"),brandController.updateBrand)
module.exports = router