function dbConnect(){
    // const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@autozone.l3d69.mongodb.net/?retryWrites=true&w=majority`;
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    console.log('db conneted');
}
module.exports = dbConnect;