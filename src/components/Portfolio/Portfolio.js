import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaBullhorn, FaLock, FaMobile } from "react-icons/fa";
import ServiceCard from "./ServiceCard";
import secure from "./securelab.png";
import snacks from "./snacks.png";
import ciodesia from "./ciodesia.png";
import SectionContainer from "../SectionContainer/SectionContainer";

const Portfolio = ({ setActiveElement }) => {
  return (
    <>
      <SectionContainer
        sectionName="portfolio"
        setActiveElement={setActiveElement}
      />
      <div
        id="portfolio"
        className="light-back"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            color: "#eeeeee",
            zIndex: "0",
            top: "6%",
            letf: "10%",
          }}
        >
          <h3 className="back-titles" style={{ fontSize: "150px" }}>
            Portfolio
          </h3>
        </div>

        <h1 className="py-2 title-cv" style={{ zIndex: "1" }}>
          Relevant projects
        </h1>
        <hr
          width="25px"
          style={{ margin: "0px auto 80px auto", border: "2px solid black" }}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-around",
            margin: "0",
          }}
        >
          <Row>
            <Col md={4}>
              <ServiceCard
                title="Ciodesia"
                description="Plataforma educativa con cursos de geografía desarrollada con Wordpress y learnpress."
                img={ciodesia}
                url="https://ciodesia.com"
              />
            </Col>

            <Col md={4}>
              <ServiceCard
                title="Secure Lab"
                description="Plataforma educativa de ciberseguridad desarrollada con Wordpress"
                img={secure}
                url="https://securelab.cc"
              />
            </Col>
            <Col md={4}>
              <ServiceCard
                title="Snacks"
                description="Plataforma con consejos de marketing digital desarrollada con React JS"
                img={snacks}
                url="https://snacks.cf"
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
