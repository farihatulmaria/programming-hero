import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Friends from './Components/Friends/Friends';
import Home from './Components/Home/Home';
import NotFouned from './Components/NotFouned/NotFouned';
function App() {
  return (
    <div className="App">
        <h1>Welcome</h1>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/friends' element={<Friends/>}/>
          <Route path='*' element={<NotFouned/>}/>
        </Routes>
    </div>
  );
}

export default App;
