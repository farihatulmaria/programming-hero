import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import FriendDetail from './Components/FriendDetail/FriendDetail';
import Friends from './Components/Friends/Friends';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFouned from './Components/NotFouned/NotFouned';
import Posts from './Components/Posts/Posts';
import PostsDetail from './Components/PostsDetail/PostsDetail';


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/friends' element={<Friends/>}/>
          <Route path='/friend/:id' element={<FriendDetail/>}/>
          <Route path='/posts' element={<Posts/>}>

            <Route path=':postId' element={<PostsDetail/>}></Route>

          </Route>
          <Route path='*' element={<NotFouned/>}/>
        </Routes>
    </div>
  );
}

export default App;
