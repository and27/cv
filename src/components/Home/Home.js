import React from "react";
import { Button } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import photo from "../profile_complete.jpeg";

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
      <div style={{ position: "absolute", top: "10px", right: "20px" }}>
        <FaFacebookF size="1.75rem" style={{ margin: "10px" }} />
        <FaInstagram size="2rem" style={{ margin: "10px" }} />
        <FaLinkedinIn size="2rem" style={{ margin: "10px" }} />
      </div>
    </div>
  );
};

export default Home;
