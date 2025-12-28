import React, { useState, useEffect } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Hamburger from 'hamburger-react'
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "Intro", label: "Home" },
    { to: "about", label: "About" },
    { to: "tabs", label: "Skills" },
    { to: "wexp", label: "Experience" },
    { to: "services", label: "Services" },
    { to: "portfolio", label: "Portfolio" },
    { to: "contact", label: "Contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <nav className={`n-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="n-left">
        <div className="n-name">INDRA</div>
        <Toggle />
      </div>

      {/* Desktop Menu */}
      <div className="n-right">
        <div className="n-list">
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} spy={true} smooth={true} activeClass="active">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="n-mobile-icon">
        <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="n-mobile-menu glass"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <ul>
              {navLinks.map((link) => (
                <motion.li key={link.to} variants={itemVariants}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={itemVariants}>
                <Link to="contact" spy={true} smooth={true} onClick={() => setOpen(false)}>
                  <button className="button" style={{ width: '100%' }}>Contact Me</button>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
