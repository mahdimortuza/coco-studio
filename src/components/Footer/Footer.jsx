import React from 'react';
import logo from "../../img/Logo_04_1_x90@2x.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faPinterestP, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className='px-8 md:px-20 text-white bg-[#6ba594] py-16'>
            <div className='grid md:grid-cols-5 gap-10 text-left'>
            <div>
                <img className='mx-auto w-2/4 md:w-full' src={logo}></img>
            </div>

            <div className=''>
                <h1 className='text-[#f8c2a9] text-xl'>Info</h1>
                <p>Search</p>
                <p>FAQs</p>
                <p>Contact Us</p>
                <p>Gift Vouchers</p>
                <p>Terms and Service</p>
                <p>My Order</p>
            </div>

            <div className=''>
                <h1 className='text-[#f8c2a9] text-xl'>Policies</h1>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
                <p>Shipping</p>
                <p>Refund Policy</p>
            </div>

            <div className=''>
                <h1 className='text-[#f8c2a9] text-xl'>Currency</h1>
                <form>AUD</form>
            </div>

            <div className=''>
                <h1>Follow Us</h1>

                <div className=''>
                    <FontAwesomeIcon className=' bg-white text-[#6ca494] p-2 px-3 rounded-3xl text-2xl' icon={faFacebookF} />
                    <FontAwesomeIcon className='ml-2 bg-white text-[#6ca494] p-2 px-3 rounded-3xl text-2xl' icon={faPinterestP} />
                    <FontAwesomeIcon className='ml-2 bg-white text-[#6ca494] p-2 rounded-3xl text-2xl' icon={faInstagram} />
                </div>

            </div>

            <div>
            {/* <FontAwesomeIcon icon={faAmericanExpressCreditCard} /> */}
            {/* <FontAwesomeIcon icon={faApplePayCreditCard} />
            <FontAwesomeIcon icon={faMasterCardCreditCard} />
            <FontAwesomeIcon icon={faGooglePay} />
            <FontAwesomeIcon icon={faPaypal} />
            <FontAwesomeIcon icon={faVisaCreditCard} />
            <FontAwesomeIcon icon={faHexagonVerticalNft} /> */}
            </div>
        </div>
            <h1>The Coco Studio ❤ Art with heart</h1>
        </div>
    );
};

export default Footer;