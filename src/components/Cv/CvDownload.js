import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import cv_photo from "./cv_download.png";
import qr from "./qr.jpg";
import cv_pdf from "./CV_ANDRES_BANDA.pdf";

const CvDownload = () => {
  return (
    <>
      <div className="row container-fluid mx-0 px-0 dark-back">
        <div className="col-md-4 px-0">
          <img
            src={cv_photo}
            style={{ width: "100%", maxHeight: "40rem", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-8 d-flex flex-row justify-content-around align-items-center">
          <div>
            <h1 className="text-light title-cv ">Download my CV</h1>
            <p className="cv-description ">
              Get a more detailed summary downloading the pdf.
            </p>
          </div>
          <div className="d-flex flex-column">
            <div>
              <h1 style={{ color: "#2d3135" }}>QR Code</h1>
              <img src={qr} style={{ width: "6rem" }}></img>
            </div>
            <div className="pt-4">
              <h1 style={{ color: "#2d3135" }}>Download link</h1>
              <Link to={cv_pdf} target="_blank" download>
                <Button className="btn-cv text-left">Download </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CvDownload;
