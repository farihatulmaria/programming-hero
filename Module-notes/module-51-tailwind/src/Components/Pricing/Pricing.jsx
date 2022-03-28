import React from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';

const Pricing = () => {
    const pricingOptions = [
        {
            id:1,
            name:"free",
            price:0,
            benefits: [
                'free lifetime',
                'limited deals',
                'limited support',
                'crazy deals'
            ]
        }, 
        {
            id:2,
            name:"Regular",
            price:9.99,
            benefits: [
                'everything on free',
                'limited deals',
                'unlimited support',
                'very crazy deals'
            ]
        } ,
        {
            id:3,
            name:"Premium",
            price:200.99,
            benefits: [
                'everything on regulars',
                'unlimited deals',
                'unlimited support',
                'very very crazy deals',
            ]
        }
    ] 
    return (
        <div className='bg-slate-600 text-center p-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deals</h1>
            <p className='my-5 font-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptate eveniet ad corporis officia iste beatae adipisci! Dolores sequi, temporibus repudiandae tempora consectetur soluta repellat veniam officiis quaerat ab facilis.</p>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    pricingOptions.map(option => <PricingOptions key={option.id} option= {option}/>)
                }
            </div>
        </div>
    );
};

export default Pricing;