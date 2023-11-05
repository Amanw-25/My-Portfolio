import "./parallax.scss"
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target:ref,
    offset:["start start","end start "]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yBgS = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yBgP = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg,#0c0c1d,#111132)"
            : "linear-gradient(180deg,#0c0c1d,#111132)"
      }}
    >
      <motion.h1 style={{ y: yText}}>
        {type === "services" ? "What I Do?" : "What I Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div 
        className="planets" 
        style={{ 
          y: yBgP,
          backgroundImage:`url(${type==="services" ? "/public/planets.png":"/public/sun.png"})`,
      }} ></motion.div>
      <motion.div style={{ x: yBgS}} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
