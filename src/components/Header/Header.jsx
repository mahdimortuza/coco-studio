import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/img/logo.png'
import { ShoppingCartIcon, MagnifyingGlassCircleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import './Header.css'

const Header = () => {

    const [open, setOpen] = useState(false)



    return (
        <header className='mx-0 w-full sticky top-0 z-20'>

            <div className='bg-black text-white py-2 w-full'>
                <h1 className='text-center w-full'>40% OFF ILLUSTRATIONS + FREE SHIPPING!</h1>
            </div>


            <nav className='py-6 bg-mistyrose-100'>


                <div className='flex justify-between'>
                    <div className='flex ml-5'>
                        <Link to="/"><img src={logo}></img></Link>
                    </div>

                    {/* for large screen */}


                    <ul className="hidden md:flex">
                        <li className='hover:border-b-2 border-gray-500'><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/Shop">Shop</Link></li>
                        <li><Link to="/"><img src={logo}></img></Link></li>
                        <li><Link to="/faq">FAQs</Link></li>
                        <li><Link to="/myorder">My Order</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>


                    {/* for mobile devices */}
                    <ul className={` absolute text-gray-600 mt-3 ${open ? ' right-0 top-24 items-center bg-white w-72 h-screen' : '-right-56 hidden'}`}>
                        <li onClick={() => setOpen(!open)} className='mt-8 border-b pb-3 pr-3'><Link to="/">Home</Link></li>
                        <li onClick={() => setOpen(!open)} className='mt-8 border-b pb-3 pr-3'><Link to="/about">About</Link></li>
                        <li onClick={() => setOpen(!open)} className='mt-8 border-b pb-3 pr-3'><Link to="/Shop">Shop</Link></li>
                        <li onClick={() => setOpen(!open)} className='hidden'><Link to="/"><img src={logo}></img></Link></li>
                        <li onClick={() => setOpen(!open)} className='mt-8 border-b pb-3 pr-3'><Link to="/faq">FAQs</Link></li>
                        <li onClick={() => setOpen(!open)} className='mt-8 border-b pb-3 pr-3'><Link to="/myorder">My Order</Link></li>
                        <li onClick={() => setOpen(!open)} className='mt-8 border-b pb-3 pr-3'><Link to="/contact">Contact</Link></li>
                    </ul>



                    <div className='icons flex'>
                        <MagnifyingGlassCircleIcon className="h-8 w-8 text-mistyrose-300 mr-3" />
                        <ShoppingCartIcon className="h-8 w-8 text-mistyrose-300 mr-3" />
                        <div className='md:hidden' onClick={() => setOpen(!open)}>
                            <span>
                                {
                                    open === true ?
                                        <XMarkIcon className="h-8 w-8 text-mistyrose-300 mr-3" /> :
                                        <Bars3Icon className="h-8 w-8 text-mistyrose-300 mr-3" />
                                }

                            </span>
                        </div>

                    </div>
                    </div>
            </nav>
        </header>
    );
};

export default Header;