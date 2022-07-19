import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import cv_pdf from "../Cv/cv_ANDRES_BANDA_2022.pdf";
import qr from "../Cv/qr.jpg";
import SectionContainer from "../SectionContainer/SectionContainer";

const AboutMe = ({ setActiveElement }) => {
  return (
    <div id="about">
      <SectionContainer
        sectionName="about"
        setActiveElement={setActiveElement}
      />
      <div
        className=""
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
            top: "-80%",
            letf: "5%",
          }}
        >
          <h3
            className="back-titles"
            style={{ fontSize: "150px", zIndex: "-1" }}
          >
            About Me
          </h3>
        </div>

        <h1 className="py-2 title-cv aboutme-title " style={{ zIndex: "1" }}>
          Experience
        </h1>
        <hr
          width="25px"
          style={{ margin: "0px auto 30px auto", border: "2px solid black" }}
        />
      </div>
      <Row className="aboutme-container">
        <Col className="mx-3">
          <p className="normal-text " style={{ zIndex: "0" }}>
            I am a Software Engineer from Yachay Tech University (Ecuador). I
            have three years of experience in web design and development. I am
            also a Digital marketing enthusiast emphasizing analytics and
            automatization. During these years, I have developed mobile
            applications using Fluter, React-native, Ionic, Unity, and web
            (frontend) applications using Angular and React. Also, I have used
            python (Flask, Django), PHP (Laravel), and Java (Spring Boot) to
            create APIs and backend functionality. Currently, I am working as a
            full stack developer at Wiibiq to provide digital solutions for the
            manufacturing industry.
          </p>

          <p className="normal-text ">
            Scan the QR or click on download to get a detailed summary of my
            experience.
          </p>
          <Link to={cv_pdf} target="_blank" download>
            <Button className="btn-cv text-left ">Download CV</Button>
          </Link>
          <div
            className="pb-1 "
            style={{ display: "inline", marginLeft: "10px" }}
          >
            <img src={qr} style={{ width: "5rem" }}></img>
          </div>
        </Col>
        <Col>
          <div className="skill-bars  m-auto pb-5 mb-5">
            <h5 style={{ letterSpacing: "3px", color: "gray" }}>
              MAIN PROGRAMMING SKILLS
            </h5>
            <div className="bar">
              <div className="info">
                <span>React (JS)</span>
              </div>
              <div className="progress-line react">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>React Native</span>
              </div>
              <div className="progress-line linux">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>Linux and SysAdmin</span>
              </div>
              <div className="progress-line linux">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>Python (Flask, Django)</span>
              </div>
              <div className="progress-line python">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>SQL</span>
              </div>
              <div className="progress-line mysql">
                <span></span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
