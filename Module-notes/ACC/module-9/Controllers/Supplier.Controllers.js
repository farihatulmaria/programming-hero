const {getSuppliersService,createSupplierService,getSupplierByIdService,updateSupplierByIdService} = require("../Services/Supplier.Service.js");

module.exports.getSuppliers = async (req,res)=>{
    try {
        const stores = await getSuppliersService();
        res.status(200).json({
            status:'passed',
            message:"can get stores",
            Data:stores
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't get stores",
            error:err.message
        })
    }

}
module.exports.createASupplier = async (req,res)=>{
    const data = req.body;
    try {
        const result = await createSupplierService(data);  
        res.status(200).json({
            status:'passed',
            message:"can create stores",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't create stores",
            error:err.message
        })
    }

}
module.exports.getASupplierById = async (req,res)=>{
    const {id} = req.params;
    try {
        const result = await getSupplierByIdService(id);
        res.status(200).json({
            status:'passed',
            message:"can get the store",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't get the store",
            error:err.message
        })
    }

}
module.exports.updateASupplierById = async (req,res)=>{
    const {id} = req.params;
    const data = req.body;
    try {
        const result = await updateSupplierByIdService(id,data)
        res.status(200).json({
            status:'passed',
            message:"can update the store",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't update the store",
            error:err.message
        })
    }

}