import React from 'react';
import recent1 from "../../img/recent1.png"
import recent2 from "../../img/recent2.png"

const Recently = () => {
    return (
        <div>
            <h1 className='pt-8 mt-20  text-black font-bold text-4xl'>Recently Viewed Products</h1>

        <div className=' grid md:grid-cols-4 md:px-32'>
        <div className='m-8 h-full md:w-4/6'>
                <img className='rounded-xl border-2 border-white hover:border-2 hover:border-[#6ca494]  bg-white ' src={recent1}></img>
                <p className='text-left mt-4'>Custom Hand-Drawn Illustration</p>
                <p className='text-left font-bold'>$75.59</p>
        </div>

        <div className='m-8 h-full md:w-4/6'>
                <img className='rounded-xl border-2 border-white hover:border-2 hover:border-[#6ca494]  bg-white ' src={recent2}></img>
                <p className='text-left mt-4'>Custom Hand-Drawn Illustration</p>
                <p className='text-left font-bold'>$75.59</p>
        </div>
        </div>
            
        </div>
    );
};

export default Recently;