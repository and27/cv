import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ServiceCard = ({ title, description, img, url }) => {
  const [style, setStyle] = useState({
    visibility: "hidden",
    opacity: 0,
    transition: "visibility 0.5s, opacity 0.5s linear",
  });
  return (
    <>
      <div
        className="m-2 card-service containerCard"
        style={{
          margin: "auto",
          padding: "0rem 0rem 2rem 0rem",
          position: "relative",
          zIndex: 0,
          textAlign: "left",
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
        <div style={{ margin: "0" }}>
          <img
            src={img}
            style={{ width: "100%", zIndex: "-6", position: "relative" }}
          />
        </div>
        {/* <div
          style={{
            backgroundColor: "#3d72bf",
            borderRadius: "50%",
            width: "1rem",
            height: "1rem",
            bottom: "12rem",
            left: "9rem",
            position: "absolute",
            zIndex: "-1",
          }}
        ></div> */}
        <div
          style={{
            backgroundColor: "#0a58ca",
            borderRadius: "50%",
            width: "5rem",
            height: "5rem",
            bottom: "10rem",
            left: "5px",
            position: "absolute",
            zIndex: "-2",
          }}
        ></div>
        <h2
          className="title-cv"
          style={{
            backgroundColor: "transparent",
            borderBottom: "1px solid #464646",
            margin: "2rem 2rem 0.5rem 2rem",
            paddingBottom: "1rem",
            borderRadius: "5px",
            fontSize: "25px",
          }}
        >
          {title}
        </h2>
        <p style={{ padding: "0rem 2rem", color: "#727272" }}>{description}</p>
        <a href={url} target="_black">
          <Button
            style={{
              ...style,
              zIndex: "0",
              color: "#fff",
              backgroundColor: "#171717 ",
              marginLeft: "2rem",
            }}
          >
            Visit site
          </Button>
        </a>
      </div>
    </>
  );
};

export default ServiceCard;
