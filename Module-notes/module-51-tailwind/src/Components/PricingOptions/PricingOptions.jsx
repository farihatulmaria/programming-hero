import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';
const PricingOptions = (props) => {
    const {name,price,benefits} = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='text-2xl bg-slate-600 text-white py-2 rounded font-bold'>{name}</h2>
            <p className='py-6'>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-slate-600'>/mo</span>
            </p>
            <div>
                <h3 className='font-bold text-xl text-left'>Benefits</h3>
                {
                    benefits.map(benefit=><Benefit benefit={benefit}/>)
                }
                <button className='bg-slate-600 flex justify-center w-full py-2 rounded mt-6 text-white hover:bg-slate-800 font-bold'>Buy Now <ArrowRightIcon className='w-5 h-5 ml-1'/></button>
            </div>
        </div>
    );
};

export default PricingOptions;