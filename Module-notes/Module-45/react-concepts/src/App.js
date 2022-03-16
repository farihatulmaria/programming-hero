import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* { 
      products.map(product => <Product name={product.name} price={product.price}></Product>)
      } */}
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
      <br />
    </div>
  );
}
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h1>External Users</h1>
      {
        users.map(user => <Users name ={user.name} email ={user.email}></Users>)
      }
    </div>
  )
}
function Users(props){
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h4>Email: {props.email}</h4>
    </div>
  )
}


function Counter(){
  const [count,setCount] =  useState(0);
  
  const increaseCount = () =>{
    const newCount = count + 1;
    setCount(newCount);
  }
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {increaseCount}>Increase</button>
      <br />
      <br /> 
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}
const products = [
  { name:'laptop',price:100000 },
  { name:'phone',price:12000 },
  { name:'watch',price:2000 },
  { name:'tablet',price:22000 },
]
function Product(props){
  return (
    <div className="product-container">
      <h3>Name: {props.name}</h3>
      <h4>Price: {props.price}</h4>
    </div>
  );
}
export default App;
