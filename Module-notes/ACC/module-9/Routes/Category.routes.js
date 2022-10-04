const express = require('express');
const categoryController = require('../Controllers/Category.Controllers');
const router = express.Router();

router.route("/")
  .get(categoryController.getCategories)
  .post(categoryController.createACategory)

router.route("/:id")
  .get(categoryController.getACategoryById)
  .patch(categoryController.updateACategoryById)
  .delete(categoryController.deleteACategoryById)
module.exports = router