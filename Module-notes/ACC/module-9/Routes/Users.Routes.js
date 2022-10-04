const express = require('express');
const usersController = require('../Controllers/Users.Controllers');
const { verifyToken } = require('../middlewares/velifyToken');
verify
const router = express.Router();

router.post("/signup",usersController.signUp)
router.post("/login",usersController.login)
router.get("/me",verifyToken,usersController.getMe)

module.exports = router