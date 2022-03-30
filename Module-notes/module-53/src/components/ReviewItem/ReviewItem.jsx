import React from 'react';
import './ReviewItem.css';
const ReviewItem = (props) => {
    const {name,price,shipping ,quantity,img} = props.product
    return (
        <div className='review-item'>
            <div className="review-img">
                <img src={img} alt={name} />
            </div>
            <div className="review-items-details">
                <div className="review-content">
                    <h3 title={name}>
                        {
                            name.length > 20 ? name.slice(0,20) +'...' : name
                        }
                    </h3>
                    <p>Price: <span>${price}</span></p>
                    <p>Shipping : <span>${shipping}</span></p>
                    <p>Quantity : <span>${quantity}</span></p>
                </div>
                <div className="delete-item">
                    <button>delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;