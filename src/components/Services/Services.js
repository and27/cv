import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaBullhorn, FaLock, FaMobile } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div
      id="services"
      className="light-back"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "7rem 3rem 7rem 3rem",
        textAlign: "left",
        alignItems: "center",
        paddingTop: "8rem",
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
          Services
        </h3>
      </div>

      <h1 className="py-2 title-cv" style={{ zIndex: "1" }}>
        Services
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
              FaMobile={FaMobile}
              title="Web and Mobile"
              description="Desarrollo de páginas web utilizando Wordpress, react, python, bases de datos."
            />
          </Col>

          <Col md={4}>
            <ServiceCard
              FaMobile={FaBullhorn}
              title="Digital Marketing"
              description="Estrategias de marketing digital, branding, redes sociales, growth hacking, email marketing. "
            />
          </Col>
          <Col md={4}>
            <ServiceCard
              FaMobile={FaLock}
              title="Cibersecurity"
              description="Análisis y pruebas de seguridad a sistemas informáticos. Charlas de seguridad informática y desarrollo de aplicaciones de hacking"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Services;
