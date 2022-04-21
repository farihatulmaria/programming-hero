const express = require('express');
const cors = require('cors')
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('node module recap')
})

// user - DBUser-1
// password - 1oubqH5RKeQk0lxL

const uri = "mongodb+srv://DBUser-1:1oubqH5RKeQk0lxL@cluster0.zps15.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    
    try {
        await client.connect();
        const userCollection = client.db('insertDB').collection('users');
        const user = {
            name:'some one' ,email:'someone@gmail.com'
        }
        app.get('/user', async (req,res)=>{
            const query = {}
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);
        })
        // POST user : add a new user
        app.post('/user',async (req,res) => {
            const result =await userCollection.insertOne(user);
            const newUser = req.body;
            console.log(newUser);
            res.send(result)
        })

    } finally {
        // await client.close();
    }

}
run().catch(console.dir)


app.listen(port,()=>console.log(port))