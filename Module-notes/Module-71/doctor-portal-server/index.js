const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json()); 


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.n5c9c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        const servicesCollection = client.db("doctor-portal").collection("services");
        const bookingCollection = client.db("doctor-portal").collection("booking");

        app.get('/services', async (req,res)=>{
            const query = {};
            const cursor = servicesCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        })
        app.post('/booking',async(req,res)=>{
            const booking = req.body.body;
            const result = await bookingCollection.insertOne(booking);
            res.send(result)
        })
        app.get('/booking',async(req,res)=>{
            const query = {}
            const cursor= bookingCollection.find(query);
            const bookings = await cursor.toArray();
            res.send(bookings)
        })
         /* 
            API naming convention

            - app.get('/booking') - get all booking in this way

            - app.get('/booking/:id') - getting a specific booking 

            - app.post('/booking') - adding a new booking

            - app.put('/booking/:id') - updating a specific booking

            OR,

            - app.put('/booking/:id') - updating a specific booking


            - app.delete('/booking/:id') - deleting a booking
         */

    }finally{
        
    }
}

run().catch(console.dir);

app.get('/',(req,res)=>{
    res.send('server is running');
})


app.listen(port,()=>{
    console.log('listening to port:',port);
})