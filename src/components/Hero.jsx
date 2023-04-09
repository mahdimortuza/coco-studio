import React from 'react';
import img1 from "../../src/img/Frame_1_031b04c6-2134-400f-828e-5ef06e5e7764_720x.png"
import img2 from "../../src/img/Frame_2_78ad3ba3-9aa0-44c7-b3b9-4d589858d87f_720x.png"
import heart from "../../src/img/heart_180x.png"

const Hero = () => {
    return (
        <div>
            {/* hero section starts here  */}
            <div className='mx-auto px-4 grid md:grid-cols-3 place-items-center h-full gap-8'>
                <div>
                    <img src={img1}></img>
                </div>

                <div className='mx-auto'>
                    <h1 className='font-bold text-4xl mx-auto'>Art with heart</h1>

                    <div className='flex mx-auto text-2xl mt-5'>
                        <p>BETTER GIFTS</p>
                        <img className='w-7 h-8 mx-2' src={heart}></img>
                        <p>STORED</p>
                    </div>

                    <button className='bg-[#6ca494] text-white px-12 py-3 rounded-3xl text-xl mt-9'>SHOP NOW</button>
                </div>

                <div>
                    <img src={img2}></img>
                </div>
            </div>




        </div>
    );
};

export default Hero;