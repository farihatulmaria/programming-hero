const {getSuppliersService,createSupplierService,getSupplierByIdService,updateSupplierByIdService} = require("../Services/Supplier.Service.js");

module.exports.getSuppliers = async (req,res)=>{
    try {
        const suppliers = await getSuppliersService();
        res.status(200).json({
            status:'passed',
            message:"can get suppliers",
            Data:supplier
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't get suppliers",
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
            message:"can create supplier",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't create supplier",
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
            message:"can get the supplier",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't get the supplier",
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
            message:"can update the supplier",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't update the supplier",
            error:err.message
        })
    }

}