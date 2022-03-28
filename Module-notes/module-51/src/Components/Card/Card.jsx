import React from 'react';

const Card = (props) => {
    const {product}=props;
    const {name,price,img} = product;
    return (
        <div>
             <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt={name} />
                    <div className="card-body p-5">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Price: ${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;