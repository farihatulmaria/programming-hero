import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import Checkout from './Pages/Checkout/Checkout';
import Home from "./Pages/Home/Home/Home";
import Login from './Pages/Login/Login';
import ManageServices from './Pages/ManageServices/ManageServices';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Header from "./Shared/Header/Header";
import NotFound from './Shared/NotFound/NotFound';

function App() {
  return (
    <div className='app'>
    <Header/>
    <main style={{margin:'100px 0'}}>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/service/:serviceId" element={<ServiceDetail/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout/>
          </RequireAuth>
        }/>

        <Route path="/add-service" element={
          <RequireAuth>
            <AddService/>
          </RequireAuth>
        }/>

        <Route path="/manage-service" element={
          <RequireAuth>
            <ManageServices/>
          </RequireAuth>
        }/>

        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
