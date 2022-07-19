import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ServiceCard = ({ title, description, stack, img, url }) => {
  const [style, setStyle] = useState({
    visibility: "hidden",
    opacity: 0,
    transition: "visibility 0.5s, opacity 0.5s linear",
  });
  return (
    <>
      <div
        className="m-2 pb-2 p-0 card-service containerCard"
        style={{
          margin: "auto",
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
        <div
          style={{
            borderRadius: "50%",
            border: "1px dashed blue",
            width: "4rem",
            height: "4rem",
            lineHeight: "5rem",
            position: "absolute",
            zIndex: "-1",
            bottom: "12.5rem",
            left: "-0.5rem",
          }}
        ></div>
        <div className="m-4">
          <h2
            className="title-cv mb-0"
            style={{
              borderRadius: "5px",
              fontSize: "26px",
              display: "inline-block",
            }}
          >
            {title}
          </h2>
          <p className="text-muted">{stack}</p>
          <hr />
          <p style={{ color: "#727272" }}>{description}</p>
          <a href={url} target="_black">
            <Button
              style={{
                zIndex: "0",
                color: "#fff",
                padding: "0.5rem 1.5rem",
                backgroundColor:
                  style.opacity === 0 ? "#0a58ca" : "transparent",
              }}
            >
              Visit site
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
