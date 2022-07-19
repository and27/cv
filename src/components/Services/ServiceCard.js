import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ServiceCard = ({ FaMobile, title, description }) => {
  const [style, setStyle] = useState({
    visibility: "hidden",
    opacity: 0,
    transition: "visibility 0.5s, opacity 0.5s linear",
  });

  return (
    <>
      <div
        className="m-2 card-service containerCard  "
        style={{
          position: "relative",
          zIndex: "0",
        }}
        onMouseEnter={(e) => {
          setStyle({ visibility: "visible", opacity: 1 });
        }}
        onMouseLeave={(e) => {
          setStyle({
            visibility: "hidden",
            opacity: 0,
            transition: "visibility 0.5s, opacity 0.5s linear",
          });
        }}
      >
        <div
          style={{
            backgroundColor: "#0a58ca",
            borderRadius: "50%",
            // border: "1px solid #171717",
            width: "6rem",
            height: "6rem",
            lineHeight: "5rem",
            position: "absolute",
            zIndex: "-1",
          }}
        ></div>
        <FaMobile size="3rem" />

        <h2
          className="title-cv pt-4"
          style={{
            borderBottom: "1px solid #464646",
            paddingBottom: "1rem",
          }}
        >
          {title}
        </h2>

        <p card-description style={{ color: "#727272" }}>
          {description}
        </p>
        <a href="https://calendly.com/andres-banda/15min" target="_blank">
          <Button
            disabled
            style={{
              ...style,
              zIndex: "0",
              color: "#fff",
              backgroundColor: "#171717 ",
            }}
          >
            1-on-1 coaching session
          </Button>
        </a>
      </div>
    </>
  );
};

export default ServiceCard;
