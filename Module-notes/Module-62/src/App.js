import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import About from './Pages/About/About';
import Checkout from './Pages/Checkout/Checkout';
import Home from "./Pages/Home/Home/Home";
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from "./Shared/Footer/Footer";
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
        }></Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
    <Footer/>
    </div>
  );
}

export default App;
