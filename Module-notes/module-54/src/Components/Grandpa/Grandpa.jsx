
import React, { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';
/**
 * context api
 * 1. call createContext with a default value
 * 2. set a variable of the context with uppercase
 * 3. Make sure you export the context to use it in other places
 * 4. Wrap you child content using RingContext.Provider
 * 5. Provide a value
 * 6. to consume the context from child component
 * 7. useContext hook and you will you need to pass the contextName
 * 8. Make sure you take notes...
 *  */ 

export const RingContext = React.createContext('ring');
const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornament = 'Kada Matir Ring';

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    
    return (
    <RingContext.Provider value={[house, setHouse]}>
        <section className='grandpa'>
                <h4>Grandpa</h4>

                <p>House: {house} 
                    <button onClick={handleBuyAHouse}>Buy A House</button>
                </p>
                <div style={{ display: 'flex' }}>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
        </section>
    </RingContext.Provider> 
    );
};

export default Grandpa;