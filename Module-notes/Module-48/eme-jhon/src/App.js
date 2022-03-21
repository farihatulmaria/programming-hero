import React from "react";
import Header from "./Components/Header/Header";
import Order from "./Components/Order/Order";
import './App.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Order/>
      </main>
    </div>
  );
}

export default App;
