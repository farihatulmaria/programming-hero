import React from 'react';
import bannerImage from "../../images/banner-img.png";
import './Banner.css';
const Banner = () => {
    return (
        <section className='banner'>
            <div className="banner-content">
                <h4>Sale up to 70% off</h4>
                <h1>New Collection For Fall</h1>
                <p>Discover all the new arrivals of ready-to-wear collection.</p>
                <button className='shop-btn'>shop now</button>
            </div>
            <div className="banner-image">
                <img src={bannerImage} alt="A man in a red jacket" />
            </div>
        </section>
    );
};

export default Banner;