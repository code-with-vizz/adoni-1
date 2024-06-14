


import React, { useState } from "react";
import styled from "styled-components";
import ProjectBox from "../Elements/ProjectBox";
import AddImage2 from "../../assets/screen/screes1.jpg";
import AddImage3 from "../../assets/screen/screes2.jpg";
import AddImage4 from "../../assets/screen/scees4.jpg";
import Clouser from "./Clouser";
import ClientSlider from "../Elements/ClientSlider";









export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const openModal = (src) => {
    setImageSrc(src);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setImageSrc("");
  };

  return (
    <div>

      <div class="container  mx-auto md:px-6">

        <section class="mb-32 mt-0 text-center">
       
          <h3 className='text-center mb-5 uppercase text-semibold' >Corporate Services</h3>
          <h1 className="text-center text-4xl font-bold mb-12 text-[#097cbf]"> Our Best Product</h1>

          <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12 mt-6 mx-4">
            <div class="mb-6 lg:mb-0">
              <div
                class="relative block rounded-lg border-2 border-gray-300 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div class="flex">
                  <div
                    class="relative mx-4 mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat  dark:shadow-black/20"
                    data-te-ripple-init data-te-ripple-color="light">
                    <img src="adoniNew/home/product/p1.jpg" class="w-full h-[230px] px-14" />
                    <a href="#!">
                      <div
                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                      </div>
                    </a>
                  </div>
                </div>
                <div class="p-6">
                  <h5 class="mb-2 mt-2 text-lg font-semibold text-[#097cbf]">Industrial Shock Absorbers</h5>

                </div>
              </div>
            </div>

            <div class="mb-6 lg:mb-0">
              <div
                class="relative block rounded-lg  border-2 border-gray-300 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div class="flex">
                  <div
                    class="relative mx-4 mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat  "
                    data-te-ripple-init data-te-ripple-color="light">
                    <img src="adoniNew/home/product/p2.jpg" class="w-full h-[230px] px-14" />
                    <a href="#!">
                      <div
                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                      </div>
                    </a>
                  </div>
                </div>
                <div class="p-6">
                  <h5 class="mb-2 mt-2 text-[#097cbf] text-lg font-bold">Linear Motion Slides</h5>

                
                </div>
              </div>
            </div>

            <div class="mb-0">
              <div
                class="relative block rounded-lg bg-white border-2 border-gray-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div class="flex">
                  <div
                    class="relative mx-4 mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat  "
                    data-te-ripple-init data-te-ripple-color="light">
                    <img src="adoniNew/home/product/p3.jpg" class="w-full h-[230px] px-14 ml-8" />
                    <div >
                      <button onClick={() => openModal(AddImage4)}
                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                      </button>
                    </div>
                  </div>
                </div>
                <div class="px-6  pt-6 pb-6">
                  <h5 class="mb-2 mt-2 text-[#097cbf] text-lg font-semibold">Quick Clamps</h5>

                  {/* <p class="mb-4 pb-2">
                  Introducing our SB Series spring buffers, expertly crafted to deliver precise energy absorption in diverse industrial environments. Enhance safety and operational efficiency with these reliable solutions tailored to your specific applications.
                  </p> */}
                 
                </div>
              </div>
            </div>
            <div class="mb-0">
              <div
                class="relative block rounded-lg border-2 border-gray-300 mt-6 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div class="flex">
                  <div
                    class="relative mx-4 mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat  "
                    data-te-ripple-init data-te-ripple-color="light">
                    <img src="adoniNew/home/product/p4.jpg" class="w-full h-[230px] px-14" />
                    <div >
                      <button onClick={() => openModal(AddImage4)}
                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                      </button>
                    </div>
                  </div>
                </div>
                <div class="px-6  pt-6 pb-6">
                  <h5 class="mb-2 mt-2 text-[#097cbf]  text-lg font-semibold">Pneumatic Rodless Cylinders</h5>

                  {/* <p class="mb-4 pb-2">
                  Introducing our SB Series spring buffers, expertly crafted to deliver precise energy absorption in diverse industrial environments. Enhance safety and operational efficiency with these reliable solutions tailored to your specific applications.
                  </p> */}
                 
                </div>
              </div>
            </div>
            <div class="mb-0">
              <div
                class="relative block rounded-lg bg-white mt-6 border-2 border-gray-300  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div class="flex">
                  <div
                    class="relative mx-4 mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat  "
                    data-te-ripple-init data-te-ripple-color="light">
                    <img src="adoniNew/home/product/p5.jpg" class="w-full h-[230px] px-14" />
                    <div >
                      <button onClick={() => openModal(AddImage4)}
                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                      </button>
                    </div>
                  </div>
                </div>
                <div class="px-6  pt-6 pb-6">
                  <h5 class="mb-2 mt-2 text-[#097cbf] text-lg font-semibold">Vaccum Suction Cups</h5>

                  {/* <p class="mb-4 pb-2">
                  Introducing our SB Series spring buffers, expertly crafted to deliver precise energy absorption in diverse industrial environments. Enhance safety and operational efficiency with these reliable solutions tailored to your specific applications.
                  </p> */}
                 
                </div>
              </div>
            </div>
            <div class="mb-0">
              <div
                class="relative block rounded-lg mt-6 border-2 border-gray-300 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div class="flex">
                  <div
                    class="relative mx-4 mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat  "
                    data-te-ripple-init data-te-ripple-color="light">
                    <img src="adoniNew/home/product/p6.jpg" class="w-full h-[230px] px-14" />
                    <div >
                      <button onClick={() => openModal(AddImage4)}
                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                      </button>
                    </div>
                  </div>
                </div>
                <div class="px-6  pt-6 pb-6">
                  <h5 class="mb-2 mt-2 text-[#097cbf] text-lg font-semibold">Wire Rope Isolators</h5>

                  {/* <p class="mb-4 pb-2">
                  Introducing our SB Series spring buffers, expertly crafted to deliver precise energy absorption in diverse industrial environments. Enhance safety and operational efficiency with these reliable solutions tailored to your specific applications.
                  </p> */}
                 
                </div>
              </div>
            </div>
            <div class="mb-0">
              <div
                class="relative block rounded-lg mt-6 border-2 border-gray-300 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div class="flex">
                  <div
                    class="relative mx-4 mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat  "
                    data-te-ripple-init data-te-ripple-color="light">
                    <img src="adoniNew/home/product/p7.jpg" class="w-full h-[230px] px-14" />
                    <div >
                      <button onClick={() => openModal(AddImage4)}
                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                      </button>
                    </div>
                  </div>
                </div>
                <div class="px-6  pt-6 pb-6">
                  <h5 class="mb-2 mt-2 text-[#097cbf] text-lg font-semibold">Crane Buffers</h5>

                  {/* <p class="mb-4 pb-2">
                  Introducing our SB Series spring buffers, expertly crafted to deliver precise energy absorption in diverse industrial environments. Enhance safety and operational efficiency with these reliable solutions tailored to your specific applications.
                  </p> */}
                 
                </div>
              </div>
            </div>
            <div class="mb-0">
              <div
                class="relative block rounded-lg  mt-6 border-2 border-gray-300 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div class="flex">
                  <div
                    class="relative mx-4 mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat  "
                    data-te-ripple-init data-te-ripple-color="light">
                    <img src="adoniNew/home/product/p8.jpg" class="w-full h-[230px] px-14" />
                    <div >
                      <button onClick={() => openModal(AddImage4)}
                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                      </button>
                    </div>
                  </div>
                </div>
                <div class="px-6  pt-6 pb-6">
                  <h5 class="mb-2 mt-2 text-[#097cbf] text-lg font-semibold">Cable Trays</h5>

                  {/* <p class="mb-4 pb-2">
                  Introducing our SB Series spring buffers, expertly crafted to deliver precise energy absorption in diverse industrial environments. Enhance safety and operational efficiency with these reliable solutions tailored to your specific applications.
                  </p> */}
                 
                </div>
              </div>
            </div>
         
            <div class="mb-0">
              <div
                class="relative block rounded-lg  mt-6 border-2 border-gray-300 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div class="flex">
                  <div
                    class="relative mx-4 mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat  "
                    data-te-ripple-init data-te-ripple-color="light">
                    <img src="adoniNew/home/product/p9.webp" class="w-full h-[230px] px-14" />
                    <div >
                      <button onClick={() => openModal(AddImage4)}
                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                      </button>
                    </div>
                  </div>
                </div>
                <div class="px-6  pt-6 pb-6">
                  <h5 class="mb-2 mt-2 text-lg font-semibold text-[#097cbf]">Hydraulic Feed Rate Controllers</h5>

                  {/* <p class="mb-4 pb-2">
                  Introducing our SB Series spring buffers, expertly crafted to deliver precise energy absorption in diverse industrial environments. Enhance safety and operational efficiency with these reliable solutions tailored to your specific applications.
                  </p> */}
                 
                </div>
              </div>
            </div>
          </div>

        </section>

      </div>
      <ModalWrapper show={showModal} onClick={closeModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeModal}>X</CloseButton>
          <ModalImage className="" src={imageSrc} alt="Popup Image" />
        </ModalContent>
      </ModalWrapper>
    </div>
  )
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;


const ModalWrapper = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContent = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  padding: 20px;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;

`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 40px;

`;

const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
