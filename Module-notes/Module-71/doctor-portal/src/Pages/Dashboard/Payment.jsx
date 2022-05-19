import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';

const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const {data:appointment,isLoading,error} = useQuery(['booking',id], () =>
    fetch(url,{
        method:'GET',
        headers:{
            'authorization': `user ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>
      res.json()))
      if(isLoading){
          return <Loading/>
      }
    return (
        <div>
            {appointment.treatment}
        </div>
    );
};

export default Payment;