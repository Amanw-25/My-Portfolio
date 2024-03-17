// import "./myself.scss"
// import {motion} from "framer-motion";


// const textVariants = {
//     initial: {
//         x: -500,
//         opacity: 0,
//     },

//     animate: {
//         x: 0,
//         opacity: 1,
//         transition: {
//             duration: 1,
//             staggerChildren: 0.1,
//         }
//     },

//     scrollButton:{
//         opacity:0,
//         y:10,
//         transition:{
//             duration:2,
//             repeat:Infinity
//         }
//     }
// }

// const SliderVariants = {
//     initial: {
//         x: 0,
//     },

//     animate: {
//         x: "-220%",
//         opacity: 0,
//         y:10,
//         transition: {
//             repeat:Infinity,
//             repeatType:"Mirror",
//             duration: 10,
//         }
//     },

 
// }

// const Myself = () => {
//     return (
//         <div className='hero'>
//             <div className="wrapper">
//                <motion.div 
//                     className="textContainer" 
//                     variants={textVariants}
//                     initial="initial"
//                     animate="animate"
//                     >
//                     <motion.h3 variants={textVariants}>Aman Wairagkar</motion.h3>
//                     <motion.h2 variants={textVariants}>Web Developer and software developer</motion.h2>
//                     <motion.div variants={textVariants} className="buttons">
//                         {/* <motion.button variants={textVariants}>See the Latest Works</motion.button> */}
                        
//                         <motion.button variants={textVariants}>Resume</motion.button>
//                         <motion.button variants={textVariants}>Contact Me</motion.button>
//                     </motion.div>
//                     <motion.img variants={textVariants} animate="scrollButton" className="img" src="/scroll.png" alt="Scroll Icon" />
//                 </motion.div>

//             </div>

//             <motion.div className="slidingTextContainer" variants={SliderVariants} initial="initial" animate="animate">
//                 Software Engineer
//             </motion.div>
//             <div className="imageContainer">
//                 <img className="profile" src="/profile.png"></img>
//             </div>

//         </div>
//     )
// }

// export default Myself



import "./myself.scss"
import {motion} from "framer-motion";


const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },

    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },

    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}

const SliderVariants = {
    initial: {
        x: 0,
    },

    animate: {
        x: "-220%",
        opacity: 0,
        y:10,
        transition: {
            repeat:Infinity,
            repeatType:"Mirror",
            duration: 10,
        }
    },

 
}

const Myself = () => {


    const downloadResume = () => {
        // Replace 'YOUR_GOOGLE_DRIVE_FILE_LINK' with the actual Google Drive file link
        const googleDriveFileLink = "https://drive.google.com/file/d/169TcnIbWf2dkcYWQdvncSUiSW7FIk6zc/view?usp=sharing";
        
        // Open a new window or tab to the Google Drive file link
        window.open(googleDriveFileLink, "_blank");
      };

    return (
        <div className='hero'>
            <div className="wrapper">
               <motion.div 
                    className="textContainer" 
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    >
                    <motion.h3 variants={textVariants}>Aman Wairagkar</motion.h3>
                    <motion.h2 variants={textVariants}>Web Developer and software developer</motion.h2>
                    <motion.div variants={textVariants} className="buttons">
                        {/* <motion.button variants={textVariants}>See the Latest Works</motion.button> */}
                        
                        <motion.button variants={textVariants} onClick={downloadResume} style={{cursor:"pointer"}}>Resume</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" className="img" src="/scroll.png" alt="Scroll Icon" />
                </motion.div>

            </div>

            <motion.div className="slidingTextContainer" variants={SliderVariants} initial="initial" animate="animate">
                Software Engineer
            </motion.div>
            <div className="imageContainer">
                <img className="profile" src="/profile_Pic.png"></img>
            </div>

        </div>
    )
}

export default Myself
