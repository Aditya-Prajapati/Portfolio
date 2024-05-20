import React, { useState, useEffect } from "react";
import "./Header.scss";
import { AppWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { images } from "../../constants";

const titles = [
  "Full Stack Developer",
  "Problem Solver",
  "Aspiring Software Engineer"
];

const typingDuration = 100; 
const erasingDuration = 50;  
const delayBetween = 2000;   

const Header = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (displayText.length < titles[currentTitleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(titles[currentTitleIndex].substring(0, displayText.length + 1));
        }, typingDuration);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetween);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, erasingDuration);
      } else {
        setIsTyping(true);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentTitleIndex]);

  let links = ["https://www.codechef.com/users/aditya_cc0", "https://leetcode.com/Aditya_Prajapati/", "https://github.com/Aditya-Prajapati/", "https://www.linkedin.com/in/aditya-prajapati-/"];

  return (
    <div className="app__header app__flex">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="app__header-info app__flex"
      >
        <div className="app__header-badge">
          <a className="badge-cmp app__flex app__whitebg" href="https://aditya-prajapati.tech/">
            <div className="head-text app__flex" style={{ flexDirection: "column" }}>
              <p className="p-text"><strong>Hello, My name is</strong></p>
              <h1 style={{ fontSize: 38 }}><span>A</span>ditya</h1>
            </div>
          </a>

          <div className="head-text app__flex" style={{ flexDirection: "column", margin: "0" }}>
            <motion.p style={{ whiteSpace: "pre", fontSize: "18px", height: "6px" }}>
              {displayText && displayText.split(" ").map((word, index) => (
                <strong key={index}>
                  <span>{word.charAt(0)}</span>
                  {word.slice(1)}
                  {index < displayText.split(" ").length - 1 && " "} {/* Add a space if it's not the last word */}
                </strong>
              ))}
            </motion.p>
          </div>

          <div className="tag-cmp app__flex app__whitebg">
            <p className="p-text"><strong>Profiles</strong></p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="app__header-circles"
      >
        {[images.codechef, images.leetcode, images.github, images.linkedin].map((circle, index) => (
          <a href={links[index]} className="app__flex" target="_blank" rel="noopener noreferrer" key={`circle-${index}`}>
            <div className="circle-cmp app__flex">
              <img src={circle} alt="circle" />
            </div>
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
