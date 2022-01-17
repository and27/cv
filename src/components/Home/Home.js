import React from "react";
import { Button } from "react-bootstrap";
import photo from "../profile_complete.jpeg";
import { Link } from "react-router-dom";
import cv_pdf from "../Cv/cv_ANDRES_BANDA_2022.pdf";
import SectionContainer from "../SectionContainer/SectionContainer";

const Home = ({ setActiveElement }) => {
  return (
    <>
      <SectionContainer
        sectionName="welcome"
        setActiveElement={setActiveElement}
      />
      <div className="dark-back" id="welcome">
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            // flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div
            className="cv-title d-flex flex-column main-section "
            style={{
              margin: "0 auto",
              position: "relative",
              paddingLeft: "10rem",
            }}
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
            <p
              className="normal-text pb-2 main-section-description"
              style={{ zIndex: "0", width: "30vw" }}
            >
              Software developer focused on contributing to startups and
              technology-based companies by creating and improving digital
              products.
            </p>
            <div>
              <a className="contact-ref" href="#contact">
                <Button className="btn-cv btn-cv-main" style={{ zIndex: "0" }}>
                  Contact
                </Button>
              </a>
              <Link to={cv_pdf} target="_blank" download>
                <Button className="btn-cv-secondary" style={{ zIndex: "0" }}>
                  Download CV
                </Button>
              </Link>
            </div>
          </div>
          <div className="d-flex main-photo-section">
            <img
              // className="main-photo"
              src={photo}
              style={{ height: "100vh" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
