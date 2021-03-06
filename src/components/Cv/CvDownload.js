import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import cv_photo from "./cv_download.png";
import qr from "./qr.jpg";
import cv_pdf from "./cv_ANDRES_BANDA_2022.pdf";

const CvDownload = () => {
  return (
    <>
      <Row
        className="mx-0 px-0 dark-back"
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Col md={4} className="px-0 py-1">
          <img
            src={cv_photo}
            style={{
              width: "75%",
              maxHeight: "40rem",
              objectFit: "cover",
              filter: "blur(3px)",
            }}
          />
        </Col>
        <Col
          md={5}
          className="download-cv"
          style={{
            paddingLeft: "6rem",
            paddingTop: "4rem",
            paddingBottom: "2rem",
          }}
        >
          <h1 className="text-light title-cv ">Download my CV</h1>
          <p className="cv-description ">
            Scan the QR or click on download to get a detailed summary of my
            experience.
          </p>
          <Link to={cv_pdf} target="_blank" download>
            <Button className="btn-cv text-left">Download </Button>
          </Link>
        </Col>
        <Col
          md={3}
          className="download-cv"
          style={{
            paddingLeft: "6rem",
            paddingTop: "4rem",
            paddingBottom: "4rem",
          }}
        >
          <div className="col-md-4 ">
            <img src={qr} style={{ width: "9rem" }}></img>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CvDownload;
