import React from "react";
// Sections
// import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
// import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
// import Blog from "../components/Sections/Blog";
// import Pricing from "../components/Sections/Pricing";
// import Contact from "../components/Sections/Contact";
// import Footer from "../components/Sections/Footer"
// import SocialLink from "../components/Nav/SocialLink";
import BannerClouser from "../components/Sections/Home/banner/BannerClouser";
// import Explore from "../components/Sections/Home/service/ExploreTour";
// import Cards from "../components/Sections/Home/cards/Cards";
// import Product from "../components/Sections/Home/Product/Product";
import CorporateServices from "../components/Sections/Home/cards/CorporateServices";
// import ContactUs from "../components/Sections/contact/ContactUs";
// import Clouser from "../components/Sections/Clouser";
import TestimonialSlider from "../components/Elements/TestimonialSlider";

export default function Landing () {
  return (
    <>
      <BannerClouser/>
      <Header />
      <Projects />
      {/* <Clouser/> */}
      <CorporateServices/>
      <TestimonialSlider/>
      {/* <Services /> */}
      {/* <ContactUs/> */}
    </>
  );
}


