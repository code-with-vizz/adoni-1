import React, { useState } from 'react';
import corporateData from './CorporateData';
import Services from '../../Services';

const CorporateServices = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredImage(id);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className="max-w-6xl mx-auto py-10">
      {/* <h3 className='text-center mb-5 uppercase' >Corporate Services</h3>
      <h1 className="text-center text-4xl font-bold mb-8">NEW WAYS TO CONNECT IN THE SERVICES</h1> */}

      <Services />
      <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
              <div className="absolute inset-0 flex flex-col justify-between items-start bg-[#097cbf] bg-opacity-20 text-white p-4 transition-opacity duration-300 opacity-0 hover:opacity-100 cursor-pointer">
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
    </div>
  );
};

export default CorporateServices;
