const express = require('express');
const storeController = require('../Controllers/Store.Controllers');
const router = express.Router();

router.route("/")
    .get(storeController.getStores)
    .post(storeController.createAStore)

router.route("/:id")
    .get(storeController.getAStore)
    .patch(storeController.updateAStore)
    
module.exports = router