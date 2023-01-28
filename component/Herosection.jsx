import React from "react";
import styles from "../styles/Herosection.module.css";
import ProfilePic from "../public/profile.jpg";
import Image from "next/image";
import { animations, motion } from "framer-motion";

function Herosection() {
  return (
    <div className={styles.containner}>
      <div>
        <h1>
          Hi! I'm Jirawat <br /> Full Stack Developer
        </h1>

        <button>Contact</button>
        <a>See Portfolio</a>
      </div>
      <div className={styles.right_section}>
        <Image src={ProfilePic} />
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
