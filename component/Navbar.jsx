import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Downloadicon from "../public/dlicon.png";
import Linkedin from "../public/linkedin.png";
import Namelogo from "../public/logo.png";
import Link from "next/link";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className={styles.containner}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Image src={Namelogo}></Image>
      </motion.div>
      <ul>
        <li>Home</li>
        <li>Project</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <div className={styles.navright}>
        <div className={styles.btn}>
          <Image src={Downloadicon} />
          <p>Resume</p>
        </div>
        <Link href="https://www.linkedin.com/in/jirawat-rongtong-b836a8165/">
          <Image src={Linkedin} alt="LinkedinLogo" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
