import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
