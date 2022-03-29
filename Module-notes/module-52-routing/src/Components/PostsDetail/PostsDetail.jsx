import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostsDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({})
    useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setPost(data))
    }, [postId])
    return (
        <div>
            <h2>post details for : {postId}</h2>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default PostsDetail;