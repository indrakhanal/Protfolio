import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c1uuy7o",
        "template_vf971ik",
        form.current,
        "kHylZ7w7Wj_y0QGAp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="contact-left"
      >
        <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
        <h2 className="gradient-text">Contact Me</h2>
        <p className="contact-desc">
          Feel free to reach out for collaborations or just a friendly hello. I'm always open to discussing new projects and creative ideas.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="contact-right"
      >
        <form ref={form} onSubmit={sendEmail} className="glass contact-form-el">
          <div className="input-group">
            <input type="text" name="from_name" className="user" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <input type="email" name="user_email" className="user" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <textarea name="message" className="user" placeholder="Your Message" required />
          </div>
          <button type="submit" className="button contact-btn">Send Message</button>
          <AnimatePresence>
            {done && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="success-msg"
              >
                Thanks for reaching out! I'll get back to you soon.
              </motion.span>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </div>
  );
};


export default Contact;
