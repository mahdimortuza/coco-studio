import React from 'react';
import gif from "../../img/gifx.gif"

const Memories = () => {
    return (
        <div>
            {/* memories section starts  */}

            <div className='mx-auto text-left pt-20 px-20 grid place-items-center pb-10 h-full md:grid-cols-2 gap-0 bg-mistyrose-300'>
                <img className='w-4/6 mx-auto' src={gif}></img>

                <div className='mx-auto w-4/6'>
                    <h1 className='text-[#6ca494] font-bold text-4xl md:text-4xl '>Memories you can hold</h1>
                    <p className='mt-5'>Our custom illustrations make the perfect gifts
                        for, well, everyone! From newborns to newlyweds, pets to grandparents,
                        our beautiful illustrations will definitely level-up your gifting and bring some serious smiles.</p>
                    <button className='mx-auto bg-[#6ca494] text-white px-8 py-2 text-xl mt-9 mb-20'>ORDER NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Memories;