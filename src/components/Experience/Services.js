import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaGamepad, FaLock, FaMobile } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const Experience = () => {
  return (
    <div
      className="light-back"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "7rem 3rem 7rem 3rem",
        textAlign: "center",
        alignItems: "center",
        marginTop: "5rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          color: "#eeeeee",
          zIndex: "0",
          top: "0",
          letf: "10%",
        }}
      >
        <h3 className="back-titles" style={{ fontSize: "150px" }}>
          Experience
        </h3>
      </div>

      <h1 className="py-2 title-cv" style={{ zIndex: "1" }}>
        Experience
      </h1>
      <hr
        width="25px"
        style={{ margin: "0px auto 30px auto", border: "2px solid black" }}
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
              FaMobile={FaLock}
              title="Cibersecurity"
              description="Information Security and Assurance, Vulnerability Assessment, Penetration Testing, Source Code Audit, Web Server Pen-testing. Talks on computer security and development of hacking applications."
            />
          </Col>
          <Col md={4}>
            <ServiceCard
              FaMobile={FaGamepad}
              title="AI + Data science"
              description="Desarrollo de app edtech para reconocer el estilo de aprendizaje de niños. Desarrollo de algoritmos de optimización matemática"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Experience;
