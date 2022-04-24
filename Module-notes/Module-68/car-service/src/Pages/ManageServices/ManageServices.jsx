import React from 'react';
import useServices from '../../hooks/useServices';
const ManageServices = () => {
    const [services,setServices] = useServices();
    
    const handleDelete = (id)=>{
        const proceed = window.confirm('Are You Sure ?');
        if(proceed){
            const url = `http://localhost:5000/services/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining)
            })
        }
    }
    return (
        <div>
            <h2 className='my-5'>Manage Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h5>
                    
                </div>)
            }
        </div>
    );
};

export default ManageServices;