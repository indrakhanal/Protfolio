import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import LabTabs from "./components/Tabbar/tabs";
import About from "./components/About/aboutme";
import WorkExperience from "./components/WorkExperience/index"
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <div className="main-body">
      <Intro />
      <About />
      <Experience />
      <LabTabs />
      <Works />
      <WorkExperience />
      <Services />
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
      </div>
    </div>
  );
}

export default App;
