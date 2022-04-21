import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import AddUser from "./Components/AddUser/AddUser";
import Home from './Components/Home/Home';
import Update from './Components/UpdateUser/UpdateUser';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user/add" element={<AddUser/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
    </>
  );
}

export default App;
