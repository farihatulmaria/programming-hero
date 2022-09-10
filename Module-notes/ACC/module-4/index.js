const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const {connectToServer, getDb} = require('./utilities/DBConnet');
const productRouter = require('./routes/version-1/products.route');
const viewCount = require('./middleware/viewCount');
const { default: rateLimit } = require('express-rate-limit');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;


//middleware

app.use(cors())
app.use(express.json())
// app.use(express.static('pubilc'));
app.set("view engine", "ejs")



function verifyJWT(req,res,next){
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({ message: 'UnAuthorized access 🤫' });
    } 
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, decoded) =>{
        if (err) {
            return res.status(403).send({ message: 'Forbidden access 😅' })
        }
        req.decoded = decoded;
        next();
    });
}



// Database
connectToServer((err)=>{
    if(!err){
        app.listen(port,()=>{
            console.log(`listening to port: ${port}`);
        })
    }
    else{
        console.log(err);
    }
})

app.use('/products',productRouter)
/*         api  version  route*/ 
// app.use('/api/v1/products',productRouter) // for production level

async function run(){
    try{ /*   
        await client.connect();
        const productsCollection = client.db("AutoZone").collection("Products");
        const usersCollection = client.db("AutoZone").collection("users");
        const bookingsCollection = client.db("AutoZone").collection("bookings");
        const reviewsCollection = client.db("AutoZone").collection("reviews");
        const paymentCollection = client.db("AutoZone").collection("payment");

        app.post("/create-payment-intent", async (req, res) => {
            const product = req.body;
            const {payment} = product;
            const amount = payment*100
          
            // Create a PaymentIntent with the order amount and currency
            const paymentIntent = await stripe.paymentIntents.create({
              amount: amount,
              currency: "usd",
              payment_method_types:['card']
            });
          
            res.send({clientSecret: paymentIntent.client_secret})
          });


        const verifyAdmin = async (req,res,next)=>{
            const requester = req.decoded.email;
            const requesterAccount = await usersCollection.findOne({ email: requester });
            if (requesterAccount.role === 'admin') {
              next();
            }
            else {
              res.status(403).send({ message: 'forbidden' });
            }
        }

        //products

        app.get('/products' , async (req,res)=>{
            const query = {};
            const products = await productsCollection.find(query).toArray();
            res.send(products);
        })

        app.get('/products/:id',async (req,res)=>{
            const id = req.params.id;
            const query = {_id:ObjectId(id)};
            const product = await productsCollection.findOne(query);
            res.send(product);
        })

        app.delete('/products/:id',verifyJWT,verifyAdmin , async (req,res)=>{
            const id = req.params.id;
            const query = {_id:ObjectId(id)};
            const result = await productsCollection.deleteOne(query);
            res.send(result);
        })
        app.post('/products' ,verifyJWT, verifyAdmin, async(req,res)=>{
            const product = req.body;
            const query = {
                name:product.name,
                email:product.email,
            }
            const exists = await productsCollection.find(query).toArray();
            if(exists){
                res.send({ success: false, product: exists })
            }
            else{
                const result = await productsCollection.insertOne(product);
                res.send(result);
            }
        })


        // reviews

        app.get('/reviews',async(req,res)=>{
            const reviews = await reviewsCollection.find().toArray();
            res.send(reviews);
        })
        app.post('/reviews', verifyJWT, async (req,res)=>{
            const review = req.body;
            const result = await reviewsCollection.insertOne(review);
            res.send(result);

        })

        // user

        app.get('/users', verifyJWT,verifyAdmin, async (req,res)=>{
            const users = await usersCollection.find().toArray();
            res.send(users); 
        })
        app.patch('/users',async(req,res)=>{
            const userInfo = res.body;
            res.send(userInfo) 
        })
        app.get('/admin/:email', async(req,res)=>{
            const email = req.params.email;
            const user = await usersCollection.findOne({email: email});
            const isAdmin = user?.role === 'admin';
            res.send({admin: isAdmin});
        })
        app.put('/users/admin/:email' ,verifyJWT,verifyAdmin , async(req,res)=>{
            const email = req.params.email;
            const requester = req.decoded.email;
            const requesterAccount = await usersCollection.findOne({ email: requester });
            if(requesterAccount?.role === 'admin'){
                const filter = { email: email };
                const updateDoc = {
                     $set: { role: 'admin' },
                };
                const result = await usersCollection.updateOne(filter, updateDoc); 
                res.send(result);
            }
        })
        app.put('/users/:email', async (req,res)=>{
            const email = req.params.email;
            const user = req.body;
            const filler = {email : email};
            const options = {upsert:true};
            const updateDoc = {
                $set: user,
            };
            const result = await usersCollection.updateOne(filler,updateDoc,options);
            const token = jwt.sign({email:email}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5y' });
            res.send({result:result,token:token})
        })

        // booking

        app.get('/booking',verifyJWT,async (req,res)=>{
            const bookings = await bookingsCollection.find().toArray();
            res.send(bookings);
        })

        app.post('/booking',verifyJWT,async(req,res)=>{
            const booking = req.body;
            const result = await bookingsCollection.insertOne(booking);
            res.send({ success: true, result })
        })
        app.get('/booking/:email',verifyJWT,async(req,res)=>{
            const email = req.params.email;
            const query = {
                email: email
            }
            const booking = await bookingsCollection.find(query).toArray();
            res.send(booking)
        })
        app.delete('/booking/:id',verifyJWT,async(req,res)=>{
            const id = req.params.id;
            const query = {_id:ObjectId(id)};
            const result = await bookingsCollection.deleteOne(query);
            res.send(result)
        })
        app.patch('/bookings/:id', verifyJWT, async(req, res) =>{
            const id  = req.params.id;
            const payment = req.body;
            const filter = {_id: ObjectId(id)};
            const updatedDoc = {
              $set: {
                paid: true,
                transactionId: payment.transactionId
              }
            }
            const result = await paymentCollection.insertOne(payment);
            const updatedBooking = await bookingsCollection.updateOne(filter, updatedDoc);
            res.send(updatedBooking);
          })

        app.get('/singleBooking/:id', verifyJWT, async(req, res) =>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const booking = await bookingsCollection.findOne(query);
            res.send(booking);
        }) 

        // shipping

        app.put('/ship/:id',async(req,res)=>{
            const id = req.params.id;
            const filter = {_id: ObjectId(id)};
            const updateDoc ={
                $set:{
                    shipped : true,
                }
            }
            const result = await bookingsCollection.updateOne(filter, updateDoc);
            res.send(result) 
        })

     */
    console.log('ok');
}finally{

    }
}
run().catch(console.dir)


app.get('/', async(req,res)=>{
    // res.sendFile(__dirname + '/pubilc/index.html')
    res.render('home.ejs',{id:2})
})
app.all('*',(req,res)=>{
    res.send('Not Found')
})

