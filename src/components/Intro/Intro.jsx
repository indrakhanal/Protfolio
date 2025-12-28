import React, { useContext } from "react";
import "./Intro.css";
import boy from "../../img/me.png";
import crown from "../../img/python.png";
import thumbup from "../../img/react.svg";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Resume from '../Navbar/indrakhanalCV__.pdf';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="i-name"
        >
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span className="gradient-text">INDRA KHANAL</span>
          <TypeAnimation
            sequence={[
              'FULL STACK DEVELOPER',
              2000,
              'GENAI & RAG SPECIALIST',
              3000,
              'HEALTHCARE INTEROPERABILITY (FHIR/HL7)',
              3000,
              'PYTHON & DJANGO EXPERT',
              2000,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            className="type-anim"
          />
          <span className="i-desc">
            Dynamic and highly skilled Full Stack Developer with 5+ years of experience in architecting scalable solutions.
            Expert in Building AI-driven applications with Generative AI and RAG, and specialized in Healthcare Technology
            platforms using FHIR and HL7 standards. Proficient in Python, Django, React, and Angular.
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="i-buttons"
        >
          <Link to="contact" smooth={true} spy={true}>
            <button className="button i-button">Hire me</button>
          </Link>
          <a href={Resume} target="_blank" rel="noreferrer">
            <button className="button n-button">Download CV</button>
          </a>
        </motion.div>

        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/indrakhanal/" target="_blank" rel="noreferrer">
            <motion.img whileHover={{ scale: 1.2 }} src={Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/indra-khanal-577444143" target="_blank" rel="noreferrer">
            <motion.img whileHover={{ scale: 1.2 }} src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/indra_khanal01/" target="_blank" rel="noreferrer">
            <motion.img whileHover={{ scale: 1.2 }} src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>

      {/* right image side */}
      <div className="i-right">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="i-main-image"
        >
          <img className="myimage" src={boy} alt="My-Profile" />

          <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
          >
            <FloatinDiv img={crown} text1="Python" text2="Developer" />
          </motion.div>

          <motion.div
            initial={{ left: "9rem", top: "18rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}
            className="floating-div"
          >
            <FloatinDiv img={thumbup} text1="React" text2="Developer" />
          </motion.div>
        </motion.div>

        {/* glass backgrounds */}
        <div className="blur-circle" style={{ background: "var(--purple)" }}></div>
        <div className="blur-circle" style={{ background: "var(--blueCard)", top: "17rem", left: "-9rem" }}></div>
      </div>
    </div>
  );
};

export default Intro;
