const Product = require("../Models/Product.Models");
const { getAllProductsService, getAProductService, updateAProductService } = require("../Services/Product.service");

module.exports.getAllProducts = async (req,res)=>{
    try {
        const products = await getAllProductsService();
        res.status(200).json({
            status:'passed',
            message:"can get products",
            Data:products
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't get products",
            error:err.message
        })
    }

}
module.exports.createAProducts = async (req,res)=>{
    const data = req.body;
    try {
        const result = await createProductService(data);  
        res.status(200).json({
            status:'passed',
            message:"can create products",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't create products",
            error:err.message
        })
    }

}
module.exports.getAProduct = async (req,res)=>{
    const {id} = req.params;
    try {
        const result = await getAProductService(id);
        res.status(200).json({
            status:'passed',
            message:"can get the product",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't get the product",
            error:err.message
        })
    }

}
module.exports.updateAProduct = async (req,res)=>{
    const {id} = req.params;
    const data = req.body;
    try {
        const result = await updateAProductService(id,data)
        res.status(200).json({
            status:'passed',
            message:"can update the product",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't update the product",
            error:err.message
        })
    }

}




module.exports.uploadAFile = async (req,res)=>{
    try {
        // const result = await uploadAFileService(id,data)
        res.status(200).json({
            status:'passed',
            message:"can upload the File",
            Data:req.file
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't upload the File",
            error:err.message
        })
    }

}