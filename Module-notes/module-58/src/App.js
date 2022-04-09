import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Order from './Components/Orders/Orders';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/> 
        <Route path='/orders' element={
        <RequireAuth>
          <Order/>
        </RequireAuth>
        }/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
