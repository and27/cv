import React from "react";

const ServiceCard = ({ FaMobile, title, description }) => {
  return (
    <div
      className="card m-2 card-service"
      style={{
        margin: "auto",
        width: "450px",
      }}
    >
      <FaMobile size="3rem" style={{ margin: "30px auto", padding: "2 rem" }} />
      <h2 className="title-cv">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
