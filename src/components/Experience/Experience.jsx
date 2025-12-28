import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import { motion } from "framer-motion";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const stats = [
    { number: "5+", label1: "Years", label2: "Experience" },
    { number: "15+", label1: "Completed", label2: "Projects" },
    { number: "3+", label1: "Worked", label2: "Companies" },
  ];

  return (
    <div className="experience" id='experience'>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="achievement"
        >
          <div className="circle-wrapper">
            <div className="circle" style={{ color: darkMode ? "white" : "" }}>
              {stat.number}
            </div>
          </div>
          <div className="stat-text">
            <span style={{ color: darkMode ? "white" : "" }}>{stat.label1}</span>
            <span>{stat.label2}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
