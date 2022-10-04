const { getCategoriesService, createCategoryService, updateCategoryByIdService, getCategoryByIdService } = require("../Services/Category.Service");

module.exports.getCategories = async (req,res)=>{
    try {
        const categories = await getCategoriesService();
        res.status(200).json({
            status:'passed',
            message:"can get categories",
            Data:categories
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't get categories",
            error:err.message
        })
    }

}
module.exports.createACategory = async (req,res)=>{
    const data = req.body;
    try {
        const result = await createCategoryService(data);  
        res.status(200).json({
            status:'passed',
            message:"can create a category",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't create a category",
            error:err.message
        })
    }

}
module.exports.getACategoryById = async (req,res)=>{
    const {id} = req.params;
    try {
        const result = await getCategoryByIdService(id);
        res.status(200).json({
            status:'passed',
            message:"can get the category",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't get the category",
            error:err.message
        })
    }

}
module.exports.updateACategoryById = async (req,res)=>{
    const {id} = req.params;
    const data = req.body;
    try {
        const result = await updateCategoryByIdService(id,data)
        res.status(200).json({
            status:'passed',
            message:"can update the category",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't update the category",
            error:err.message
        })
    }

}
module.exports.deleteACategoryById = async (req,res)=>{
    const {id} = req.params;
    try {
        const result = await deleteCategoryByIdService(id)
        res.status(200).json({
            status:'passed',
            message:"can delete the category",
            Data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'You shall not pass',
            message:"can't delete the category",
            error:err.message
        })
    }

}