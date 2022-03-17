import React from 'react';
import './App.css';
import Countries from './components/Countries/Countrires';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <LoadCountries></LoadCountries> */}
      <Countries></Countries>
    </div>
  );
}

export default App;
