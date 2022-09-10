const express = require('express');
// const { getAllProducts, addAProduct } = require('../../controller/product.controller'); 
/* add the function like .get(functionName) */
const productController = require('../../controller/product.controller.js'); 
const { limiter } = require('../../middleware/limlter.js');
const viewCount = require('../../middleware/viewCount.js');
const router = express.Router();

/*
    // you can do it like this:  

router.get('/' , async (req,res)=>{
    res.send('products founded')
})
router.post('/' , async (req,res)=>{
    res.send('products added')
}) */

    // or like this:
router
    .route('/')
        .get(productController.getAllProducts)
        .post(productController.addAProduct
            /** for production level programming / programming with a team -it isn't that helpful
             * @api {get} / saves a product
             * @apiDescription Get all the product
             * @apiPermission admin
             *
             * @apiHeader {String} Authorization   User's access token
             *
             * @apiParam  {Number{1-}}         [page=1]     List page
             * @apiParam  {Number{1-100}}      [limit=10]  Users per page
             *
             * @apiSuccess {Object[]} all the tools.
             *
             * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
             * @apiError (Forbidden 403)     Forbidden     Only admins can access the data*/ 
        )
router
    .route('/:id')
        .get(viewCount,limiter,productController.getAProduct)
        .patch(productController.updateAProduct)

module.exports = router;