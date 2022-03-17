import React from 'react';
import './Conutry.css';

const Country = (props) => {
    const {name,capital,population,flags} = props.country;

    return(
        <div>
          <h3>Name: { name.common}</h3>
          <h3>Capital: {capital}</h3>
          <h4>Population: {population}</h4>
          <div className='flag'>
            <img src={flags.png}  alt=''/>
          </div>
        </div>
      )
};

export default Country;