const { createStockService, getStockService, getStockByIdService, updateStockByIdService,deleteStockByIdService } = require("../Services/Stock.service.js")

module.exports.createStock = async (req,res,next)=>{
    const data = req.body;
    try {
        const result = await createStockService(data);
        res.status(200).json({
            status:'passed',
            message:"can create Stock",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't create Stock",
            error:err.message
        })
    }
}
module.exports.getStocks = async (req,res,next)=>{
    try {
        const result = await getStockService();
        res.status(200).json({
            status:'passed',
            message:"can get all Stocks",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't get all Stocks",
            error:err.message
        })
    }
}
module.exports.getStockById = async (req,res,next)=>{
    const {id} = req.params;
    try {
        const result = await getStockByIdService(id);
        res.status(200).json({
            status:'passed',
            message:"can get the Stock",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:"can't get the Stock",
            error:err.message
        })
    }
}
module.exports.updateStock = async (req,res,next)=>{
    const {id} = req.params;
    const data = req.body;
    try {
        const result = await updateStockByIdService(id,data);
        res.status(200).json({
            status:'passed',
            message:"can update the Stock",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:"can't update the Stock",
            error:err.message
        })
    }
}



module.exports.deleteStockById = async (req,res,next)=>{
    const {id} = req.params;
    try {
        const result = await deleteStockByIdService(id);
        res.status(200).json({
            status:'passed',
            message:"can delete the Stock",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:"can't delete the Stock",
            error:err.message
        })
    }
}