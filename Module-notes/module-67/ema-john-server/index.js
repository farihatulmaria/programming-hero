const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://ema-john-db-user:oo5lfvj8eERLSZF5@cluster0.fvvsv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
/* client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
 */








app.get('/',(req,res)=>{
    res.send('Port is running')
})

app.listen(port , ()=>{
    console.log('listening to port');
})