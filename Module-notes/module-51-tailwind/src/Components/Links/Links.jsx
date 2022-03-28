import React from 'react';
 
const Links = (props) => {
    const {name,link} = props.route;
    return (
        
            <li className='mr-20 my-6 font-bold'>
                <a href={link}>{name}</a>
            </li>
       
    );
};

export default Links;