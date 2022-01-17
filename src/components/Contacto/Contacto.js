import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import photo from "../profile_small.jpeg";
import { RiWhatsappFill } from "react-icons/ri";
import SectionContainer from "../SectionContainer/SectionContainer";

const Contacto = ({ setActiveElement }) => {
  return (
    <>
      <SectionContainer
        sectionName="contact"
        setActiveElement={setActiveElement}
      />
      <div
        id="contact"
        className="light-back "
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
            top: "3%",
            letf: "5%",
          }}
        >
          <h3
            className="back-titles"
            style={{ fontSize: "150px", zIndex: "-1" }}
          >
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
              <h1 className="mail">andres.banda.sm@gmail.com</h1>
              <div>
                <p className="normal-text" style={{ display: "inline" }}>
                  or
                </p>
                <a href="https://api.whatsapp.com/send?phone=593994614769&text=Hola Andrés ...">
                  <Button
                    className=" "
                    style={{
                      marginLeft: "20px",
                      width: "3rem",
                      height: "3rem",
                      backgroundColor: "#008069",
                      borderRadius: "50%",
                      border: "none",
                    }}
                  >
                    <RiWhatsappFill size="1.5rem" />
                  </Button>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Contacto;
