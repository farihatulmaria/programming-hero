const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/' , (request ,res)=>{
    res.send('I am running my code on nodemon')
})


app.listen(port , ()=>{
    console.log('listening to' ,port);
})