import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/dev/js.png";
import Fiverr from "../../img/python.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/react.svg";
import Facebook from "../../img/djjpg.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Main Stack
          </span>
          <span>I Work With</span>
          <p>
            <li>
              Python is used for a variety of applications, including web development, data analysis, and AI.
            </li>
            <li>
              React is a JavaScript library for building user interfaces and integration of APIs.
            </li>
            <li>
              JavaScript is used for building interactive web applications.
            </li>
            <li>
              Django is a high-level Python web framework. It is used for building web applications. It includes features such as a built-in ORM, template engine and rest apis.
            </li>
            <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
            </Link>
          </p>
         
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="Python" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
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
