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
  const personName = ['jhon','Johnson','doe'];
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
          <Person></Person> {/* called an function in React */}
          <Person name ={personName[0]}  age ='20'></Person>{/* calling a dymatic function */}
      {
        personName.map(person => <li>Name : {person}</li>)
      }
      {
        /* calling a function(Person) and add it to an array by mapping */
        personName.map(person => <Person name ={person}></Person>)
      }
    </div>
  );
}

function Person(props) {

  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default App;