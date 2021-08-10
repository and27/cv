import React from "react";
import { Button } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import photo from "../profile_complete.jpeg";
import logo from "./logo.png";

const Home = () => {
  return (
    <div
      className="dark-back"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="cv-title d-flex flex-column" style={{ margin: "0 auto" }}>
        <h1 style={{ color: "white" }}>
          Hi, I'm <br /> Andrés Banda
        </h1>
        <p className="cv-description pb-2">
          Computer Science Engineer. Web and Mobile developer. Entrepeneur
        </p>
        <Button className="btn-cv">Contact me</Button>
      </div>
      <div className="d-flex">
        <img src={photo} style={{ height: "100vh" }} />
      </div>
      <div
        className="main-social"
        style={{ position: "absolute", top: "10px", right: "20px" }}
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
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "30px",
        }}
      >
        <img src={logo} width="80px" />
      </div>
    </div>
  );
};

export default Home;
