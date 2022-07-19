import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import photo from "../foto_perfil.jpg";
import { RiWhatsappFill } from "react-icons/ri";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle";

const Contacto = ({ setActiveElement }) => {
  return (
    <>
      <div id="about" className="light-back">
        <SectionContainer
          sectionName="contact"
          setActiveElement={setActiveElement}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <SectionTitle mainTitle="Let´s connect" backgroundTitle="Contact" />
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
                  <br /> Let's create something together.
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
      </div>
    </>
  );
};

export default Contacto;
