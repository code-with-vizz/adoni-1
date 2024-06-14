import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
// import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { Link } from "react-router-dom";
import ProductDropdown from "./NavDropdown";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flex items-Center animate whiteBg mt-0 md:mt-10" style={y > 100 ? { height: "60px", marginTop: "0px" } : { height: "80px" }}>
        <NavInner className="container flex items-Center justify-between ">
          <Link className="pointer flexNullCenter" to="/" smooth={true}>
            {/* <img src="adoni/logo/cranebufferlogo.jpeg" className="w-24 h-14"></img> */}
            <h1 className="font-bold text-3xl text-[#097cbf] pt-[2vh] ml-10">AdoniTech</h1>
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flex items-center">
            <li className="semiBold font15 pointer">
              <Link style={{ padding: "10px 15px" }} to="/" spy={true} smooth={true} offset={-80}>
                Home
              </Link>
            </li>
            <Link to="/About" className="semiBold font15 pointer">
              <p style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
                About
              </p>
            </Link>
            <Link to="/Service" className="semiBold font15 pointer">
              <p style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
                Service
              </p>
            </Link>
            <Link to="/" className="semiBold  pointer">
              {/* <p style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
                Products
              </p> */}
              <ProductDropdown/>
            </Link>
            <Link to="/facility" className="semiBold font15 pointer">
              <p style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
                Facilities
              </p>
            </Link>
            <Link to="/news-event-blog" className="semiBold font15 pointer">
              <p style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
                News & Blog
              </p>
            </Link>
       
            <li className="semiBold font15 pointer">
              <Link to='/contact-us' style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
                Contact
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flex items-Center gap-[2px] pt-6 mr-10">

            <li className="semiBold font15 pointer flexCenter ">
              <a href="https://calculation.cranebuffer.com" className="rounded-3xl text-[#097cbf] font-semibold border border-[#097cbf] text-xs" style={{ padding: "7px 10px" }} target="_blank" rel="noopener noreferrer">
                Login Now
              </a>
            </li>
            <li className="ml-4">
              <Link to='/career' className="rounded-3xl font-semibold text-white text-xs   bg-[#097cbf]" style={{ padding: "7px 20px" }} target="_blank" rel="noopener noreferrer">
               Join Us
              </Link>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: white;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


