import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer
      className="bg-light text-center text-lg-start"
      style={{
        fontFamily: "Poppins, Arial, sans-serif",
        fontWeight: "500",
        boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      >
        <span>© {new Date().getFullYear()} Dhruv Zanzmera</span>
        <a
          href="https://www.linkedin.com/in/dhruv-zanzmera-3a04062b0"
          className="text-dark mx-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/Dhruv715"
          className="text-dark mx-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <div className="mt-2">
          Contact us at &nbsp;
          <a href="mailto:zanzmeradhruv79@gmail.com" className="text-dark">
          zanzmeradhruv79@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
