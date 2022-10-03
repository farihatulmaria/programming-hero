const express = require('express');
const usersController = require('../Controllers/Users.Controllers');
const router = express.Router();

router.post("/signup",usersController.signUp)
router.post("/login",usersController.login)

module.exports = router