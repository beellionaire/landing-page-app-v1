"use client";

import { useEffect } from "react";

import Faq from "./Faq/Faq";
import Feature from "./Feature/Feature";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Portfolio from "./Portfolio/Portfolio";
import Pricing from "./Pricing/Pricing";
import Reason from "./Reason/Reason";
import Service from "./Services/Service";
import Testimonials from "./Testimonials/Testimonials";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className="overflow-hidden h-full">
      <Hero />
      <Reason />
      <Feature />
      <Service />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
