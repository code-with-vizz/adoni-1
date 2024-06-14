import React, { useState } from 'react';

const SocialLink = () => {


    return (

        <div className='md:justify-between flex items-center  bg-[#097cbf]  py-2 text-white z-20 md:py-3 md:flex'>
            <div className="md:flex md:items-center md:pl-20 ">
                <a href="mailto:sales@adonitech.co.in" className="text-white ">
                    <p><i className="fa fa-envelope mr-2 "></i>sales@adonitech.co.in</p>
                </a>
                <p className="text-body px-3"></p>
                <p><a href="tel:9890852663" className="text-white"><i className="fa fa-phone-alt mr-2"></i>+91 9890852663</a></p>
            </div>
            <div className='pr-30 z-20'>
                <div className="flex items-center">
                    {/* <a className=" px-3" href="#">
                        <i className="fab fa-facebook-f"></i>
                    </a> */}
                    {/* <a className=" px-3" href="#">
                        <i className="fab fa-twitter"></i>
                    </a> */}
                    <a className=" px-10" href="https://www.instagram.com/adonitech/">
                    <span className='text-white font-semibold'>Instagram</span>
                    </a>
                    {/* <a className=" px-3" href="#">
                        <i className="fab fa-youtube"></i>
                    </a> */}
                    {/* <a className="text-primary px-3" href="#">
                        <img style={{ width: '15px' }} src="/travels/god/god.jpg" alt="social-icon"></img>
                    </a> */}
                </div>
            </div>
        </div>

     );
}

 export default SocialLink;
