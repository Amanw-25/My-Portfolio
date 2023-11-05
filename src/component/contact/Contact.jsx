import "./contact.scss";
import { motion } from "framer-motion";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3nqxxfs', 'template_kjqk8b7', formRef.current, 'ojKAtWyqAr7tTJMOE')
            .then((result) => {
                setSuccess(true);
            })
            .catch((error) => {
                setError(true);
            });
    }

    return (
        <motion.div className="contact">
            <motion.div className="textContainer">
                <motion.h1 variants={variants}>Let's Work Together</motion.h1>
                <motion.div className="item">
                    <h2>Mail</h2>
                    <span>amanwairagkar@gmail.com</span>
                </motion.div>
                <motion.div className="item">
                    <h2>Address</h2>
                    <span>181.B Sahkar Nagar near R.R Cat Indore (M.P)</span>
                </motion.div>
                <motion.div className="item">
                    <h2>Phone Number</h2>
                    <span>+91-8770-525-076</span>
                </motion.div>
            </motion.div>

            <div className="formContainer">
                <form ref={formRef} onSubmit={sendEmail}>
                    <input type="text" required placeholder="Name" name="from_name" />
                    <input type="email" required placeholder="Email" name="email" />
                    <textarea rows={8} required placeholder="Message" name="message" />
                    <button type="submit">Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </form>
            </div>
        </motion.div>
    );
}

export default Contact;
