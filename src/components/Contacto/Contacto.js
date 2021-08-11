import React from "react";
import photo from "../profile_small.jpeg";

const Contacto = () => {
  return (
    <div
      className="light-back "
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "80px",
        textAlign: "center",
        alignItems: "center",
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
        <h3 style={{ fontSize: "150px", zIndex: "-1" }}>Contact</h3>
      </div>
      <h1 className="py-2 title-cv" style={{ zIndex: "1" }}>
        Contact
      </h1>
      <hr
        width="25px"
        style={{ margin: "0px auto 30px auto", border: "2px solid black" }}
      />

      <div
        className="contact-section"
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "80px",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <img
          src={photo}
          style={{ borderRadius: "50%", width: "12rem", marginRight: "50px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <p> Let's talk</p>
          <h1>andres.banda.sm@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
