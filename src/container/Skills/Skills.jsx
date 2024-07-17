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
  { name: "Tailwind", bgColor: "", icon: images.tailwind },
  { name: "Bootstrap", bgColor: "", icon: images.bootstrap },
  { name: "React", bgColor: "", icon: images.react },
  { name: "NodeJS", bgColor: "", icon: images.node },
  { name: "MongoDB", bgColor: "", icon: images.mongodb },
  { name: "SQL", bgColor: "", icon: images.sql },
  { name: "Git", bgColor: "", icon: images.git },
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text"><span>S</span>kills</h2>
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
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__whitebg");
