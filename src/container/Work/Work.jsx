import React, { useState, useEffect } from "react";
import "./Work.scss";
import { images } from "../../constants";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";

let works = [
  {
    title: "Engage",
    description:
      "Designed & developed a feature-rich social media platform. Implemented multi-account management, secure authentication via Passport.js, efficient search functionality & advanced content creation capabilities, including voice posts.",
    projectLink: "https://engageapp.vercel.app/",
    codeLink: "",
    imgUrl: images.engage,
    tags: ["MERN", "All"],
  },
  {
    title: "Process Flow Visualizer",
    description:
      "Created an interactive platform for simulating & conducting comparative analysis of operating system’s process scheduling algorithms, including FCFS, SJF, Priority Scheduling & Round Robin.",
    projectLink: "https://process-visualizer-frontend.vercel.app/",
    codeLink: "",
    imgUrl: images.pfv,
    tags: ["MERN", "All"],
  },
  {
    title: "Vertex",
    description:
      "A web application with responsive user interface optimized for efficient data retrieval and playback. Integrated a third-party API for fetching and streaming movies, enhancing user engagement with comprehensive search functionality.",
    projectLink: "https://vertexv1.vercel.app/",
    codeLink: "",
    imgUrl: images.vertex,
    tags: ["Web App", "All"],
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState(works);
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        <span>P</span>rojects
      </h2>
      <div className="app__work-filter">
        {["MERN", "Web App", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <a
            href={work.projectLink}
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={work.imgUrl} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    delayChildren: 0,
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  {/* <a href={work.codeLink} target="_blank">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div> 
                </a> */}
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p
                  className="p-text"
                  style={{ marginTop: 10, textAlign: "center" }}
                >
                  {work.description}
                </p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__whitebg");
