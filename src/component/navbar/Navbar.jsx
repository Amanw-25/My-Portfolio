import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                {/* Sidebar */}
                <Sidebar/>

                <div className="wrapper">
                    <motion.span 
                    initial={{ opacity: 0, scale: 0.5 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5 }}
                    >
                        
                    Aman Wairagkar</motion.span>
                    <div className="social">
                        <button>
                        <a href="https://drive.google.com/file/d/15yyUadpcnnt0OxaVrhKxDPiyvY0ns9YM/view?usp=drive_link">Resume</a>
                        </button>
                        <a href="https://github.com/Amanw-25"><img src="./git.png" alt="" /></a>
                        <a href="https://instagram.com/amanw_25?igshid=MTI1YnpxM2xobzZ4MQ=="><img src="./instagram.png" alt="" /></a>
                        <a href="https://x.com/AWairagkar?t=uHTs6ddfH_EGJLKpfrvmGg&s=09"><img src="./twitter.png" alt="" /></a>
                        {/* <a href="#"><img src="./dribble.png" alt=""/></a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
