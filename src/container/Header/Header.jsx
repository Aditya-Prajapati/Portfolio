import React from "react";
import "./Header.scss";
import { AppWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { images } from "../../constants";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

const Header = () => {
  let links = ["https://www.codechef.com/users/aditya_cc0", "https://leetcode.com/Aditya_Prajapati/", "https://github.com/Aditya-Prajapati/", "https://www.linkedin.com/in/aditya-prajapati-/"]

  return (
    <div className="app__header app__flex">
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        // whileInView={{ x: [100, 0], opacity: [0, 1] }}
        // transition={{ duration: 1 }}
        className="app__header-info app__flex"
      >
        <div className="app__header-badge">
          <a className="badge-cmp app__flex app__whitebg" href="http://localhost:3000">
            {/* <h2>👋🏻</h2> */}
            <div className="app__flex" style={{ flexDirection: "column" }}>
              <p className="p-text"><strong>Hello, My name is</strong></p>
              <h1 style={{ fontSize: 38}}>Aditya</h1>
            </div>
          </a>

          <div className="tag-cmp app__flex app__whitebg">
            <p className="p-text"><strong>Profiles</strong></p>
          </div>
        </div>
      </motion.div>

      {/* <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5}}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src=""
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div> */}
      
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
         {[images.codechef, images.leetcode, images.github, images.linkedin].map((circle, index) => (
            <a href={links[index]} className="app__flex" target="_blank">
              <div className="circle-cmp app__flex" key={`circle-${index}`}>
                <img src={circle} alt="circle" />
              </div>
            </a>
         ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, "home");
