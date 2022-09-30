const Category = require('../Models/Category.Models') 
module.exports.getCategoriesService = async ()=>{
    const categories = await Category.find({})
    return categories;
}
module.exports.createCategoryService = async (data)=>{
    const newCategory = await Category.create(data);
    return newCategory;
}
module.exports.getCategoryByIdService = async (categoryId) =>{
    const category = await Category.findOne({_id:categoryId})
    return category;
}
module.exports.updateCategoryByIdService = async (categoryId,data)=>{
    const updatedCategory = Category.updateOne({_id:categoryId},{$set:data},{runValidators:true});
    return updatedCategory; 
}