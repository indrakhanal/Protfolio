import React, { useContext } from "react";
import "./about.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="about" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="about-header"
      >
        <span style={{ color: darkMode ? "white" : "" }}>Get to know</span>
        <h2 className="gradient-text">About Me</h2>
      </motion.div>

      <div className="about-container">
        {/* Personal Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="about-card glass"
        >
          <div className="card-header">
            <h3>Personal Information</h3>
          </div>
          <div className="card-content">
            <p className="about-intro">
              My name is Indra and I'm a Full Stack Python Developer currently working at <b>Cotiviti Nepal.</b>
            </p>
            <div className="info-grid">
              <div className="info-item"><span>Name:</span> <span>Indra Khanal</span></div>
              <div className="info-item"><span>Address:</span> <span>New Baneshor, Kathmandu</span></div>
              <div className="info-item"><span>Contact:</span> <span>+977 9846718211</span></div>
              <div className="info-item"><span>Email:</span> <span>indrakhanal291@gmail.com</span></div>
              <div className="info-item"><span>Birthday:</span> <span>03 Mar 1998</span></div>
              <div className="info-item"><span>Degree:</span> <span>BScCSIT</span></div>
            </div>
          </div>
        </motion.div>

        {/* Educational Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="about-card glass"
        >
          <div className="card-header">
            <h3>Education</h3>
          </div>
          <div className="card-content">
            <div className="edu-item">
              <div className="edu-circle"></div>
              <div className="edu-info">
                <h4>Bachelor in Computer Science & IT</h4>
                <p className="edu-year">2016 - 2021</p>
                <p>Kathmandu College of Technology, Bhaktapur</p>
              </div>
            </div>
            <div className="edu-item">
              <div className="edu-circle"></div>
              <div className="edu-info">
                <h4>Intermediate In Science</h4>
                <p className="edu-year">2014 - 2016</p>
                <p>Janapriya Multiple Campus, Pokhara</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
