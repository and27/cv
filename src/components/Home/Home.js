import React from "react";
import { Button } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import photo from "../profile_complete.jpeg";
import logo from "./logo.png";

const Home = () => {
  return (
    <div className="dark-back">
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
          <p className="cv-description pb-2" style={{ zIndex: "0" }}>
            Computer Science Engineer. Web and Mobile developer. Entrepeneur
          </p>
          <Button className="btn-cv" style={{ zIndex: "0" }}>
            Contact me
          </Button>
        </div>
        <div className="d-flex">
          <img className="main-photo" src={photo} style={{ height: "100vh" }} />
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
    </div>
  );
};

export default Home;
