import React, { useState } from 'react';
import corporateData from './CorporateData';
import styled from 'styled-components';

const Products = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredImage(id);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className="max-w-7xl mt-10 mx-auto py-10">
      <h3 className='text-center mb-5 uppercase' >Our Products</h3>
      <h1 className="text-center text-4xl font-bold mb-8">Explore Our Innovations and Discover Products Today</h1>
      <div className='  ' >

        <div className='  rounded-xl px-4 py-4'>
          {/* <p className='text-blue-800 text-center py-4 font-semibold'>Click on pdf icon to download product catalog</p> */}
          <div className='md:grid md:gap-8 gap-4 md:grid-cols-4 '>

            <div class="relative my-2 mx-auto  rounded-lg  bg-gradient-to-tr from-pink-300   p-0.5 shadow-sm">
              <img className='h-40 w-full'  src='adoniNew/products/p1.png'></img>
              <div class="bg-white flex justify-between py-5 px-2 rounded-md">
                <h1 class="font-semibold text-md mb-2">
                  Heavy Duty Shock Absorber</h1>

                {/* <div class="icon-wrapper  pl-2 pr-4">
                  <a href="adoni/productpdfs/adoni tech heavy duty Buffers.pdf" download ><i class="fas fa-file-pdf text-xl text-red-600"></i></a>
                </div> */}
              </div>

            </div>
            <div class="relative my-2 mx-auto  rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-sm">
              <img className='h-40 w-full' src='adoniNew/products/p2.png' ></img>
              <div class="bg-white flex  justify-between py-2 px-2 rounded-md">
                <h1 class="font-semibold text-md mb-2">Mass Without Propeling Force</h1>
                {/* <div class="icon-wrapper  pl-2 pr-4">
                  <a href="adoni/productpdfs/YSRA.pdf" download ><i class="fas fa-file-pdf text-xl text-red-600"></i></a>
                </div> */}
              </div>
            </div>
            <div class="relative my-2 mx-auto  rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-sm">
              <img className='h-40 w-full'  src='adoniNew/products/p3.png' ></img>
              <div class="bg-white flex justify-between py-5 px-2 rounded-md">
                <h1 class="font-semibold text-md mb-2"> Industrial Shock Absorbers	</h1>
                {/* <div class="icon-wrapper  pl-2 pr-4">
                  <a href="adoni/productpdfs/adoni tech heavy duty Buffers.pdf" download ><i class="fas fa-file-pdf text-xl text-red-600"></i></a>
                </div> */}
              </div>
            </div>
            <div class="relative my-2 mx-auto  rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-sm">
              <img className='h-40 w-full'  src='adoniNew/products/p4.jpg' ></img>

              <div class="bg-white flex justify-between py-2 px-2 rounded-md">
                <h1 class="font-semibold text-md mb-2">   Hydraulic Feed rate controllers (Series TSC) 	</h1>
                {/* <div class="icon-wrapper  pl-2 pr-4">
                  <a href="adoni/productpdfs/TSC CATLOUGE.pdf" download ><i class="fas fa-file-pdf text-xl text-red-600"></i></a>
                </div> */}
              </div>
            </div>
            <div class="relative my-2 mx-auto  rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-sm">
              <img className='h-40 w-80'  src='adoniNew/products/p6.jpg' ></img>

              <div class="bg-white justify-between flex py-5 px-2 rounded-md">
                <h1 class="font-semibold text-md mb-2">   Product Profile 	</h1>
                {/* <div class="icon-wrapper  pl-2 pr-4">
                  <a href="adoni/productpdfs/ADONI TECH PRODUCTS PROFILE.pdf" download ><i class="fas fa-file-pdf text-xl text-red-600"></i></a>
                </div> */}
              </div>
            </div>
            <div class="relative my-2 mx-auto  rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-sm">
              <img className='h-40 w-full'  src='adoniNew/products/p7.jpg'></img>

              <div class="bg-white flex justify-between py-2 px-2 rounded-md">
                <h1 class="font-semibold text-md mb-2"> Lanamatic-Adonitech-16-ZS STANDARD CYLINDER 	</h1>
                <div class="icon-wrapper  pl-2 pr-4">
                  <a href="adoni/productpdfs/Product Catalogue Lanamatic-Adonitech-16-ZS STANDARD CYLINDER.pdf" download ><i class="fas fa-file-pdf text-xl text-red-600"></i></a>
                </div>
              </div>
            </div>
            <div class="relative my-2 mx-auto  rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-sm">
              <img className='h-40 w-full'  src='adoniNew/products/p8.jpg' ></img>

              <div class="bg-white flex justify-between py-2 px-2 rounded-md">
                <h1 class="font-semibold text-md mb-2"> Rodless Pneumatic Cylinders & Accessories 	</h1>
                {/* <div class="icon-wrapper  pl-2 pr-4">
                  <a href="adoni/productpdfs/Product Catalogue Lanamatic-Adonitech-WEB.pdf" download ><i class="fas fa-file-pdf text-xl text-red-600"></i></a>
                </div> */}
              </div>
            </div>
            <div class="relative my-2 mx-auto  rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-sm">
              <img className='h-40 w-full'  src='adoniNew/products/p9.jpg' ></img>

              <div class="bg-white flex justify-between py-5 px-2 rounded-md">
                <h1 class="font-semibold text-md mb-2"> T&K Suction Cup 	</h1>
                {/* <div class="icon-wrapper  pl-2 pr-4">
                  <a href="adoni/productpdfs/T&K Suction Cup Catalog-AdoniTech.pdf" download ><i class="fas fa-file-pdf text-xl text-red-600"></i></a>
                </div> */}
              </div>
            </div>
            <div class="relative my-2 mx-auto  rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-sm">
              <img className='h-40 w-full'  src='adoniNew/products/p10.jpg' ></img>

              <div class="bg-white flex justify-between py-2 px-2 rounded-md">
                <h1 class="font-semibold text-md mb-2"> Wire Rope Vibration Isolator 	</h1>
                {/* <div class="icon-wrapper cursor-pointer  pl-2 pr-4" >
                  <a href="adoni/productpdfs/WIRE ROPE ISOLATER ADONITECH.pdf" download ><i class="fas fa-file-pdf text-xl text-red-600"></i></a>
                </div> */}
              </div>

            </div>
            <div class="relative my-2 mx-auto  rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-sm">
              <img className='h-40 w-full'  src='adoniNew/products/p11.jpg' ></img>

              <div class="bg-white flex justify-between py-2 px-2 rounded-md">
                <h1 class="font-semibold text-md mb-2"> Wire Rope Vibration Isolator 	</h1>
                {/* <div class="icon-wrapper cursor-pointer  pl-2 pr-4" >
                  <a href="adoni/productpdfs/WIRE ROPE ISOLATER ADONITECH.pdf" download ><i class="fas fa-file-pdf text-xl text-red-600"></i></a>
                </div> */}
              </div>

            </div>
            <div class="relative my-2 mx-auto  rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-sm">
              <img className='h-40 w-full'  src='adoniNew/products/p12.jpg' ></img>

              <div class="bg-white flex justify-between py-2 px-2 rounded-md">
                <h1 class="font-semibold text-md mb-2"> Wire Rope Vibration Isolator 	</h1>
                {/* <div class="icon-wrapper cursor-pointer  pl-2 pr-4" >
                  <a href="adoni/productpdfs/WIRE ROPE ISOLATER ADONITECH.pdf" download ><i class="fas fa-file-pdf text-xl text-red-600"></i></a>
                </div> */}
              </div>

            </div>
          </div>
        </div>

        {/* <div className='mt-16'>
          <div className="grid md:grid  md:grid-cols-4 gap-6">
            {corporateData.map((service) => (
              <div
                key={service.id}
                className="text-center relative overflow-hidden"
                onMouseEnter={() => handleMouseEnter(service.id)}
                onMouseLeave={handleMouseLeave}
                style={{ transition: 'transform 0.3s ease, filter 0.3s ease' }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="mx-auto mb-4 h-80 w-80"
                  style={{ filter: hoveredImage === service.id ? 'grayscale(90%)' : 'none', transform: hoveredImage === service.id ? 'scale(1.05)' : 'scale(1)' }}
                />
                {hoveredImage === service.id && (
                  <div className="absolute inset-0 flex flex-col justify-between items-start bg-black bg-opacity-50 text-white p-4 transition-opacity duration-300 opacity-0 hover:opacity-100 cursor-pointer">
                    <span className="text-lg font-bold ml-5">0{service.id}</span>
                    <div>
                      <h2 className="text-lg font-bold mb-2 uppercase">{service.title}</h2>
                      <p className="text-sm ml-0 uppercase">{service.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Products;


const Wrapper = styled.button`
  border: 1px solid;
`;
