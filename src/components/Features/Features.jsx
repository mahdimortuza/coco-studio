import React from 'react';
import group from '../../img/Group_8692_9f47f5b7-c0ab-4569-b2cc-da424a6e2bc8_360x.avif'
import glob from '../../img/Group_10025_180x.avif'
import paper from '../../img/Group_10027_180x.avif'
import loop from '../../img/Group_10028_180x.png'
import haha from '../../img/Group_10026_180x.avif'


const Features = () => {
    return (
        <div>

              <div className='px-6 md:px-28'>
                <h1 className='text-[#6ca494] font-bold text-5xl pt-10'>Why you'll love</h1>
                <img className='mx-auto mt-5 w-80' src={group}></img>



                <div className='grid lg:grid-cols-2 text-left'>

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
};

export default Features;