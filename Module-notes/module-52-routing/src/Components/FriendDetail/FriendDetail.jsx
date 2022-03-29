import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // let param = useParams(); 
    let {id} = useParams();
    const [friend, setFriend] = useState({});

  
    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/users/${id}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setFriend(data))
    }, []);
    
    return (
        <div>
            <h3>from friend detail about {id}</h3>
            <h3>Name: {friend.name}</h3>
            <h3>Email: {friend.email}</h3>
            <h3>Website: {friend.website}</h3>
            <h3>City: {friend.address?.city}</h3>
            <h4>Lat: {friend.address?.geo?.lat}</h4>
        </div>
    );
};

export default FriendDetail;