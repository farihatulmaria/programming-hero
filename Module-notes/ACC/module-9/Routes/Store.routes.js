const express = require('express');
const storeController = require('../Controllers/Store.Controllers');
const { verifyToken } = require('../middlewares/velifyToken');
const router = express.Router();
router.use(verifyToken)
router.route("/")
    .get(storeController.getStores)
    .post(storeController.createAStore)

router.route("/:id")
    .get(storeController.getAStore)
    .patch(storeController.updateAStore)
    .delete(storeController.deleteAStore)
    
module.exports = router