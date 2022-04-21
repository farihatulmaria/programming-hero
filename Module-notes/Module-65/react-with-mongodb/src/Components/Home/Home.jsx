import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setUsers(data))
    }, [])
    const removeUser = (id) =>{
        const proceed = window.confirm(" Are sure Your don't want to be our user Anymore ? ")
        if(proceed){
           const url = `http://localhost:5000/user/${id}`
           fetch(url ,{
               method: 'DELETE',
           })
           .then(res => res.json())
           .then(data => {
               if(data.deleteCount > 0){
                   const remaining =
                   users.filter(user => user._id !== id )
                   setUsers(remaining)
               }
           })
        }
    }
    return (
        <div>
            <h1 className='my-5 text-center'>Inputting User's information with MongoDB </h1>

            <h2 className='text-center'> Available Users: {users.length} </h2>
            <ul>
                {
                    users.map(user => 
                    <li key={user._id}>
                        {user.name} 
                        <Link to={`/update/${user._id}`}>Update</Link>
                        <button onClick={()=> removeUser(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;