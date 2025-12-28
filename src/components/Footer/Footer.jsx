import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import GitHub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">INDRA</div>
        <div className="footer-links">
          <a href="mailto:indrakhanal291@gmail.com">indrakhanal291@gmail.com</a>
          <p>© {currentYear} Indra Khanal. All rights reserved.</p>
        </div>
        <div className="footer-socials">
          <a href="https://www.instagram.com/indra_khanal01/" target="_blank" rel="noreferrer">
            <Insta color="currentColor" size={"2rem"} />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <Facebook color="currentColor" size={"2rem"} />
          </a>
          <a href="https://github.com/indrakhanal/" target="_blank" rel="noreferrer">
            <GitHub color="currentColor" size={"2rem"} />
          </a>
          <a href="https://www.linkedin.com/in/indra-khanal-577444143" target="_blank" rel="noreferrer">
            <LinkedIn color="currentColor" size={"2rem"} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
