const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.get('/' , (request ,res)=>{
    res.send('I am running my code on nodemon')
})

const users = [
  { 
    id : 1,
    name : "Leanne Graham",
    email: "George@april.biz",
  },{ 
    id : 2,
    name : "Christine S.Tucker",
    email: "John@april.biz",
  },{ 
    id : 3,
    name : "Sheldon C.Owens",
    email: "Sincere@april.biz",
  },{ 
    id : 4,
    name : "Maureen E. Lindell",
    email: "Jose@april.biz",
  }
]
app.get('/users', (req,res)=>{
    res.send(users)
})

app.get('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)  ;
    res.send(user)
})


app.post('/user', (req, res) =>{
  console.log('request', req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});


app.listen(port , ()=>{
    console.log('listening to' ,port);
})