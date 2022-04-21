const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(cors())
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('server is running')
})

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.zps15.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try {
        await client.connect();
        const serviceCollection = client.db('carUser').collection('service')

        app.get('/service', async (req,res)=>{
            const query = {};
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services)
        })

    } finally {
        
    }

}
run().catch(console.dir)




































// listing to port
app.listen(port , ()=>console.log('listing to ',port))