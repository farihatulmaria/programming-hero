const { createBrandService, getBrandService, getBrandByIdService, updateBrandByIdService } = require("../Services/Brand.service")

module.exports.createBrand = async (req,res,next)=>{
    const data = req.body;
    try {
        const result = await createBrandService(data);
        res.status(200).json({
            status:'passed',
            message:"can create brand",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't create brand",
            error:err.message
        })
    }
}
module.exports.getBrands = async (req,res,next)=>{
    try {
        const result = await getBrandService();
        res.status(200).json({
            status:'passed',
            message:"can get all brands",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't get all brands",
            error:err.message
        })
    }
}
module.exports.getBrandById = async (req,res,next)=>{
    const {id} = req.params;
    try {
        const result = await getBrandByIdService(id);
        res.status(200).json({
            status:'passed',
            message:"can get the brand",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:"can't get the brand",
            error:err.message
        })
    }
}
module.exports.updateBrand = async (req,res,next)=>{
    const {id} = req.params;
    const data = req.body;
    try {
        const result = await updateBrandByIdService(id,data);
        res.status(200).json({
            status:'passed',
            message:"can update the brand",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:"can't update the brand",
            error:err.message
        })
    }
}
