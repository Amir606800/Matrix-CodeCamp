import { useEffect } from "react";
import "../assets/CSS/content.css"

import AOS from "aos";
import 'aos/dist/aos.css';

import Home from "./Menu/Home";
import About from "./Menu/About";
import Service from "./Menu/Service";
import Skill from "./Menu/Skill";
import Portfolio from "./Menu/Portfolio";
import Contact from "./Menu/Contact";
import Footer from "./Menu/Footer";
import Testimonial from "./Menu/Testimonial";
import Blog from "./Menu/Blog";

const Content = (props) => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
      <div className="content ">
        <div id="home" className="menu-partitions">
          <Home />
        </div>
        <div id="about" className="menu-partitions mt-4" >
          <About />
        </div>
        <div id="services" className="menu-partitions mt-4">
          <Service />
        </div>
        <div id="skills" className="menu-partitions mt-4">
          <Skill />
        </div>
        <div id="portfolio" className="menu-partitions mt-4">
          <Portfolio />
        </div>
        <div id="testimonial" className="menu-partitions mt-4">
          <Testimonial />
        </div>
        <div id="blog" className="menu-partitions mt-5">
          <Blog />
        </div>
        <div id="contact" className="menu-partitions mt-5">
          <Contact />
        </div>
        <Footer image={props.images} />
      </div>
  );
};

export default Content;
