import React from "react";
import { Footer, Header, Skills, Work, Experience } from "./container/index.js"; // Testimonials, About
import { Navbar } from "./components/index.js";
import "./App.scss"
import resumeSvg from "./resume.svg";

const App = () => {
  return (
    <div className="app">
      <a className="app__resume" target="_blank" href="https://drive.google.com/file/d/18tCznXH2LjURCDCpiH02XFQlBzj0YUsy/view" style={{ textDecoration: "none" }}>
        <img src={resumeSvg} alt="resume_svg" />
        Resume
      </a>
      <Navbar />
      <Header />
      {/* <About /> */}
      <Skills />
      <Experience />
      <Work />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  )
}

export default App;