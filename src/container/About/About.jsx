import React, { useState, useEffect } from "react";
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { images } from "../../constants";

const abouts = [
  // {title: "Software Engineering Student", description: "Currently pursuing a Bachleors of Technology from Delhi Technological University", imgURL: images.about01}, 
  // {title: "Profession 2", description: "About Profession 2", imgURL: images.about02},
  // {title: "Profession 3", description: "About Profession 3", imgURL: images.about03},
  // {title: "Full stack developer", description: "I make websites.", imgURL: images.about04}
]

const About = () => {
  return (
    <>
      <h2 className="head-text"><span>About</span> Me</h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1}}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgURL} alt={about.title} />
            <h2 className="bold-text" style={{marginTop: "20px"}}>{about.title}</h2>
            <p className="p-text" style={{marginTop: "10px"}}>{about.description}</p>
          </motion.div>
        ))}
      </div> 
    </>
  )
}

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg");
