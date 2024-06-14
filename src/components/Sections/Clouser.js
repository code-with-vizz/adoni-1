


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Clouser = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 768, // Adjust this value as needed
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const slides = [
        { id: 1, src: '/adoni/slider/slider1.jpg', title: "csac", description: "axaxc" },
        { id: 2, src: '/adoni/slider/slider2.jpg', title: "csascadvac", description: "axaxc" },
        { id: 3, src: '/adoni/slider/slider3.jpg', title: "csaccacs", description: "axaxc" },
        { id: 4, src: '/adoni/slider/slider3.jpg', title: "csaccacs", description: "axaxc" },
        { id: 5, src: '/adoni/slider/slider3.jpg', title: "csaccacs", description: "axaxc" },
        { id: 6, src: '/adoni/slider/slider3.jpg', title: "csaccacs", description: "axaxc" },
    ];

    return (
        <div className=" bg-blue-800 py-20 ">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative px-10  align-center text-black" >

                        <img src={slide.src} alt={slide.title} className='rounded-xl h-[400px] border w-full ' />
                        <div
                            class="absolute mx-10 rounded-xl xs:bg-transparent xs:bg-black/40  ltr:xs:bg-gradient-to-r rtl:xs:bg-gradient-to-l inset-0 sm:bg-transparent sm:from-black/40 sm:to-white/10 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                        ></div>
                        <div className=" absolute  text-white left-[50%]  top-[50%] buttom-[50%]" style={{ transform: "translate(-50%, -50%)" }}>
                            <h3 >{slide.title}</h3>
                            <p>{slide.description}</p>
                            {/* ... other content ... */}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="slick-arrow  right-[2%] absolute top-[50%] bottom-[50%] z-10 " onClick={onClick}>
            {/* <p className=''>next</p> */}
            <i class="fa fa-arrow-circle-right text-4xl xs:text-white " aria-hidden="true"></i>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="slick-arrow absolute top-[50%] bottom-[50%] z-10 " onClick={onClick}>
         <i class="fa fa-arrow-circle-left text-4xl xs:text-white" aria-hidden="true"></i>

        </div>
    );
}

export default Clouser;