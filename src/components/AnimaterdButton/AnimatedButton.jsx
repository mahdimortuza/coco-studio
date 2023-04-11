import React from 'react';
import './AnimatedButton.css'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

const AnimatedButton = () => {
    return (
        <div className=''>

            <button className='bg-[#6ca494] mb-36 px-10 py-2 rounded-3xl text-white ease-in-out duration-300 hover:bg-black hover:text-white'>
                <span>SHOP NOW </span>

                <span className='transform translate-x-full ml-36 transition ease-in-out duration-300 opacity-0'><ArrowLongRightIcon className="h-6 w-6" /></span>
            </button>



        </div>
    );
};

export default AnimatedButton;