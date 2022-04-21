import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import AddUser from "./Components/AddUser/AddUser";
import Home from './Components/Home/Home';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user/add" element={<AddUser/>}/>
      </Routes>
    </>
  );
}

export default App;
