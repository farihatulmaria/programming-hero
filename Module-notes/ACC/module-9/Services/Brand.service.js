const Brand = require("../Models/Brands.Models")

module.exports.createBrandService = async (data)=>{
    const result = await Brand.create(data);
    return result;
}
module.exports.getBrandService = async ()=>{
    const brands = await Brand.find({}.select('-product -suppliers');
    return brands
}
module.exports.getBrandByIdService = async ()=>{

}
module.exports.updateBrandByIdService = async ()=>{

}