

import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import About from '../components/Sections/About/About';
import SocialLink from '../components/Nav/SocialLink';
import TopNavbar from '../components/Nav/TopNavbar';
import Footer from "../components/Sections/Footer"
import Landing from '../screens/Landing';
import Service from '../components/Sections/service/Service';
import Products from '../components/products/Products';
import Facility from '../components/Sections/facility/Facility';
import Pdfsdowload from '../components/Sections/credential/loginuser/pdfsdowload';
import News from '../components/Sections/newsEvent/News';
import ContactUs from '../components/Sections/contact/ContactUs';
import Tabs from '../components/Sections/credential/loginuser/Tabs';
import Career from '../components/career/Career';


function Page() {
  return (
    <BrowserRouter>
      <SocialLink />
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/products" element={<Products />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/news-event-blog" element={<News />} />
        <Route path="/contact-us" element={< ContactUs />} />
        <Route path="/credentials" element={<Tabs />} />
        <Route path="/career" element={<Career />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Page;
