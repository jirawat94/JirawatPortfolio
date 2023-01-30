import React from "react";
import styles from "../styles/Herosection.module.css";
import ProfilePic from "../public/profile.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

function Herosection() {
  return (
    <div className={styles.containner}>
      <div className={styles.left_section}>
        <h1>Hi! I'm Jirawat</h1>{" "}
        <h1 className={styles.text_gradient}> Full-Stack Developer</h1>
        <p> Eager to learn, driven to explore, constantly pushing boundaries</p>
        <motion.div className={styles.button_gradient}></motion.div>
        <motion.button whileHover={{ x: 5, y: 4 }} whileTap={{ scale: 0.9 }}>
          Contact
        </motion.button>
        <a>See Portfolio</a>
      </div>
      <div className={styles.right_section}>
        <motion.div
          className={styles.img_container}
          initial={{ opacity: 0, x: 200 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ type: "spring", bounce: 0.6, duration: 3 }}
        >
          <Image src={ProfilePic} />
        </motion.div>

        <motion.div
          className={styles.halfcircle}
          initial={{ rotate: 15, y: -200, opacity: 0 }}
          whileHover={{ rotate: 15, transition: { duration: 1 }, scale: 1.1 }}
          animate={{ y: 0, opacity: 1, rotate: -15 }}
          transition={{ type: "spring", bounce: 0.6, duration: 2 }}
        ></motion.div>
      </div>
    </div>
  );
}

export default Herosection;
