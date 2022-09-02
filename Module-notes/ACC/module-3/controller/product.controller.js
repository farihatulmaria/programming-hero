module.exports.getAllProducts = async (req,res)=>{
    /** for production level programming / programming with a team
         * @api {get} /get All product
         * @apiDescription Get all the product
         * @apiPermission pubilc
         *
         * @apiHeader {String} Authorization   User's access token
         *
         * @apiParam  {Number{1-}}         [page=1]     List page
         * @apiParam  {Number{1-100}}      [limit=10]  Users per page
         *
         * @apiSuccess {Object[]} all the tools.
         *
         * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
         * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
    */ 
    res.send('products founded')
}
module.exports.addAProduct = async (req,res)=>{
    /** for production level programming / programming with a team
         * @api {get} / saves a product
         * @apiDescription Get all the product
         * @apiPermission admin
         *
         * @apiHeader {String} Authorization   User's access token
         *
         * @apiParam  {Number{1-}}         [page=1]     List page
         * @apiParam  {Number{1-100}}      [limit=10]  Users per page
         *
         * @apiSuccess {Object[]} all the tools.
         *
         * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
         * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
    */ 
    res.send('products added')
}
/* you can do it like this module.exports= {getAllProducts,addAProduct}

   or, you can do it like this:

   module.exports.functionName(functionality) 
*/ 
