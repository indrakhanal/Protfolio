import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Resume from './resume.pdf';
import myimage from '../../img/mylogo.png'
import Hamburger from 'hamburger-react'
import { useState } from "react"; 
import { motion } from "framer-motion";


const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const [isActive, setActive] = useState(true)

  
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      x: -50,
      opacity: 0,
      transition: {
        x: { stiffness: 1000 },
      },
    },
  };
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {/* right */}
      {isOpen &&
      <div className="n-right">
      <div className="n-list">
          <motion.ul
            variants={variants}
            initial="closed"
            animate={isActive ? 'open' : 'closed'}
            className="menu icon-menu revealator-slideup revealator-once revealator-delay1">
            <motion.li
             className="icon-box"
             variants={itemVariants}
             >
              <Link activeClass="active" to="Navbar" spy={true} smooth={true} duration={500} offset={50}>
              Home
            </Link>
            </motion.li>
            <motion.li
             className="icon-box"
             variants={itemVariants}
             >
              <Link to="about" spy={true} smooth={true} duration={500} offset={50}>
              About
            </Link>
            </motion.li>
            <motion.li
             className="icon-box"
             variants={itemVariants}
             >
              <Link  to="tabs" spy={true} smooth={true} duration={500} offset={50}>
              Skils
            </Link>
            </motion.li>
            <motion.li
             className="icon-box"
             variants={itemVariants}
             >
              <Link  to="wexp" spy={true} smooth={true} duration={500} offset={50}>
              Experience
            </Link>
            </motion.li>
            <motion.li
             className="icon-box"
             variants={itemVariants}
             >
              <Link  to="services" spy={true} smooth={true} duration={500} offset={50}>
              Services
            </Link>
            </motion.li>
            <motion.li
             className="icon-box"
             variants={itemVariants}
             >
              <Link  to="portfolio" spy={true} smooth={true} duration={500} offset={50}>
              Protfolio
            </Link>
            </motion.li>
            <motion.li
             className="icon-box"
             variants={itemVariants}
             >
              <Link  to="contact" spy={true} smooth={true} duration={500} offset={50}>
              Contact
            </Link>
            </motion.li>
          </motion.ul>
      </div>
    </div>
      }
      
    </div>
  );
};

export default Navbar;
