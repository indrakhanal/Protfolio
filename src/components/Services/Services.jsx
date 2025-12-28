import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "../Navbar/resume.pdf"

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="services">
      {/* left side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="awesome"
      >
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <h2 className="gradient-text">Services</h2>
        <div className="services-desc">
          <p>
            Building high-performance, scalable web applications with a focus on clean code and exceptional user experience.
          </p>
          <ul>
            <li>
              <b>Web Development:</b> Full-stack applications using React, Python, and Django.
            </li>
            <li>
              <b>Data Analysis:</b> Processing and visualizing data with Pandas and Matplotlib.
            </li>
          </ul>
        </div>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
      </motion.div>

      {/* right */}
      <div className="cards-grid">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"HTML5, CSS3, Bootstrap, Responsive Design"}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card
            emoji={Glasses}
            heading={"Development"}
            detail={"Python, Django, React, Redux, PostgreSQL"}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card
            emoji={Humble}
            heading={"DevOps"}
            detail={"Docker, Nginx, Git, DigitalOcean, CI/CD"}
          />
        </motion.div>
      </div>

      {/* Blur background */}
      <div className="blur-circle" style={{ background: "var(--blueCard)", top: "50%", right: "0" }}></div>
    </div>
  );
};

export default Services;
