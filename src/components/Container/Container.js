import React from "react";
import Contacto from "../Contacto/Contacto";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Container = () => {
  return (
    <>
      <Home />
      <Services />
      <Portfolio />
      <AboutMe />
      {/* <CvDownload /> */}
      <Contacto />
      <Footer />
      <div
        className="main-social px-3"
        style={{
          position: "fixed",
          bottom: "15px",
          right: "-10px",
          backgroundColor: "white",
          borderRadius: "7px",
          zIndex: 100,
        }}
      >
        <a href="https://www.facebook.com/andro.b777/">
          <FaFacebookF size="1.75rem" style={{ margin: "10px" }} />
        </a>
        <a href="https://www.instagram.com/andro_b7/">
          <FaInstagram size="2rem" style={{ margin: "10px" }} />
        </a>
        <a href="https://www.linkedin.com/in/andres-banda">
          <FaLinkedinIn size="2rem" style={{ margin: "10px" }} />
        </a>
      </div>
    </>
  );
};

export default Container;
