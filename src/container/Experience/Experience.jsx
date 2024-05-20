import React from "react";
import "./Experience.css";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

let experience = [
  {
    name: "Web Development Intern",
    company: "Neoteric Analytics",
    desc: "Worked as an frontend developer at Codenation.",
    timeline: "Feb 2024 - May 2024",
    link: "https://www.neotericanalytics.com/",
  },
];

const Experience = () => {
  return (
    <>
      <h2 className="head-text">
        <span>E</span>xperience
      </h2>
      <div className="app__experience">
        <div className="app__experience-container">
          <motion.div className="app__experience-column">
            {experience.map((work, index) => (
              <>
                <div className="app__experience-img">
                  <img
                    src="https://www.neotericanalytics.com/images/logo1.png"
                    alt="neotericanalytics_img"
                  />
                </div>
                <a href={work.link} target="_blank"data-tooltip-id={work.name} data-tooltip-content={work.desc} style={{ width: "100%", textDecoration: "none" }}>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    data-tip
                    data-for={work.name}
                    key={work.name}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <h1 className="designation">{work.name}</h1>
                      <p className="timeline" style={{ fontSize: "14px", color: "grey" }}>{work.timeline}</p>
                    </div>
                    <strong className="company" style={{ color: "#004b91" }}>{work.company}</strong>
                  </motion.div>
                </a>
                {/* <Tooltip id={work.name} className="skills-tooltip" /> */}
              </>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, "app__experience"),
  "experience",
  "app__primarybg"
);
