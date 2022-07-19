import React from "react";
import { Button } from "react-bootstrap";
import photo from "../profile_complete.jpeg";
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
            <div>
              <h2 style={{ color: "#ddd" }}>Hey, I'm</h2>
              <h1 style={{ color: "white" }}>Andrés Banda</h1>
            </div>
            <div
              style={{
                position: "absolute",
                left: "180px",
                color: "#101010",
                zIndex: "0",
              }}
            ></div>
            <p
              className="normal-text pb-2 main-section-description"
              style={{ zIndex: "0", width: "30vw" }}
            >
              Software developer with over 2 years of front-end experience
              contributing to startups and technology-based companies to create,
              maintain and optimize digital products.
            </p>
            <div>
              <a className="contact-ref" href="#contact">
                <Button className="btn-cv btn-cv-main" style={{ zIndex: "0" }}>
                  Contact
                </Button>
              </a>
              {/* <Link to={cv_pdf} target="_blank" download>
                <Button className="btn-cv-secondary" style={{ zIndex: "0" }}>
                  Download CV
                </Button>
              </Link> */}
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
