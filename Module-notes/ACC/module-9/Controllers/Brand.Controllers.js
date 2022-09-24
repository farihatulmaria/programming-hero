const { createBrandService, getBrandService } = require("../Services/Brand.service")

module.exports.createBrand = async (req,res,next)=>{
    try {
        const result = await createBrandService(req.body);
        res.status(200).json({
            status:'passed',
            message:"can create band",
            error:err.message
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't create band",
            error:err.message
        })
    }
}
module.exports.getBrands = async (req,res,next)=>{
    try {
        const result = await getBrandService();
        res.status(200).json({
            status:'passed',
            message:"can get bands",
            error:err.message
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't get bands",
            error:err.message
        })
    }
}
module.exports.getBrandById = async (req,res,next)=>{
    try {
        
    } catch (err) {
        res.status(400).json({
            status:'fail',
            error:err.message
        })
    }
}
module.exports.updateBrand = async (req,res,next)=>{
    try {
        
    } catch (err) {
        res.status(400).json({
            status:'fail',
            error:err.message
        })
    }
}
