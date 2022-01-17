import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaBullhorn, FaLock, FaMobile } from "react-icons/fa";
import SectionContainer from "../SectionContainer/SectionContainer";
import ServiceCard from "./ServiceCard";

const Services = ({ setActiveElement }) => {
  return (
    <>
      <SectionContainer
        sectionName="services"
        setActiveElement={setActiveElement}
      />
      <div
        id="services"
        className="light-back"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
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
          Areas of expertise
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
                description="Award-winning web and mobile applications. Modern, easy-to-use applications that generate results. Landing pages, funnels, virtual classrooms and more. "
              />
            </Col>

            <Col md={4}>
              <ServiceCard
                FaMobile={FaBullhorn}
                title="Digital Marketing"
                description="Coaching on Marketing for better decision making. Google Analytics, lead generation, branding, social media, email marketing, digital campaigns and more.  "
              />
            </Col>
            <Col md={4}>
              <ServiceCard
                FaMobile={FaLock}
                title="Cibersecurity"
                description="Information security and assurance, vulnerability assessment, source code audit, web and network pen-testing. Talks on cibersecurity, free software and networking."
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Services;
