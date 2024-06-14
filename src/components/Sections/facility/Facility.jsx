// import React from 'react'

// function Facility() {

//     const facility = [
//         {
//             id: 1,
//             image: '/adoni/facility/facility1.jpg',
//             title: "Raw Material storage   after testing in Nabl accredited Labs storage by color coding ",
//             description: '',
//         },
//         {
//             id: 2,
//             image: '/adoni/facility/facility2.jpg',
//             title: "TOOLS AND GAUGES",
//             description: '',
//         },
//         {
//             id: 3,
//             image: '/adoni/facility/facility3.jpg',
//             title: "INHOUSE HEAT TREATMENT ",
//             description: '',
//         },
//         {
//             id: 4,
//             image: '/adoni/facility/facility4.jpg',
//             title: "HARDNESS TESTING MACHINE            ",
//             description: '',
//         },
//         {
//             id: 5,
//             image: '/adoni/facility/facility5.jpg',
//             title: "AIR GAUGES            ",
//             description: 'Each cylinder bore size checked on air gauge.',
//         },
//         {
//             id: 6,
//             image: '/adoni/facility/facility6.jpg',
//             title: "Measurement of surface rougness by Zeiss Handysurf 35 ",
//             description: '',
//         },
//         {
//             id: 7,
//             image: '/adoni/facility/facility7.jpg',
//             title: "OIL FILLING  ",
//             description: 'Exact amount of oil filled to achieve adequate damping',

//         },
//         {
//             id: 8,
//             image: '/adoni/facility/facility8.jpg',
//             title: "CYCLIC TESTING  ",
//             description: ' Continious cyclic testing to check leakage .',
//         },
      
//         {
//             id: 9,
//             image: '/adoni/facility/facility10.jpg',
//             title: "HYDRAULIC TESTING for Large bore shock absorbers ",
//             description: '',
//         },
//         {
//             id: 10,
//             image: '/adoni/facility/facility9.jpg',
//             title: "IMPACT TESTING   ",
//             description: ' Impact testing to know stroke and damping force and data recorded digitally.',
//         },
//         {
//             id: 11,
//             image: '/adoni/facility/facility11.jpg',
//             title: "FINE LAPPING ",
//             description: '',
//         },
//         {
//             id: 12,
//             image: '/adoni/facility/facility12.jpg',
           
//             title: "CNC MACHINE ",
//             description: '',
//         },
//         {
//             id: 13,
//             image: '/adoni/facility/facility13.jpg',
//             title: "ASSEMBLY PACKING AREA",
//             description: '',
//         },
//         {
//             id: 14,
//             image: '/adoni/facility/facility14.jpg',
//             title: "Crane Buffer cycling Test Rig ",
//             description: '',
//         },
//     ]



//     return (
//         <div className='pt-24 bg-gray-50'>
//              <div class="pl-40">
//                             <h2 class="text-3xl text-gray-950 dark:text-white font-semibold">Our Facility </h2>
//                             <p class="mt-2 text-gray-700 dark:text-gray-300">Here is our workshop facility.</p>
//                         </div>
//             <div class=" grid grid-cols-3 gap-8 mx-auto  sm:p-10 md:mt-10 mt-10" >
//                 {
//                     facility.map((items, key) => {
//                         return (


//                             <div class=" mx-auto" key={key}>

//                                 <a href="#">
//                                     <img class="md:w-[600px] h-80" src={items.image} alt="Sunset in the mountains" />
//                                 </a>
//                                 <div class="relative text-center border -mt-16 px-10 pt-5 pb-10 bg-white m-10">
//                                     <a href="#"
//                                         class="font-semibold text-lg   text-indigo-600  hover:text-indigo-900 transition duration-500 ease-in-out  mb-2">{items.title}</a>
//                                     <p class="text-gray-500 text-sm">
//                                         {items.description}
//                                     </p>
                                   
//                                 </div>

//                             </div>


//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

// export default Facility



import React from 'react';

const Facility = () => {

        const facility = [
        {
            id: 1,
            image: '/adoni/facility/facility1.jpg',
            title: " Material storage   after testing in Nabl accredited Labs storage by color coding ",
            description: '',
        },
        {
            id: 2,
            image: '/adoni/facility/facility2.jpg',
            title: "TOOLS AND GAUGES",
            description: '',
        },
        {
            id: 3,
            image: '/adoni/facility/facility6.jpg',
            title: "Measurement of surface rougness by Zeiss Handysurf 35 ",
            description: '',
        },
        {
            id: 4,
            image: '/adoni/facility/facility4.jpg',
            title: "HARDNESS TESTING MACHINE            ",
            description: '',
        },
        {
            id: 5,
            image: '/adoni/facility/facility5.jpg',
            title: "AIR GAUGES            ",
            description: '',
        },
        {
            id: 6,
            image: '/adoni/facility/facility3.jpg',
            title: "INHOUSE HEAT TREATMENT ",
           
            description: '',
        },
        {
            id: 7,
            image: '/adoni/facility/facility7.jpg',
            title: "OIL FILLING  ",
            description: '',

        },
        {
            id: 8,
            image: '/adoni/facility/facility8.jpg',
            title: "CYCLIC TESTING  ",
            description: '',
        },
      
        {
            id: 9,
            image: '/adoni/facility/facility10.jpg',
            title: "HYDRAULIC TESTING for Large bore shock absorbers ",
            description: '',
        },
        {
            id: 10,
            image: '/adoni/facility/facility9.jpg',
            title: "IMPACT TESTING   ",
            
        },
        {
            id: 11,
            image: '/adoni/facility/facility11.jpg',
            title: "FINE LAPPING ",
            description: '',
        },
        {
            id: 12,
            image: '/adoni/facility/facility12.jpg',
           
            title: "CNC MACHINE ",
            description: '',
        },
        {
            id: 13,
            image: '/adoni/facility/facility13.jpg',
            title: "ASSEMBLY PACKING AREA",
            description: '',
        },
        {
            id: 14,
            image: '/adoni/facility/facility14.jpg',
            title: "Crane Buffer cycling Test Rig ",
            description: '',
        },
    ]


  return (
    <div className="md:max-w-7xl mx-auto px-4 mt-20 py-8">
      <h2 className="text-2xl font-semibold mb-8 border-b-2 border-[#097cbf] pb-2 w-[20vw] ml-2">Facilities of our workshop</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       {facility.map((item , key)=>{
        return (
            <div className="nature" key={key}>
            <div className="content border-2 border-gray-300 hover:border-[#097cbf] cursor-pointer rounded-md bg-white p-5 w-[400px] h-[450px]">
              <img src={item.image} alt="Mountains" className="w-full h-80" />
              <h4 className="text-lg font-semibold mt-5 flex items-center justify-center">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        )
       })}
       
      </div>
    </div>
  );
};

export default Facility;
