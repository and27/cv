import React from "react";
import { FaGamepad, FaLock, FaMobile } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div
      className="light-back"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "100px 120px 150px 120px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          color: "#eeeeee",
          zIndex: "0",
          top: "0",
          letf: "10%",
        }}
      >
        <h3 style={{ fontSize: "150px" }}>Experience</h3>
      </div>

      <h1 className="py-2 title-cv" style={{ zIndex: "1" }}>
        Experience
      </h1>
      <hr
        width="25px"
        style={{ margin: "0px auto 30px auto", border: "2px solid black" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <ServiceCard
          FaMobile={FaMobile}
          title="Web and Mobile"
          description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            ullamcorper semper egestas. Phasellus pharetra hendrerit urna, quis
            lobortis justo auctor ac. Cras at nibh sed massa ornare euismod.
            Cras mattis condimentum posuere."
        />{" "}
        <ServiceCard
          FaMobile={FaGamepad}
          title="Game Development"
          description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          ullamcorper semper egestas. Phasellus pharetra hendrerit urna, quis
          lobortis justo auctor ac. Cras at nibh sed massa ornare euismod.
          Cras mattis condimentum posuere."
        />
        <ServiceCard
          FaMobile={FaLock}
          title="Cibersecurity"
          description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          ullamcorper semper egestas. Phasellus pharetra hendrerit urna, quis
          lobortis justo auctor ac. Cras at nibh sed massa ornare euismod.
          Cras mattis condimentum posuere."
        />
      </div>
    </div>
  );
};

export default Services;
