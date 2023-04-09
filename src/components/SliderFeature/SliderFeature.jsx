import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import group from '../../img/Group_8692_9f47f5b7-c0ab-4569-b2cc-da424a6e2bc8_360x.avif'

import glob from '../../img/Group_10025_180x.avif'
import paper from '../../img/Group_10027_180x.avif'
import loop from '../../img/Group_10028_180x.png'
import haha from '../../img/Group_10026_180x.avif'

function App() {
  const slides = [
    {
      url: glob,
      name: 'Worldwide Shipping',
      description: 'Family or friends far away but still want to give them something super special? We can ship just about everywhere! Get in touch with us if you require delivery outside of Australia, New Zealand, United States, Canada or the UK so we can provide you with an accurate shipping quote.'
    },
    {
      url: paper,
      name: 'Digital illustration always included',
      description: 'Whether you buy a digital illustration, or opt to have your artwork framed - you will never pay extra to have the digital copy! We think this should be standard everywhere!'
    },
    {
      url: loop,
      name: 'Unlimited Revisions',
      description: 'As the cliche saying goes, we are not happy until you are! Our talented crew of artists will work with you until your are completely happy with your unique illustration.'
    },

    {
      url: haha,
      name: 'Thousands of happy customers!',
      description: 'In the past year we have created over 25,000 illustrations (yep, you read that right!) and our customers just keep coming back! Any why wouldn’t they? We are super proud of our excellent customer service and amazing product quality - plus we are also great humans (which is always nice, right?)'
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='px-6 mt-10 md:px-28'>

<h1 className='text-[#6ca494] font-bold text-5xl pt-10'>Why you'll love</h1>
                <img className='mx-auto mt-5 w-80' src={group}></img>










    <div className='m-auto py-8 px-4 md:hidden'>
      
      <div className='mx-auto px-16'>
        <img className='w-32 mx-auto' src={slides[currentIndex].url}></img>
        <h1 className='mt-5 font-bold text-2xl my-5 text-black'>{slides[currentIndex].name}</h1>
        <p>{slides[currentIndex].description}</p>
      </div>

      
      <div className='flex top-4 justify-center py-2'>
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
      <div>
</div>


</div>




               

<div>
                <div className='hidden md:grid grid-cols-2 text-left'>

                    <div className='flex mt-5'>
                        <img className='w-3/12 h-fit ' src={glob}></img>

                        <div className='ml-2 md:ml-5 px-5'>
                            <h1 className='font-bold  text-xl md:text-2xl'>Unlimited Revision</h1>
                            <p className='text-md md:text-lg'>As the cliche saying goes, we're 
                                not happy until you are! Our talented crew of artists will work 
                                with you until your are completely happy with your unique illustration.</p>
                        </div>
                    </div>
                    <div className='flex mt-5'>
                        <img className='w-3/12 h-fit ' src={paper}></img>

                        <div className='ml-2 md:ml-5 px-5'>
                            <h1 className='font-bold  text-xl md:text-2xl'>Unlimited Revision</h1>
                            <p className='text-md md:text-lg'>As the cliche saying goes, we're 
                                not happy until you are! Our talented crew of artists will work 
                                with you until your are completely happy with your unique illustration.</p>
                        </div>
                    </div>
                    <div className='flex mt-5'>
                        <img className='w-3/12 h-fit ' src={loop}></img>

                        <div className='ml-2 md:ml-5 px-5'>
                            <h1 className='font-bold  text-xl md:text-2xl'>Unlimited Revision</h1>
                            <p className='text-md md:text-lg'>As the cliche saying goes, we're 
                                not happy until you are! Our talented crew of artists will work 
                                with you until your are completely happy with your unique illustration.</p>
                        </div>
                    </div>
                    <div className='flex mt-5'>
                        <img className='w-3/12 h-fit ' src={haha}></img>

                        <div className='ml-2 md:ml-5 px-5'>
                            <h1 className='font-bold  text-xl md:text-2xl'>Unlimited Revision</h1>
                            <p className='text-md md:text-lg'>As the cliche saying goes, we're 
                                not happy until you are! Our talented crew of artists will work 
                                with you until your are completely happy with your unique illustration.</p>
                        </div>
                    </div>
                    
            
                   
                </div>
            </div>
    </div>
  );
}

export default App;
