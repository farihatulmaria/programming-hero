const Product = require("../Models/Product.Models");


module.exports.getAllProductsService = async() =>{
    const products = await Product.find({});
    return products;
}
module.exports.createProductService = async() =>{
    const product = await Product.create();
    return product;
}
module.exports.getAProductService = async(id) =>{
    const product = await Product.find({_id:id});
    return product;
}
module.exports.updateAProductService = async(id,data) =>{
    const product = await Product.find({_id:id},{$set:data},{runValidators:true});
    return product;
}