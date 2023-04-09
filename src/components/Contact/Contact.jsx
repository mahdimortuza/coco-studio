import React from 'react';
import logo from '../../img/logo roundedsvgg_f589f3db-a4b1-4e31-ab98-67b589faa3f9_180x.avif'


const Contact = () => {
    return (
        <div className='mb-32'>
            <img className='mt-16 w-32 mx-auto' src={logo}></img>
            <h1 className='text-5xl font-bold mt-5'>Contact us</h1>


            <div className='flex flex-col gap-3  w-4/5 md:flex-row md:w-full mx-auto justify-center mt-10'>
                <div>
                    <form className='flex flex-col gap-3'>
                        <input placeholder='Name' className='px-6 py-3 rounded-3xl text-xl' type='text'></input>
                        <input placeholder='Email:' className='px-6 py-3 rounded-3xl text-xl' type='email'></input>
                        <input placeholder='Subject' className='px-6 py-3 rounded-3xl text-xl' type='text'></input>
                    </form>
                </div>

                <div>
                    <form className='flex flex-col gap-3'>
                        <textarea placeholder='Message:' className='px-6 py-5 rounded-3xl text-xl' type='text'></textarea>
                <button className='px-6 py-3 text-white rounded-3xl text-xl bg-mistyrose-200 mt-5' type='submit'>SUBMIT</button>
                    </form>
                </div>
            </div>
            <h1 className='mt-10 text-2xl'>Email: <span className='text-[#6ca494]'>info@cocostudioshop.com</span></h1>
        </div>
    );
};

export default Contact;