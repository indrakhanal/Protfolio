import React, { useContext } from "react";
import "./about.css";

import { themeContext } from "../../Context";
const About = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="about" id="about">
      <div className="about-awesome">
      <span style={{ color: darkMode ? "white" : "" }}>Personal Info</span>
       <span></span>
       <span>
       <div className="info">
        <span>
        <span>My Name is Indra i am from syangja, currently i'm Working as a full stack python developer at SmartTech Solutions PVT. LTD.</span>
        <hr/>
        <li>Full Name: Indra Khanal</li>
        <li>Address: New Baneshor, Ktm</li>
        <li>Contact No: +977 9846718211</li>
        <li>Email: indrakhanal291@gmail.com</li>
        <li>Birthday: 03 Mar 1998</li>
        <li>Age: 25 years</li>   
        <li>Degree:  BScCSIT</li>
        </span>
            </div>
        </span>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
      <div className="awesome">
      <span style={{ color: darkMode ? "white" : "" }}>Educational Info</span>
       <span></span>
       <div className="info">
        <li>
            <span>
                <span>Bachelor in Computer Science & Information Technology (BScCSIT)</span><br />
                <small >2016 - 2021</small><br />
                <small >Kathmandu College of Technology, Lokanthali, Bhaktapur</small>
              </span>
        </li>
        <li>
            <span>
                <span> Intermidiate In Science</span><br />
                <small >2014 - 2016</small><br />
                <small >Janapriya Multiple Campus, Simalchour, Pokhara</small>
            </span>
        </li> 
            </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default About;
