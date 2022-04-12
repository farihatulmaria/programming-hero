import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import About from './Pages/About/About';
import Home from "./Pages/Home/Home/Home";
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import NotFound from './Shared/NotFound/NotFound';

function App() {
  return (
    <>
    <Header/>
    <main style={{margin:'100px 0'}}>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/service/:serviceId" element={<ServiceDetail/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
    <Footer/>
    </>
  );
}

export default App;
