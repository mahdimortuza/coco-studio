import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'


import h1 from "../../img/h1.png"
import h2 from "../../img/h2.png"
import { StarIcon } from '@heroicons/react/24/solid'

const Styles = () => {
    return (
        <div className='bg-[#F8C4B5] pb-16'>
            {/* style section starts here  */}
            <div className='bg-white mx-10 md:mx-24 lg:mx-30 xl:mx-44 bg-white rounded-3xl pt-16'>
                <h1 className='text-[#6ca494] font-bold text-5xl pt-10'>Choose Your Style</h1>

            {/* animation img  */}
            <div className='grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-6 lg:gap-16 xl:gap-18 p-12 md:px-22 lg:px-22 xl:px-60'>
                <div className="relative text-left border-4 rounded-xl border-solid border-mistyrose-100 hover:border-[#6ca494] transition duration-200">
                    <img className="w-full" src={h1} />
                    <img className="absolute top-0 left-0  w-full opacity-0 hover:opacity-100 transition-opacity" src={h2} />
                    <p className='text-white rounded-3xl text-sm absolute top-3 left-3 z-10 p-1 text-white bg-black'>SAVE $50.40 ADU</p>
                    <p className='absolute mt-2 ml-3'>Custom Hand-Drawn Illustration</p>

                    <div className=' ml-3 mt-12 flex'>
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <p>(12)</p>
                    </div>
                    <p className='ml-3 mt-3'>
                        <span>$125.99 AUD</span>
                        <span>from $75.59 AUD</span>
                    </p>
                </div>
                <div className="relative text-left border-4 rounded-xl border-solid border-mistyrose-100 hover:border-[#6ca494] transition duration-200">
                    <img className="w-full" src={h1} />
                    <img className="absolute top-0 left-0  w-full opacity-0 hover:opacity-100 transition-opacity" src={h2} />
                    <p className='text-white rounded-3xl text-sm absolute top-3 left-3 z-10 p-1 text-white bg-black'>SAVE $50.40 ADU</p>
                    <p className='absolute mt-2 ml-3'>Custom Hand-Drawn Illustration</p>

                    <div className=' ml-3 mt-12 flex'>
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <p>(12)</p>
                    </div>
                    <p className='ml-3 mt-3'>
                        <span>$125.99 AUD</span>
                        <span>from $75.59 AUD</span>
                    </p>
                </div>
                <div className="relative text-left border-4 rounded-xl border-solid border-mistyrose-100 hover:border-[#6ca494] transition duration-200">
                    <img className="w-full" src={h1} />
                    <img className="absolute top-0 left-0  w-full opacity-0 hover:opacity-100 transition-opacity" src={h2} />
                    <p className='text-white rounded-3xl text-sm absolute top-3 left-3 z-10 p-1 text-white bg-black'>SAVE $50.40 ADU</p>
                    <p className='absolute mt-2 ml-3'>Custom Hand-Drawn Illustration</p>

                    <div className=' ml-3 mt-12 flex'>
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <p>(12)</p>
                    </div>
                    <p className='ml-3 mt-3'>
                        <span>$125.99 AUD</span>
                        <span>from $75.59 AUD</span>
                    </p>
                </div>
                <div className="relative text-left border-4 rounded-xl border-solid border-mistyrose-100 hover:border-[#6ca494] transition duration-200">
                    <img className="w-full" src={h1} />
                    <img className="absolute top-0 left-0  w-full opacity-0 hover:opacity-100 transition-opacity" src={h2} />
                    <p className='text-white rounded-3xl text-sm absolute top-3 left-3 z-10 p-1 text-white bg-black'>SAVE $50.40 ADU</p>
                    <p className='absolute mt-2 ml-3'>Custom Hand-Drawn Illustration</p>

                    <div className=' ml-3 mt-12 flex'>
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <p>(12)</p>
                    </div>
                    <p className='ml-3 mt-3'>
                        <span>$125.99 AUD</span>
                        <span>from $75.59 AUD</span>
                    </p>
                </div>
                <div className="relative text-left border-4 rounded-xl border-solid border-mistyrose-100 hover:border-[#6ca494] transition duration-200">
                    <img className="w-full" src={h1} />
                    <img className="absolute top-0 left-0  w-full opacity-0 hover:opacity-100 transition-opacity" src={h2} />
                    <p className='text-white rounded-3xl text-sm absolute top-3 left-3 z-10 p-1 text-white bg-black'>SAVE $50.40 ADU</p>
                    <p className='absolute mt-2 ml-3'>Custom Hand-Drawn Illustration</p>

                    <div className=' ml-3 mt-12 flex'>
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <p>(12)</p>
                    </div>
                    <p className='ml-3 mt-3'>
                        <span>$125.99 AUD</span>
                        <span>from $75.59 AUD</span>
                    </p>
                </div>
                <div className="relative text-left border-4 rounded-xl border-solid border-mistyrose-100 hover:border-[#6ca494] transition duration-200">
                    <img className="w-full" src={h1} />
                    <img className="absolute top-0 left-0  w-full opacity-0 hover:opacity-100 transition-opacity" src={h2} />
                    <p className='text-white rounded-3xl text-sm absolute top-3 left-3 z-10 p-1 text-white bg-black'>SAVE $50.40 ADU</p>
                    <p className='absolute mt-2 ml-3'>Custom Hand-Drawn Illustration</p>

                    <div className=' ml-3 mt-12 flex'>
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <StarIcon className="h-6 w-6 text-mistyrose-300" />
                    <p>(12)</p>
                    </div>
                    <p className='ml-3 mt-3'>
                        <span>$125.99 AUD</span>
                        <span>from $75.59 AUD</span>
                    </p>
                </div>
                </div>
                <button className='relative inline-flex items-center bg-[#6ca494] text-white px-12 py-2 rounded-3xl text-xl mt-9 mb-36  hover:pr-16 ease-in-out duration-300 hover:bg-black hover:text-white'>
                        <span className=''>VIEW ALL </span>

                        <span className='absolute transform translate-x-full transition ease-in-out duration-300 opacity-0'><ArrowLongRightIcon className="h-6 w-6 ml-24" /></span>
                    </button>
            </div>
        </div>
    );
};

export default Styles;