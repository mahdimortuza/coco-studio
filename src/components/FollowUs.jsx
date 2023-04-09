import React, { useState } from 'react';
import in1 from '../../src/img/in1.jpg'
import in2 from '../../src/img/in2.jpg'
import in3 from '../../src/img/in3.jpg'
import in4 from '../../src/img/in4.jpg'
import in5 from '../../src/img/in5.jpg'
import in6 from '../../src/img/in6.jpg'
import in7 from '../../src/img/in7.jpg'
import in8 from '../../src/img/in8.jpg'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const FollowUs = () => {

const [change,setChange] = useState(false)

    return (
        <div className='bg-mistyrose-300 rounded-2xl pt-8 mb-10 pb-10 mx-8 lg:mx-36'>
            <h1 className='pb-8 text-white font-bold text-4xl'>Follow Us on Instagram</h1>
            <p className='text-3xl'>thecocostudio_</p>

            <div className='px-8 mt-10 md:px-24'>
                
                <div className={` ${change ? 'flex justify-center px-8 md:px-0 lg:px-20' : 'hidden'}`}>
                    <img className='w-1/4 h-full' src={in1}></img>
                    <img className='w-1/4 h-full' src={in2}></img>
                    <img className='w-1/4 h-full' src={in3}></img>
                    <img className='w-1/4 h-full' src={in5}></img>
                </div>



                <div className={` ${change ? 'hidden' : 'flex justify-center px-8 md:px-0 lg:px-20'}`}>
                    <img className='w-1/4 h-full' src={in3}></img>
                    <img className='w-1/4 h-full' src={in6}></img>
                    <img className='w-1/4 h-full' src={in7}></img>
                    <img className='w-1/4 h-full' src={in2}></img>
                </div>


                <div className='flex justify-center mt-5' onClick={() => setChange(!change)}>
                            <span>
                                {
                                    change === true ?
                                    <ArrowLeftIcon className=" mr-10 h-10 p-2 rounded-3xl  bg-white text-black w-10" />  :
                                    <ArrowLeftIcon className=" mr-10 h-10 p-2 rounded-3xl  bg-white text-black w-10" /> 
                                }

                            </span>
                            <span>
                                {
                                    change === true ?        
                                    <ArrowRightIcon className="ml-10  h-10 p-2 rounded-3xl  bg-white text-black w-10" />  :        
                                    <ArrowRightIcon className="ml-10  h-10 p-2 rounded-3xl  bg-white text-black w-10" />
                                }

                            </span>
                        </div>

                {/* <div className='flex justify-center mt-5'>
            <ArrowLeftIcon className=" mr-10 h-10 p-2 rounded-3xl  bg-white text-black w-10" />          
            <ArrowRightIcon className="ml-10  h-10 p-2 rounded-3xl  bg-white text-black w-10" />
            </div> */}



            </div>
        </div>
    );
};

export default FollowUs;