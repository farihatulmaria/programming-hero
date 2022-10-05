const Product = require("../Models/Product.Models");
const { getAllProductsService, getAProductService, updateAProductService,createProductService } = require("../Services/Product.service");

module.exports.getAllProducts = async (req,res)=>{
    try {
        const products = await getAllProductsService();
        res.status(200).json({
            status:'passed',
            message:"got all products",
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
            message:"got the product",
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
            message:"updated the product",
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

module.exports.deleteAProduct = async (req,res)=>{
    const {id} = req.params;
    try {
        const result = await deleteAProductService(id)
        res.status(200).json({
            status:'passed',
            message:"deleted the product",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't delete the product",
            error:err.message
        })
    }

}




module.exports.uploadAFile = async (req,res)=>{
    try {
        res.status(200).json(req.file)
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't get the file",
            error:err.message
        })
    }

}