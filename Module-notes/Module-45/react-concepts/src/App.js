import './App.css';

function App() {
  const products = [
    { name:'laptop',price:100000 },
    { name:'phone',price:12000 },
    { name:'watch',price:2000 },
    { name:'tablet',price:22000 },
  ]
  return (
    <div className="App">
      { 
      products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
    </div>
  );
}

function Product(props){
  return (
    <div className="product-container">
      <h3>Name: {props.name}</h3>
      <h4>Price: {props.price}</h4>
    </div>
  );
}
export default App;
