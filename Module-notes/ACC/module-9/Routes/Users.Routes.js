const express = require('express');
const usersController = require('../Controllers/Users.Controllers');
const { authorization } = require('../middlewares/authorization');
const { verifyToken } = require('../middlewares/velifyToken');
verify
const router = express.Router();

router.post("/signup",usersController.signUp)
router.get("/signup/confirmation/:token",usersController.confirmEmail)
router.post("/login",usersController.login)
router.get("/me",verifyToken,usersController.getMe)
router.get("/",authorization("admin"),usersController.getAllUsers)
router.delete("/:id",authorization("admin"),usersController.deleteUser)

module.exports = router