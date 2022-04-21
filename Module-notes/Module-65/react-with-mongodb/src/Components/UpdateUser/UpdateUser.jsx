import React from 'react';
import useParams from 'react-router-dom';
const UpdateUser = () => {
    const {id} = useParams()
    return (
        <div>
            <h2>Updating Users... {id}</h2>
        </div>
    );
};

export default UpdateUser;