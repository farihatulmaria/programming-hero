const {  getStoresService, createStoreService, getStoreByIdService, updateStoreByIdService, } = require("../Services/Store.Service");

module.exports.getStores = async (req,res)=>{
    try {
        const stores = await getStoresService();
        res.status(200).json({
            status:'passed',
            message:"can get stores",
            Data:stores
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't get stores",
            error:err.message
        })
    }

}
module.exports.createAStore = async (req,res)=>{
    const data = req.body;
    try {
        const result = await createStoreService(data);  
        res.status(200).json({
            status:'passed',
            message:"can create stores",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't create stores",
            error:err.message
        })
    }

}
module.exports.getAStore = async (req,res)=>{
    const {id} = req.params;
    try {
        const result = await getStoreByIdService(id);
        res.status(200).json({
            status:'passed',
            message:"can get the store",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't get the store",
            error:err.message
        })
    }

}
module.exports.updateAStore = async (req,res)=>{
    const {id} = req.params;
    const data = req.body;
    try {
        const result = await updateStoreByIdService(id,data)
        res.status(200).json({
            status:'passed',
            message:"can update the store",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't update the store",
            error:err.message
        })
    }

}