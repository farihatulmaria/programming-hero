const products = [
    {id:1,name:'product1'}, 
    {id:2,name:'product2'},
    {id:3,name:'product3'},
]
module.exports.getAllProducts = async (req,res,next)=>{
    /* #note req:-
    The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on. The object is always referred to as req (and the HTTP response is res) but its actual name is determined by the parameters to the callback function in which you’re working.
     */
    const {ip ,params, body, headers}=req;
    const reqArray =[ip,params,body,headers];
    // console.log(reqArray);

    /* #note res:-
    The res object represents the HTTP response that an Express app sends when it gets an HTTP request.The object is always referred to as res (and the HTTP request is req) but its actual name is determined by the parameters to the callback function in which you’re working. */
    res.send(products)
}
module.exports.addAProduct = async (req,res)=>{
    products.push(res.body)
    res.send('products added')
}

module.exports.getAProduct= async (req,res)=>{
    const id = req.params.id;
    const foundedProduct = products.find(product => product.id = id);
    res.send(foundedProduct);

}
module.exports.updateAProduct = async (req,res)=>{
    const id = req.params.id;
    const data = req.body.name;
    const updatedProduct = products.find(product=>product.id = id); 
    updatedProduct._id = id;
    updatedProduct.name = data;

    res.send(updatedProduct)
}





/* you can do it like this module.exports= {getAllProducts,addAProduct}

   or, you can do it like this:

   module.exports.functionName(functionality) 
*/ 

