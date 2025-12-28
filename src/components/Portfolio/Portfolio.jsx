import React, { useContext } from "react";
import "./Portfolio.css";
import Sidebar from "../../img/prot1.PNG";
import Ecommerce from "../../img/asset.PNG";
import HOC from "../../img/store.PNG";
import MusicApp from "../../img/proto.PNG";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const projects = [
    {
      img: Sidebar,
      title: "Baby Products E-commerce",
      desc: "Full-featured e-commerce platform with a custom admin panel for inventory and sales reporting.",
      link: "#"
    },
    {
      img: Ecommerce,
      title: "Asset Management System",
      desc: "A comprehensive dashboard for tracking and managing corporate assets, built with React and Django.",
      link: "#"
    },
    {
      img: HOC,
      title: "Multi-tenant Store",
      desc: "A scalable multi-tenant e-commerce solution allowing rapid deployment of new stores.",
      link: "#"
    },
    {
      img: MusicApp,
      title: "Personal Portfolio",
      desc: "A modern, responsive portfolio website showcasing professional work and skills.",
      link: "#"
    }
  ];

  return (
    <div className="portfolio" id="portfolio">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="portfolio-header"
      >
        <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
        <h2 className="gradient-text">Portfolio</h2>
      </motion.div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="portfolio-card glass"
          >
            <div className="project-image">
              <img src={project.img} alt={project.title} />
              <div className="project-overlay">
                <a href={project.link} className="button project-btn">View Case Study</a>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
