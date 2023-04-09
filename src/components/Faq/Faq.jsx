import React from 'react';
import logo from '../../img/logo roundedsvgg_f589f3db-a4b1-4e31-ab98-67b589faa3f9_180x.avif'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Recently from '../Recently/Recently';
import Review from '../Review/Review';


const Faq = () => {
    return (
        <div>
            <img className='mt-16 w-32 mx-auto' src={logo}></img>
            <h1 className='text-5xl font-bold mt-5'>FAQ's</h1>

            <div className='flex justify-center mt-20'>
            <ShoppingCartIcon className="h-8 w-8 text-mistyrose-300 mr-3" />
            <h1>How to order</h1>
            </div>

            <div>

            </div>
            <Recently></Recently>
            <Review></Review>
        </div>
    );
};

export default Faq;