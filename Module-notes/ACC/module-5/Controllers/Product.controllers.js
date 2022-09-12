const Product = require("../model/Product.model");
const { getProductService, createProductService } = require("../Services/Product.Services");


exports.getProducts = async (req,res,next)=>{
  try {
    // const product = await Product.find({_id:"631cb9fd27f817c19eb89de4"}); 
    // const product = await Product.find({$or :[{_id:"631cb9fd27f817c19eb89de4"},{name:"something that I don't know"}]});
    // const product = await Product.find({status:{$ne :"out-of-stock"}});
    //  const product = await Product.find({},"name quantity"); // to show only the name and quantity of the product
    //const product = await Product.find({},"-name -quantity"); // to show all propartity of the product without name and quantity
    const product = await getProductService() // finding all of the products without any conditions
    res.status(200).json({
      status:"success",
      message:"can get the data",
      data:product
    })
  } catch (err) {
    res.status(400).json({
      status:"failed",
      message:"can't get the data",
      error:err.message
    })
  }
}
exports.creatProduct = async (req,res,next)=>{
    try {
      // save or create product
      const product = await createProductService(req.body);

      if(product.quantity == 0){
        product.status = "out-of-stock"
      }

      const result = await product.save() 
      result.logger()
      // const result = await product.create(req.body)
      res.status(200).json({
        status:'success',
        message:'Data inserted successfully ! 😊',
        data: result
      })
      res.send('it works')
    } catch (err) {
      res.status(400).json({
        status:"fail",
        message:"Data can't be inserted successfully 😱",
        error: err.message
      })
    }
  }