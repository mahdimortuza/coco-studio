import React from 'react';

const Join = () => {
    return (
        <div className='mt-24 bg-emerald-400 pt-20 pb-20'>
            <h1 className='pt-8 text-white font-bold text-4xl'>Join for fun stuff and super discounts</h1>
            <p className='mt-8 text-white text-xl'>Join the Coco family to receive fab offers and hear about our latest products!</p>


            <form className='md:flex justify-center gap-3 mt-5'>
                <input type='text' className='w-3/5 rounded-3xl px-8 py-2' placeholder='Enter Your Email Address....'></input> 
                <button className='bg-mistyrose-300 px-5 text-white rounded-3xl py-2' type='submit'>SIGN UP</button>
            </form>
        </div>
    );
};

export default Join;