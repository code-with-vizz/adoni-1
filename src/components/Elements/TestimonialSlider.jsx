// import React from "react";
// import Slider from "react-slick";
// import styled from "styled-components";
// // Components
// import TestimonialBox from "../Elements/TestimonialBox";

// export default function TestimonialSlider() {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="my-20">
//       <h1>What Our Client Say</h1>
//       <Slider {...settings}>
//         <LogoWrapper className="flexCenter">
//           <TestimonialBox
//             text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
//             author="Ralph Waldo Emerson"
//           />
//         </LogoWrapper>
//         <LogoWrapper className="flexCenter">
//           <TestimonialBox
//             text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
//             author="Ralph Waldo Emerson"
//           />
//         </LogoWrapper>
//         <LogoWrapper className="flexCenter">
//           <TestimonialBox
//             text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
//             author="Ralph Waldo Emerson"
//           />
//         </LogoWrapper>
//         <LogoWrapper className="flexCenter">
//           <TestimonialBox
//             text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
//             author="Ralph Waldo Emerson"
//           />
//         </LogoWrapper>
//         <LogoWrapper className="flexCenter">
//           <TestimonialBox
//             text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
//             author="Ralph Waldo Emerson"
//           />
//         </LogoWrapper>
//         <LogoWrapper className="flexCenter">
//           <TestimonialBox
//             text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
//             author="Ralph Waldo Emerson"
//           />
//         </LogoWrapper>
//       </Slider>
//     </div>
//   );
// }

// const LogoWrapper = styled.div`
//   width: 90%;
//   padding: 0 5%;
//   cursor: pointer;
//   :focus-visible {
//     outline: none;
//     border: 0px;
//   }
// `;



import React from 'react'

function TestimonialSlider() {
  return (
    <div className='my-20'>
      <h3 className='text-center mb-5 uppercase' >TESTIMONIAL</h3>
      <h1 className="text-center text-4xl font-bold mb-12"> What Our customer Says</h1>
      <div class="container mx-auto  px-4 flex flex-col lg:items-center justify-between lg:flex-row">
        {/* <div class="mb-14 xl:mb-0">
          <h1 class="text-2xl leading-tight md:text-4xl xl:text-5xl font-semibold leading-10   text-gray-800 dark:text-white  xl:w-2/3 pr-16 lg:pr-0">Our customers love what we do</h1>
          <p class="mt-4 text-base leading-normal text-gray-600 dark:text-gray-200   md:w-2/3 lg:w-3/4 pr-16 lg:pr-0">Over 500 companies use our product to understand their business and marketing better.</p>
          <button class="hidden md:block w-full sm:w-auto mt-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-indigo-700 hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">Read success stories</button>
        </div> */}

        <div role="list" aria-label="Testimonials" class=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 flex-wrap justify-center items-start">
          <div role="listitem" class="bg-white dark:bg-gray-800  shadow rounded p-4 xl:p-8">
            <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
            <div class="pl-4 pt-4 flex items-start justify-between">
              <div class="mr-6">
                <p class="xl:text-xl xl:leading-loose text-gray-600 dark:text-gray-200  ">This is for your information that M/S Adonitech has developed a Shock absorber as import
                  substitute. The product has tested & found satisfactory.</p>
                <p class="mt-4 text-base font-semibold leading-none text-gray-800 dark:text-white ">Milind Kulkarni</p>
              </div>
              {/* <img src="adoni/testimonial/imgedummy.png" className='w-20' alt="Display Avatar of Anna Smith" role="img" /> */}
            </div>
          </div>

          <div role="listitem" class="bg-white dark:bg-gray-800  shadow rounded p-4 xl:p-8">
            <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
            <div class="pl-4 pt-4 flex items-start justify-between">
              <div class="mr-6">
                <p class="xl:text-xl xl:leading-loose text-gray-600 dark:text-gray-200  ">Having tested numerous shock absorbers over the years, I can confidently say that Adonitech's product stands out from the rest. Its build quality.</p>
                <p class="mt-4 text-base font-semibold leading-none text-gray-800 dark:text-white ">Rajesh Singh</p>
              </div>
              {/* <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-2.png" alt="Display avatar of Dany John" role="img" /> */}
            </div>
          </div>
          {/* <div role="listitem" class="bg-white dark:bg-gray-800  shadow rounded p-4 xl:p-8">
            <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
            <div class="pl-4 pt-4 flex items-start justify-between">
              <div class="mr-6">
                <p class="xl:text-xl xl:leading-loose text-gray-600 dark:text-gray-200  ">This website has a bunch of amazing components which improves my design</p>
                <p class="mt-4 text-base font-semibold leading-none text-gray-800 dark:text-white  dark:text-white ">Mike Blake</p>
              </div>
              <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-3.png" alt="Display Avatar of Mike Blake" role="img" />
            </div>
          </div> */}
          {/* <button class="md:hidden w-full sm:w-auto mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-indigo-700 hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">Read success stories</button> */}
        </div>
      </div>

    </div>
  )
}

export default TestimonialSlider
