import React, { useEffect, useState } from 'react';
import './Countries.css';
import Country from './Country';

function LoadCountries(){
 const [countries,setCountires] = useState([]);
    
    useEffect(() => {
  
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountires(data))
      
    }, [])
    
    return (
      <div>
        <h1>Visiting All Countries In The World</h1>
        <h3>Available Countries: {countries.length}</h3>
        <div className='country-container'>
        {
          countries.map(country => <Country 
            country = {country}
            key = {country.cca3}
            > 
            </Country>)
        }
        </div>
      </div>
    )
  }


export default LoadCountries