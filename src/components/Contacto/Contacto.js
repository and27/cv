import React from "react";
import { Col, Row } from "react-bootstrap";
import photo from "../profile_small.jpeg";

const Contacto = () => {
  return (
    <div
      id="contact"
      className="light-back "
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "80px",
        textAlign: "center",
        alignItems: "center",
        marginTop: "4rem",
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
        <h3 className="back-titles" style={{ fontSize: "150px", zIndex: "-1" }}>
          Contact
        </h3>
      </div>
      <h1 className="py-2 title-cv" style={{ zIndex: "1" }}>
        Contact
      </h1>
      <hr
        width="25px"
        style={{ margin: "0px auto 30px auto", border: "2px solid black" }}
      />

      <Row
        className="contact-section"
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "80px",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Col md={4}>
          <img
            src={photo}
            style={{
              borderRadius: "50%",
              width: "12rem",
            }}
          />
        </Col>
        <Col md={8}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <p className="normal-text">
              Some of the most creative projects start with a conversation.
              <br /> Tell us about your ideas and let's work together.
            </p>
            {/* <h1 className="mail">andres.banda.sm@gmail.com</h1> */}
            <h1 className="mail">hello@andres.banda.com</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contacto;
