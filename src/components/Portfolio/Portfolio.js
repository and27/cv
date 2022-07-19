import React from "react";
import { Col, Row } from "react-bootstrap";
import ServiceCard from "./ServiceCard";
import secure from "./securelab.png";
import snacks from "./snacks.png";
import ciodesia from "./ciodesia.png";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle";

const Portfolio = ({ setActiveElement }) => {
  return (
    <>
      <div id="portfolio" className="light-back">
        <SectionContainer
          sectionName="portfolio"
          setActiveElement={setActiveElement}
        />
        <SectionTitle
          mainTitle="Relevant projects"
          backgroundTitle="Portfolio"
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
                description="Ciodesia is an education platform to provide training and services related to geography."
                img={ciodesia}
                url="https://ciodesia.com"
                stack="Wordpress, Divi, Learnpress"
              />
            </Col>

            <Col md={4}>
              <ServiceCard
                title="Secure Lab"
                description="Secure Lab (Hacker Club) is a cybersecurity training platform for IT professionals."
                img={secure}
                url="https://hackerclub.cc"
                stack="Wordpress, Divi"
              />
            </Col>
            <Col md={4}>
              <ServiceCard
                title="Snacks"
                description="Snacks website provides actionable tips and pieces of advice about digital marketing."
                img={snacks}
                url="https://snacks.cf"
                stack="React JS"
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
