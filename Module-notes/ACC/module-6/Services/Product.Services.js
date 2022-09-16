const { collection } = require("../model/Product.model");
const Product = require("../model/Product.model");

exports.getProductService = async()=>{
   const products = await Product.find({});
   return products;
}
exports.createProductService = async (data) =>{
    const products = await Product.create(data)
    return products;
    
}
exports.updateProductService = async (productId,data)=>{
    const result = Product.updateOne({_id:productId},{$set:data},{
        runValidators:true
    });
    /* const product = await Product.findById(productId);
    const result = await product.set(data).save() */
    return result;
}
exports.bulkUpdateProductService = async (data)=>{
    const result = await Product.updateMany({_id:data.ids},data.data,{runValidators:true});

    /* let products = [];
    data.ids.forEach(product=>{
        products.push(Product.updateOne({_id:product.id},{$set:product.data}));
    })
    const result = await Promise.all(products); */

    return result
}

exports.bulkDeleteProductService = async (ids)=>{
    const result = await Product.deleteMany({_id:ids},{runValidators:true});
    return result
}

exports.deleteAProductService = async (productId)=>{
    const result = await Product.deleteOne({_id:productId},{runValidators:true});
    return result;
}