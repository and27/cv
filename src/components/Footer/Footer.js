import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="dark-back"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ margin: "20px auto 10px auto", color: "white" }}>
        <FaFacebookF size="1.75rem" style={{ margin: "10px" }} />
        <FaInstagram size="2rem" style={{ margin: "10px" }} />
        <FaLinkedinIn size="2rem" style={{ margin: "10px" }} />
      </div>
      <p className="footer-text" style={{ margin: "15px auto" }}>
        Developed by AB | All rights reserved
      </p>
    </div>
  );
};

export default Footer;
