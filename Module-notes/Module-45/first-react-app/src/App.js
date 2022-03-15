import './App.css';

const name = {
  firstName : 'John ',
  lastName: 'Doe',
  age: 34,
  job: 'Developer'
}
const age = name.age;
const appLinkStyle = {
  backgroundColor: '#56c1df',
  color: "white",
  padding: '10px 20px',
  textDecoration: 'none',
  fontWeight: 600
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className = "App-title"> JSX ( JavaScript XML )</h1>
        <p className="hi">Hi React.js</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3 style={{color:'#56c1df'}}>Name : {name.firstName + name.lastName}</h3>
        <p>Age : {age}</p>
        
        <br />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style = {appLinkStyle}
        >
          Learn React
        </a>
      </header> */}
    <Person></Person>
    </div>
  );
}

function Person(){
  return <h1>Farihatul Maria</h1>
}

export default App;