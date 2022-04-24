import { useEffect, useState } from 'react';

const useServiceDetail = (serviceId) => {
    const [service, setService] = useState({})
    useEffect(() => {
      const url = `http://localhost:5000/services/${serviceId}`
    
      fetch(url)
      .then(res => res.json())
      .then(data => setService(data))
      .catch(err => console.log(err))
    }, [serviceId])
    return [service]
};

export default useServiceDetail;