import React, { useRef, useEffect, useState } from "react";
import Contacto from "../Contacto/Contacto";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Container as C, Nav, Navbar } from "react-bootstrap";
import firmafinal from "../Home/firmafinal.png";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const Container = () => {
  const [activeElement, setActiveElement] = useState("home");
  const [socialPosition, setSocialPosition] = useState(0);
  const [elementPosition, setElementPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const footerEl = useRef(null);
  const socialRef = useRef(null);

  useScrollPosition(
    ({ currPos }) => {
      setElementPosition(currPos.y);
    },
    [],
    footerEl
  );

  useScrollPosition(
    ({ currPos }) => {
      setSocialPosition(currPos.y);
    },
    [],
    socialRef
  );

  useEffect(() => {
    if (elementPosition === 0) {
      setVisible(true);
    } else {
      if (socialPosition - elementPosition >= 0) {
        setVisible(false);
      } else if (socialPosition - elementPosition < 0) {
        setVisible(true);
      }
    }
  }, [elementPosition, socialPosition]);

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" expand="md">
        <C
          className="d-flex "
          style={{
            padding: "1rem",
          }}
        >
          <Navbar.Brand href="#welcome">
            <img src={firmafinal} width="180px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ justifyContent: "flex-end" }}
          >
            <Nav className="">
              <Nav.Link href="#welcome" active={activeElement === "welcome"}>
                Welcome
              </Nav.Link>
              <Nav.Link href="#services" active={activeElement === "services"}>
                Services
              </Nav.Link>
              <Nav.Link
                href="#portfolio"
                active={activeElement === "portfolio"}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link href="#about" active={activeElement === "about"}>
                About Me
              </Nav.Link>
              <Nav.Link href="#contact" active={activeElement === "contact"}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </C>
      </Navbar>
      <div>
        <Home setActiveElement={setActiveElement} />
        <Services setActiveElement={setActiveElement} />
        <Portfolio setActiveElement={setActiveElement} />
        <AboutMe setActiveElement={setActiveElement} />
        <Contacto setActiveElement={setActiveElement} />
        <Footer ref2={footerEl} />
      </div>
      <div
        ref={socialRef}
        className="main-social px-3"
        style={{
          position: "fixed",
          bottom: "15px",
          right: "-10px",
          backgroundColor: "white",
          borderRadius: "7px",
          zIndex: 100,
          opacity: visible ? 1 : 0,
          transition: "1s",
          boxShadow: "0.125rem 0.125rem 1rem rgb(0 0 0 / 10%)",
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
