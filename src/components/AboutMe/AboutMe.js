import React from "react";

const AboutMe = () => {
  return (
    <>
      <div
        className=""
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
          <h3
            className="back-titles"
            style={{ fontSize: "150px", zIndex: "-1" }}
          >
            About Me
          </h3>
        </div>

        <h1 className="py-2 title-cv" style={{ zIndex: "1" }}>
          About Me
        </h1>
        <hr
          width="25px"
          style={{ margin: "0px auto 30px auto", border: "2px solid black" }}
        />

        <p className="cv-description pb-2" style={{ zIndex: "0" }}>
          Computer Science Engineer <strong>·</strong> Web and Mobile developer{" "}
          <strong>·</strong> Entrepeneur <strong>·</strong> Member of SCG,
          Research Group.
        </p>
      </div>
      <div className="skill-bars  m-auto pb-5 mb-5">
        <div class="bar">
          <div class="info">
            <span>HTML</span>
          </div>
          <div class="progress-line html">
            <span></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <span>CSS</span>
          </div>
          <div class="progress-line css">
            <span></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <span>jQuery</span>
          </div>
          <div class="progress-line jquery">
            <span></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <span>Python</span>
          </div>
          <div class="progress-line python">
            <span></span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <span>MySQL</span>
          </div>
          <div class="progress-line mysql">
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
