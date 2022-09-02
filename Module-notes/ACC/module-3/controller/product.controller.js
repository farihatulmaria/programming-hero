module.exports.getAllProducts = async (req,res,next)=>{
    /* #note req:-
    The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on. The object is always referred to as req (and the HTTP response is res) but its actual name is determined by the parameters to the callback function in which you’re working.
     */
    const {ip ,params, body,headers}=req;
    const reqArray =[ip,params,body,headers];
    // console.log(reqArray);

    /* #note res:-
    The res object represents the HTTP response that an Express app sends when it gets an HTTP request.The object is always referred to as res (and the HTTP request is req) but its actual name is determined by the parameters to the callback function in which you’re working. */
    res.send('products founded')
}
module.exports.addAProduct = async (req,res)=>{
    res.send('products added')
}

module.exports.getAProduct= async (req,res)=>{
    const id = req.params.id;
    res.send(`a product founded with id  no:${id}`)
}
module.exports.updateAProduct = async (req,res)=>{
    res.send('products added')
}





/* you can do it like this module.exports= {getAllProducts,addAProduct}

   or, you can do it like this:

   module.exports.functionName(functionality) 
*/ 

