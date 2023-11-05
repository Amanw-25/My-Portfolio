import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform} from "framer-motion";
import React, { useRef } from 'react';


const items=[
    {
        id:1,
        title:"Resume-builder-website",
        img:"resume.png",
        desc:"📄✨ Create an impressive resume effortlessly with our Resume Builder website! Crafted using HTML, CSS, and JavaScript, this user-friendly project offers- Dynamic Preview , Custom Section , PDF export",
    },
    {
        id:2,
        title:"Weather Application based on Rapid API",
        img:"weather.png",
        desc:"🌤️ Discover Weather Conditions with Our HTML, Bootstrap, and JavaScript Weather App! ☀️Introducing our innovative weather application built using HTML, Bootstrap, and JavaScript, powered by the Rapid API.",
    },
    {
        id:3,
        title:"Simon Says Game",
        img:"simon.png",
        desc:"🕹🎮 Developed a web-based Simon game as a personal project using HTML, CSS, and JavaScript. Designed an engaging and intuitive user interface with HTML for structure, CSS for styling, and JavaScript for interactive gameplay.",
    },
    {
        id:4,
        title:"Spotify Music Player",
        img:"spotify.png",
        desc:" 🎵 Create an immersive music experience with our Spotify Web Player. Built with HTML and CSS, it offers a user-friendly interface for seamless music streaming,",
    },
];


// const Single=({item})=>{
//     return (
//         <section>
//             {item.title}
//         </section>
//     )
    
// }

const Single = ({ item }) => {
  const ref= useRef();

  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["start start" ,"end start"]
    
  });

  const y=useTransform(scrollYProgress, [0,1] ,["0%","-500%"]);

    return (
      <section ref={ref}>
        <div className="container">
          <div className="wrapper">
            
          <img src={item.img} alt=""/>
          
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2><br/>
            <p>{item.desc}</p><br/>
            <button>
                        <a href="https://github.com/Amanw-25">See Demo</a>
                        </button>
          </motion.div>
        </div>
        </div>
      </section>
    )
  };
  
  
  
const Portfolio = () => {

  const ref= useRef();
  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["end end","start start"],
  });

  const scaleX= useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
      <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
        {items.map(item=>(
          <Single item={item} key={item.id}/>
        ))}
    
    </div>
  )

  // return (
  //   <div className="portfolio">
  //     <div className="progress">
  //       <h1>Featured Work</h1
  //     </div>
  //     {/* <div style={{scaleX}} className="progressBar"></div> */}
  //       {items.map(item=>(
  //         <Single item={item} key={item.id}/>
  //       ))}
    
  //   </div>
  // )
}

export default Portfolio
