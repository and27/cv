import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import cv_pdf from "../Cv/CV_ANDRES_BANDA.pdf";
import qr from "../Cv/qr.jpg";

const AboutMe = () => {
  return (
    <>
      <div
        id="about"
        className=""
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "60px",
          textAlign: "center",
          alignItems: "center",
          marginTop: "3rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            color: "#eeeeee",
            zIndex: "0",
            top: "0",
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
          About Me
        </h1>
        <hr
          width="25px"
          style={{ margin: "0px auto 30px auto", border: "2px solid black" }}
        />
      </div>
      <Row className="m-5 aboutme-container">
        <Col className="mx-5">
          <p className="normal-text " style={{ zIndex: "0" }}>
            I am a Software Engineer from Yachay Tech University (Ecuador). I
            have 3 years of experience in web design and development. During
            these years I have developed mobile applications using fluter,
            react-native, ionic, unity and web (frontend) applications using
            angular and react. Also, I have used python (Flask, Django), PHP
            (Laravel), and Java (Spring Boot) to create APIs and backend
            functionality. Currently, I am developing a web and mobile app for
            Cognitiva company using React and React Native, to provide digital
            solutions for manufacturing industry.
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
            <div class="bar">
              <div class="info">
                <span>Unity</span>
              </div>
              <div class="progress-line unity">
                <span></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>Linux</span>
              </div>
              <div class="progress-line linux">
                <span></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>React (javascript)</span>
              </div>
              <div class="progress-line react">
                <span></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>Python</span>
              </div>
              <div class="progress-line python">
                <span></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>SQL</span>
              </div>
              <div class="progress-line mysql">
                <span></span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AboutMe;
