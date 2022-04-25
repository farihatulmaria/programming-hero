const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zps15.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try {
        await client.connect();
        const serviceCollection = client.db('CarService').collection('service');
        const orderCollection = client.db('CarService').collection('order')

        // loading all of the services on the client side

        app.get('/services', async (req,res) => {
            const query = {};
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services)
        })

        // loading a service on the server side

        app.get('/services/:id' , async (req,res)=>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)}
            const service = await serviceCollection.findOne(query)
            res.send(service)
        })

        // adding a service from the client side to DataBase

        app.post('/services' , async (req,res)=>{
            const newService = req.body;
            const result = await serviceCollection.insertOne(newService)
            res.send(result)
        })

        app.delete('/services/:id' ,async (req,res)=>{
            const id = req.params.id;
            const query = {_id:ObjectId(id)}
            const result = await serviceCollection.deleteOne(query)
            res.send(result) 
        })
        // order

        app.post('/order',async (req,res)=>{
            const newOrder = req.body;
            const result = await orderCollection.insertOne(newOrder);
            res.send(result);
        })

    } finally { 
    }
}
run().catch(console.dir)


// listing to port
app.listen(port , ()=> console.log('listing to ',port))