const Stock = require("../Models/Stock.Models")

module.exports.createStockService = async (data)=>{
    const newStock = await Stock.create(data);
    return newStock;
}
module.exports.getStockService = async ()=>{
    const Stocks = await Stock.find({}).select('-sellCount -store.id')
    return Stocks;
}
module.exports.getStockByIdService = async (id) =>{
    const stock = await Stock.findOne({_id:id})
    return stock;
}
module.exports.updateStockByIdService = async (id,data)=>{
    const updatedStock = Stock.updateOne({_id:id},{$set:data},{runValidators:true});
    return updatedStock; 
}
module.exports.deleteStockByIdService= async (id,data)=>{
    const deletedStock = Stock.deleteOne({_id:id},{runValidators:true});
    return deletedStock; 
}