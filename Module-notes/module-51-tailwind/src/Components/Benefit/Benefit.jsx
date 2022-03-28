import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';
const Benefit = (props) => {
   const {benefit} = props;
    return (
        <div>
            <p className='flex items-center'>
                    <CheckCircleIcon className='w-6 h-6 text-green-500 mr-2 capitalize'/>
                    {benefit}
                </p>
        </div>
    );
};

export default Benefit;