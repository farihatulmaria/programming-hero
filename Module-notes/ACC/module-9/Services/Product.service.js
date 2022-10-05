const Products = require("../Models/Product.Models");


module.exports.getAllProductsService = async() =>{
    const products = await Products.find({});
    return products;
}
module.exports.createProductService = async() =>{
    const product = await Products.create();
    return product;
}
module.exports.getAProductService = async(id) =>{
    const product = await Products.find({_id:id});
    return product;
}
module.exports.updateAProductService = async(id,data) =>{
    const product = await Products.find({_id:id},{$set:data},{runValidators:true});
    return product;
}
module.exports.deleteAProductService = async(id) =>{
    const deleteProduct = await Products.deleteOne({_id:id},{runValidators:true});
    return deleteProduct;
}