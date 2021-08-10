import React from "react";
import Contacto from "../Contacto/Contacto";
import Footer from "../Footer/Footer";
import CvDownload from "../Cv/CvDownload";
import Services from "../Services/Services";
import Home from "../Home/Home";

const Container = () => {
  return (
    <>
      <Home />
      <Services />
      <CvDownload />
      <Contacto />
      <Footer />
    </>
  );
};

export default Container;
