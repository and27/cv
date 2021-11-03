import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import photo from "../profile_complete.jpeg";
import logo from "./logo.png";

const Home = () => {
  return (
    <div className="dark-back" id="welcome">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} width="40px" />
          </Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link href="#welcome">Welcome</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          className="cv-title d-flex flex-column main-section"
          style={{ margin: "0 auto", position: "relative" }}
        >
          <h1 style={{ color: "white", zIndex: "2" }}>
            Hi, I'm <br /> Andrés Banda
          </h1>
          <div
            style={{
              position: "absolute",
              left: "180px",
              color: "#101010",
              zIndex: "0",
            }}
          >
            <h3 className="back-titles" style={{ fontSize: "8rem" }}>
              Welcome
            </h3>
          </div>
          <p className="normal-text pb-2" style={{ zIndex: "0" }}>
            Web + Mobile + Blockchain developer based in Ecuador.
          </p>{" "}
          <a
            href="https://web.whatsapp.com/send?phone=593985119412&text=Hola Andrés ..."
            className="contact-ref"
          >
            <Button className="btn-cv btn-cv-main" style={{ zIndex: "0" }}>
              Contact
            </Button>
            <Button className="btn-cv-secondary" style={{ zIndex: "0" }}>
              Download CV
            </Button>
          </a>
        </div>
        <div className="d-flex main-photo-section">
          <img className="main-photo" src={photo} style={{ height: "100vh" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
