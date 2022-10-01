const Supplier = require('../Models/Supplier.Models') 
module.exports.getSuppliersService = async ()=>{
    const suppliers = await Supplier.find({})
    return suppliers;
}
module.exports.createSupplierService = async (data)=>{
    const newSupplier = await Supplier.create(data);
    return newSupplier;
}
module.exports.getSupplierByIdService = async (SupplierId) =>{
    const supplier = await Supplier.findOne({_id:SupplierId})
    return supplier;
}
module.exports.updateSupplierByIdService = async (SupplierId,data)=>{
    const updatedSupplier = Supplier.updateOne({_id:SupplierId},{$set:data},{runValidators:true});
    return updatedSupplier; 
}
