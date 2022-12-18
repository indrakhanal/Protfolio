import React, { useContext } from "react";
import "./Intro.css";
import boy from "../../img/me.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/react.svg";
import crown from "../../img/python.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Resume from '../Navbar/resume.pdf';

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>HI! I Am</span>
          <span>INDRA KHANAL</span>
            <div className="zoom">
              <span>
          Dynamic and detail-oriented Full Stack Developer with 3+ years of experience in developing and maintaining software applications.
           Proficient in Python, Django, React, and PostgreSQL. Skilled in agile development methodologies and a strong believer in test-driven development. 
           Seeking a challenging and rewarding opportunity to utilize my skills and experience to contribute to the success of a growing organization.
              </span>
            </div>
         
        </div>
        <div className="resume">
        <Link to="contact" smooth={true} spy={true} className="button_">
          <button className="button i-button">Hire me</button>
         
        </Link>
        <a href={Resume} target="_blank">
          <button className="button n-button">Resume</button>
          </a>
        </div>
        
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/indrakhanal/" target="_blank"><img src={Github} alt="Github" /></a>
          <a href="https://www.linkedin.com/in/indra-khanal-577444143" target="_blank"><img src={LinkedIn} alt="LinkedIn" /></a>
          <a href="https://www.instagram.com/indra_khanal01/" target="_blank"><img src={Instagram} alt="Instagram" /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={""} alt="" />
        <img src={""} alt="" />
        <img className="myimage" src={boy} alt="My-Profile" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          // src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Python" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "0rem", top: "18rem" }}
          whileInView={{ left: "-3rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best UI With" text2="React" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
