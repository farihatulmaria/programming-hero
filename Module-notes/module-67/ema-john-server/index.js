const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process
.env.DB_USER}:${process.env.DB_USER_PASSWORD}@cluster0.fvvsv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
  try{
    await client.connect();
    const productCollection = client.db('emaJohn').collection('product');

    app.get('/products', async (req,res)=>{
      const page = parseInt(req.query.page); 
      const size = parseInt(req.query.size);

      const query = {};
      const cursor = productCollection.find(query)
      // to add a limit for loading that amount of data
      /* const products = await cursor.limit(10).toArray(); */
      let products;
      if(page || size){
        products = await cursor.skip(page*size).limit(size).toArray(); 
      }else{
        products = await cursor.toArray(); 
      }
      res.send(products)
    })
    app.get('/productCount' ,async (req,res)=>{
      const count = await productCollection.estimatedDocumentCount();
      res.send({count})
    })
    app.post('/productByKeys' , async(req,res)=>{
      const keys = res.body;
      const ids = keys.map(id => ObjectId(id))
      const query = {_id: {$in :ids}}
      const cursor = productCollection.find(query);
      const products = await cursor.toArray();
      res.send(products)
    })
  }
  finally{

  }
}


run().catch(console.dir)






app.get('/',(req,res)=>{
    res.send('Port is running')
})

app.listen(port , ()=>{
    console.log('listening to port');
})