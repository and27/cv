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
        <a href="https://www.facebook.com/andro.b777/">
          <FaFacebookF size="1.75rem" style={{ margin: "10px" }} />
        </a>
        <a href="https://www.instagram.com/andro_b7/">
          <FaInstagram size="2rem" style={{ margin: "10px" }} />
        </a>
        <a href="https://www.linkedin.com/in/andres-banda">
          <FaLinkedinIn size="2rem" style={{ margin: "10px" }} />
        </a>
      </div>
      <p className="footer-text" style={{ margin: "15px auto" }}>
        Developed by AB | All rights reserved ©
      </p>
    </div>
  );
};

export default Footer;
