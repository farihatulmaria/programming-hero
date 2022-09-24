const express = require('express');
const brandController = require('../Controllers/Brand.Controllers');
const router = express.Router();

router.route("/")
  .post(brandController.createBrand)
  .get(brandController.getBrands);

router.route("/:id")
  .get(brandController.getBrandById)
  .patch(brandController.updateBrand);
module.exports = router