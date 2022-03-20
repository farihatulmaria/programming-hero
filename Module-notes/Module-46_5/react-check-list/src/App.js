import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Posts/>
    </div>
  );
}
function Posts(){
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))

  }, [])
  
  return(
    <div>
      <h1>Post : {posts.length}</h1>
          
          <div className='post-container container'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {
              posts.map(post => <DisplayPost post = {post}></DisplayPost>)
              }
            </div>
          </div>
    </div>
  )
}

function DisplayPost(props){
  const {title,body} = props.post;
  return(
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
          </div>
        </div>
      </div>
  )
}



export default App;
