const { ObjectId } = require("mongodb");
const { getDb } = require("../utilities/DBConnet");

const products = [
    {id:1,name:'product1'}, 
    {id:2,name:'product2'},
    {id:3,name:'product3'},
]
module.exports.getAllProducts = async (req,res,next)=>{
    const db = getDb();
    const products = await db.collection("product").find().toArray(); 
    res.send(products)
}
module.exports.addAProduct = async (req,res)=>{
    try {
        const db = getDb();
        const product = res.body;
        const result = await db.collection("product").insertOne(product);
        res.send("successfull");
    } catch (err) {
        next(err);
    }
}

module.exports.getAProduct= async (req,res)=>{
    try {
        const db = getDb();
        const id = req.params.id;
        const result = await db.collection("product").findOne({_id: ObjectId(id)});
        res.send("Successfully fetched")
    } catch (err) {
        
    }

}
module.exports.updateAProduct = async (req,res)=>{
    const db = getDb();
    const id = req.params.id;
    const product = req.body;
    const query = {
        _id:ObjectId(id),
        name:product.name
    }
    const exists = await db.collection("product").find(query).toArray();
    if(exists){
        res.send({ success: false, product: exists })
    }
    else{
        const result = await db.collection("product").updateOne(product);
        res.send(result);
    } 
    res.send("successfully updated")
            
            
}





/* you can do it like this module.exports= {getAllProducts,addAProduct}

   or, you can do it like this:

   module.exports.functionName(functionality) 
*/ 

