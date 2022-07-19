import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaBullhorn, FaLock, FaMobile } from "react-icons/fa";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle";
import ServiceCard from "./ServiceCard";

const Services = ({ setActiveElement }) => {
  return (
    <>
      <div id="services">
        <SectionContainer
          sectionName="services"
          setActiveElement={setActiveElement}
        />
        <SectionTitle
          mainTitle="Areas of expertise"
          backgroundTitle="Services"
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
                title="Cybersecurity"
                description="Information security and assurance, vulnerability assessment, source code audit, web and network pen-testing. Talks on cybersecurity, free software and networking."
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Services;
