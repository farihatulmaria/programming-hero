
import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';
import Special from '../Special/Special';

const MySelf = ({house}) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h5>MySelf</h5>
            <p><small>House: {house}</small></p>
            <p>gift: {RingContext}</p>
            <Special></Special>
        </div>
    );
};

export default MySelf;