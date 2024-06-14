import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './bannerClouser.css';

const images = [
    { id: 1, src: '/adoniNew/home/curve-brochure (1).png', title1: "   Heavy Duty "  ,title2 :"Shock Absorber"},

    { id: 2, src: '/adoniNew/home/slide3.png' , title1: "   Miniature"  ,title2 :"Shock Absorber" },
];

const BannerClouser = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    return (

        <div className='w-full md:mt-20 '>
            <Slider {...settings}>
                {images.map(image => (
                    <div className="">
                        <section class="px-3 py-5 bg-neutral-100 lg:py-10">
                            <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5">
                                <div class="order-2 lg:order-1 flex flex-col justify-center items-center">
                                    <p class="text-4xl font-bold md:text-7xl text-[#097cbf] pb-4">{image.title1} </p>
                                    <p class="text-4xl font-bold md:text-7xl">{image.title2} </p>
                                    <p class="mt-2 text-sm md:text-lg">For limited time only!</p>
                                    <button class="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800 rounded-xl">Contact Now</button>
                                </div>
                                <div class="order-1 lg:order-2 lg:w-[500px] lg:h-[500px]">
                                    <img class="h-80 w-80  lg:w-[450px] lg:h-[450px] " src={image.src} alt=""/>
                                </div>
                            </div>
                        </section>

                        {/* <section key={image.id} class="py-28 bg-black   bg-no-repeat bg-center bg-cover bg-fixed overflow-hidden" style={{ backgroundImage: `url(${image.src})` }}>
                            <div class="container  px-4 mx-auto">
                                <div class="px-12 slide-content rounded-lg pt-12 pb-9 md:max-w-xl bg-black bg-opacity-80 rounded-4xl" style={{ backdropFilter: 'blur(10px)' }}>
                                   
                                    <p class="mb-7 font-sans max-w-max px-3  text-sm text-white font-semibold uppercase border border-gray-700 rounded-md"></p>
                                    <h2 class="mb-4 text-6xl md:text-4xl text-white font-bold font-heading tracking-px-n leading-tight">Crane Buffer</h2>
                                    <p class="mb-11 text-lg text-gray-400 font-medium leading-normal">                                        Focuses on cost-effective energy absorption and vibration isolation solution.</p>
                                    <a class="inline-flex border px-4 py-4 flex-wrap items-center text-white hover:text-gray-200" href="https://calculation.cranebuffer.com">
                                        <span class="mr-2  font-semibold leading-normal">Go to Crane Buffer Calculator</span>
                                        <svg width="19" height="18" viewbox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 3.75L16.25 9M16.25 9L11 14.25M16.25 9L2.75 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </a>
                                 
                                </div>
                            </div>
                        </section> */}
                    </div>
                ))}
            </Slider>
        </div>


    );
};

export default BannerClouser;
