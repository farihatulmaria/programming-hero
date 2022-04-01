import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grandpa from './Components/Grandpa/Grandpa';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/review' element={<Review/>}></Route>
        <Route path='/grandpa' element={<Grandpa/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
