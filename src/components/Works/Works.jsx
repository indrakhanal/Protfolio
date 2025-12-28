import React, { useContext } from "react";
import "./Works.css";
import PythonIcon from "../../img/python.png";
import ReactIcon from "../../img/react.svg";
import DjangoIcon from "../../img/djjpg.jpg";
import AiIcon from "../../img/ai_icon.png";
import HealthcareIcon from "../../img/healthcare_icon.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>
            Main Stack
          </span>
          <span className="gradient-text">Expertise & Skills</span>
          <div className="w-description">
            <p>
              I specialize in building intelligent, scalable, and secure applications at the intersection of AI and Healthcare.
            </p>
            <ul className="w-list">
              <li>
                <strong>AI/RAG Expertise</strong>: Implementing Large Language Models, Retrieval-Augmented Generation, and specialized AI agents.
              </li>
              <li>
                <strong>Healthcare Tech</strong>: Developing interoperable systems using HL7 FHIR standards for modern clinical applications.
              </li>
              <li>
                <strong>Full Stack Mastery</strong>: Robust backend services with Python/Django paired with dynamic React and Angular frontends.
              </li>
            </ul>
            <Link to="contact" smooth={true} spy={true}>
              <button className="button s-button">Let's Collaborate</button>
            </Link>
          </div>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={PythonIcon} alt="Python" />
          </div>
          <div className="w-secCircle">
            <img src={DjangoIcon} alt="Django" />
          </div>
          <div className="w-secCircle">
            <img src={AiIcon} alt="AI" />
          </div>
          <div className="w-secCircle">
            <img src={ReactIcon} alt="React" />
          </div>
          <div className="w-secCircle">
            <img src={HealthcareIcon} alt="Healthcare" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
