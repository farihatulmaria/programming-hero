const Brand = require("../Models/Brands.Models")

module.exports.createBrandService = async (data)=>{
    const newBrand = await Brand.create(data);
    return newBrand;
}
module.exports.getBrandService = async ()=>{
    const brands = await Brand.find({}).select('-product -suppliers');
    return brands;
}
module.exports.getBrandByIdService = async (id) =>{
    const brand = await Brand.findOne({_id:id}).select('-product -suppliers');
    return brand;
}
module.exports.updateBrandByIdService = async (id,data)=>{
    const updatedBrand = Brand.updateOne({_id:id},{$set:data},{runValidators:true});
    return updatedBrand; 
}