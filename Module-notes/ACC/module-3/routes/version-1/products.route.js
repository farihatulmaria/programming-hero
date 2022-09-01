const express = require('express');
// const { getAllProducts, addAProduct } = require('../../controller/product.controller'); 
/* add the function like .get(functionName) */
const productController = require('../../controller/product.controller.js'); 
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
        .post(productController.addAProduct)
router
    .route('/:id')
        .get(async (req,res)=>{
            const id = req.params.id;
            res.send(`a product founded with id  no:${id}`)
        })
        .post(async (req,res)=>{
            res.send('products added')
        })

module.exports = router;