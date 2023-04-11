import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid'
import { RxDotFilled } from 'react-icons/rx';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

import miriam from "../../img/miriam.png"


const slides = [
    {
        name: 'Theresa',
        description: '"Wow, just wow! You have no idea how this makes my heart so full. I’m so happy".'
    },
    {
        name: 'Natalie',
        description: '"Honestly one of the best companies I have dealt with. I will definitely be ordering for a third time!”'
    },
    {
        name: 'Alexia',
        description: '"Thank you so much, this is my 4th order and love the artwork and customer care you all provide!”'
    },

    {
        name: 'Alesha',
        description: '"Oh my gosh that is amazing it looks exactly like him! Thank you so much, you are so talented! My dad is going to love this.”'
    },

];



const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='mt-6 pt-6 pb-20'>


<h1 className='pt-8 black-white font-bold text-4xl'>What our customers, really say</h1>

<div className='block md:hidden'>
<div className='mx-auto px-16'>

<div className='txt-left'>
    <img src={miriam} className='mx-auto'></img>
    <h1 className='font-bold text-left text-2xl'>Theresa</h1>
    <div className='flex mt-2 mb-2'>
        <StarIcon className="h-6 w-6 text-yellow-500" />
        <StarIcon className="h-6 w-6 text-yellow-500" />
        <StarIcon className="h-6 w-6 text-yellow-500" />
        <StarIcon className="h-6 w-6 text-yellow-500" />
        <StarIcon className="h-6 w-6 text-yellow-500" />
    </div>
    <p className='text-left '>"I’ve got several prints from Coco Studio (for gifts and also myself!) and the team are always so friendly and professional. They are always happy to do any changes and the results are awesome! Best team."</p>

</div>


</div>


<div className='mx-16 pb-4 px-6 rounded-3xl bg-[#f3e8ec]'>
<h1 className='mt-14 font-bold text-left text-2xl my-5 text-black'>{slides[currentIndex].name}</h1>
<p className='text-left'>{slides[currentIndex].description}</p>
</div>

<div className='flex top-4 mt-8 justify-center py-2'>
{slides.map((slide, slideIndex) => (
    <div
        key={slideIndex}
        onClick={() => goToSlide(slideIndex)}
        className='text-2xl cursor-pointer'
    >
        <RxDotFilled />
    </div>
))}

</div>
</div>


            
                <button className='bg-[#6ca494] text-white px-12 py-3 rounded-3xl text-xl mt-5'>CREATE NOW</button>










            <div className='hidden md:block'>


                <div className='mx-auto grid md:grid-cols-3 gap-6 px-8 md:px-16 lg:px-32 mt-10'>
                    {/* mx-auto px-4 grid md:grid-cols-3 place-items-center h-full gap-8 */}


                    <div className='flex flex-col gap-6'>
                        <div className='w-full p-6 rounded-2xl text-left bg-[#f3e8ec]'>
                            <h1 className='font-bold text-xl'>Theresa</h1>
                            <div className='flex mt-2 mb-2'>
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                            </div>
                            <p>"Wow, just wow! You have no idea how this makes my heart so full. I'm so happy"</p>
                        </div>
                        <div className='w-full p-6 rounded-2xl text-left bg-[#f3e8ec]'>
                            <h1 className='font-bold text-xl'>Theresa</h1>
                            <div className='flex mt-2 mb-2'>
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                            </div>
                            <p>"Wow, just wow! You have no idea how this makes my heart so full. I'm so happy"</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-0'>
                        <div className='w-full p-6'>
                            <img className='mx-auto' src={miriam}></img>
                        </div>
                        <div className='w-full p-6'>
                            <h1 className='font-bold text-xl'>Theresa</h1>
                            <div className='flex mt-2 mb-2'>
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                            </div>
                            <p>"Wow, just wow! You have no idea how this makes my heart so full. I'm so happy"</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-6'>
                        <div className='w-full p-6 rounded-2xl text-left bg-[#f3e8ec]'>
                            <h1 className='font-bold text-xl'>Theresa</h1>
                            <div className='flex mt-2 mb-2'>
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                            </div>
                            <p>"Wow, just wow! You have no idea how this makes my heart so full. I'm so happy"</p>
                        </div>
                        <div className='w-full p-6 rounded-2xl text-left bg-[#f3e8ec]'>
                            <h1 className='font-bold text-xl'>Theresa</h1>
                            <div className='flex mt-2 mb-2'>
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                                <StarIcon className="h-6 w-6 text-yellow-500" />
                            </div>
                            <p>"Wow, just wow! You have no idea how this makes my heart so full. I'm so happy"</p>
                        </div>
                    </div>



                </div>
                <button className='relative inline-flex items-center bg-[#6ca494] text-white px-12 py-2 rounded-3xl text-xl mt-9 mb-36  hover:pr-16 ease-in-out duration-300 hover:bg-black hover:text-white'>
                        <span className=''>CREATE NOW </span>

                        <span className='absolute transform translate-x-full transition ease-in-out duration-300 opacity-0'><ArrowLongRightIcon className="h-6 w-6 ml-32" /></span>
                    </button>
            </div>

        </div>
    );
};

export default Review;