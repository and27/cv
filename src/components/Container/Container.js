import React from "react";
import Contacto from "../Contacto/Contacto";
import Footer from "../Footer/Footer";
import CvDownload from "../Cv/CvDownload";
import Services from "../Services/Services";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";

const Container = () => {
  return (
    <>
      <Home />
      <AboutMe />
      <Services />
      <CvDownload />
      <Contacto />
      <Footer />
    </>
  );
};

export default Container;
