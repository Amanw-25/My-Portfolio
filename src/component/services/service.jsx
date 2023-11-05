import "./service.scss"

import { motion, useInView } from "framer-motion";

import React, { useRef } from 'react';

const variants={
    initial:{
        x:-50,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};


const service = () => {

    

    const ref=useRef()
    const isInView = useInView(ref,{margin:"-100px"})
   

    return (
        <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
            <motion.div className="textContainer">
                <p>I specialize in enhancing your online presence<br /> and driving your brand to new heights</p><hr/>
            </motion.div>
            <motion.div className="titleContainer" variants={variants} >
            <div className="title">
                
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Experiences</motion.b>
                </h1>
            </div>

            {/* <div className="title">
                <h1>
                    <b>For Your</b>Business
                </h1>
                <button>WHAT WE DO?</button>
            </div> */}

            </motion.div>
            <motion.div className="listContainer" variants={variants} >
                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                    <h2> <h1>Code Clause </h1> (Web Developer)  </h2><img src="codeclause.png"/>

                    <p>
                    As a Web Developer at Code Clause, I skillfully applied my expertise in HTML, CSS, and JavaScript for frontend development,
                     while also excelling in PHP and MySQL for backend solutions. This blend of skills enabled me to turn creative concepts into
                      practical digital experiences.
                    </p><br/>
                    <button>
                        <a href="https://drive.google.com/file/d/1LXp4EsU1OLV-4bEKxXWJHVRhJSOueBmQ/view?usp=drive_link">Know More</a>
                        </button>
                </motion.div>
                <motion.div className="box1" whileHover={{background:"lightgray",color:"black"}}>
                    <h2><h1>Youngovator</h1>(Web Developer)</h2><img src="youngovator-bg.png"/>
                    <p>
                    I am currently serving as a Web Developer at Youngovator for Innovation Carnival 3.0, where I am actively contributing to this
                     exciting event, driving digital innovation and technological advancements.
                    </p><br/>
                    <button>Know More</button>
                </motion.div>
                {/* <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                    <h2>Database Management</h2>
                    <p>
                    Manage databases, including setting up, optimizing, and securing databases for web applications.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                    <h2>Version Control</h2>
                    <p>
                    Use version control systems like Git to collaborate with other developers and track changes to code.
                    </p>
                    <button>Go</button>
                </motion.div> */}
            </motion.div>
        </motion.div>
    )
}

export default service

