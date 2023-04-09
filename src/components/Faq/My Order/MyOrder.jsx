import React from 'react';
import love from "../../../img/love svgg_5b7f8260-230f-4373-94ac-8499a7b08a1e_180x.avif"

const MyOrder = () => {
    return (
        <div>
            <img className='mt-16 w-24 mx-auto' src={love}></img>
            <h1 className='font-bold text-5xl'>View Your Order</h1>

            <p className='w-4/5 mx-auto mt-4'>Please enter your order number and email address exactly as it appears on your order confirmation email to view and approve your order. If you cannot find your order information, please contact us here and we will gladly help you out!</p>

            <div className='mb-36'>
                <form className='mt-5 mx-auto flex flex-col w-96 md:flex md:flex-row gap-3 justify-center'>
                    <input className='px-6 py-3 rounded-3xl text-xl' placeholder='Order #' type='text'></input>
                    <input className='px-6 py-3 rounded-3xl text-xl' placeholder='Email' type='email'></input>
                </form>
                <button className='px-6 py-3 rounded-3xl text-xl bg-mistyrose-200 mt-5' type='submit'>VIEW MY ORDER</button>
            </div>
        </div>
    );
};

export default MyOrder;