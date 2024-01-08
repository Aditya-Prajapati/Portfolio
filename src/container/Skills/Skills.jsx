import React from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { Tooltip } from "react-tooltip";
import { images } from "../../constants";
import "react-tooltip/dist/react-tooltip.css";

let skills = [
  { name: "C++", bgColor: "", icon: images.cpp },
  { name: "DSA", bgColor: "", icon: images.algorithms },
  { name: "HTML", bgColor: "", icon: images.html },
  { name: "CSS", bgColor: "", icon: images.css },
  { name: "JavaScript", bgColor: "", icon: images.javascript },
  { name: "React", bgColor: "", icon: images.react },
  { name: "NodeJS", bgColor: "", icon: images.node },
  { name: "MongoDB", bgColor: "", icon: images.mongodb },
  { name: "SQL", bgColor: "", icon: images.sql },
  { name: "Git", bgColor: "", icon: images.git },
];

let experience = [
  { name: "Frontend Developer", company: "Codenation", desc: "Worked as an frontend developer at Codenation." }
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text"><span>Skills</span></h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience here */}
        {/* <motion.div className="app__skills-exp">
          {experience.map((work, index) => (
            <>
              <a data-tooltip-id={work.name} data-tooltip-content={work.desc}>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  data-tip
                  data-for={work.name}
                  key={work.name}
                >
                  <h4 className="bold-text">{work.name}</h4>
                  <p className="p-text">{work.company}</p>
                </motion.div>
              </a>
              <Tooltip id={work.name} className="skills-tooltip" />
            </>
          ))}
        </motion.div> */}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__whitebg");
