const Store = require('../Models/Store.Models') 
module.exports.getStoresService = async ()=>{
    const stores = await Store.find({})
    return stores;
}
module.exports.createStoreService = async (data)=>{
    const newStore = await Store.create(data);
    return newStore;
}
module.exports.getStoreByIdService = async (storeId) =>{
    const store = await Store.findOne({_id:storeId})
    return store;
}
module.exports.updateStoreByIdService = async (storeId,data)=>{
    const updatedStore = Store.updateOne({_id:storeId},{$set:data},{runValidators:true});
    return updatedStore; 
}
module.exports.deleteStoreByIdService = async (storeId)=>{
    const deletedStore = Store.deleteOne({_id:storeId},{runValidators:true});
    return deletedStore; 
}

