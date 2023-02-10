import React from "react";
import Navbar from "@/component/Navbar";
import Hero from "@/component/Herosection";
import Skill from "@/component/Skillsection";
import { motion, useScroll, useSpring } from "framer-motion";

function index() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <motion.div style={{ scaleX }} className="progress-bar" />
      <Navbar />
      <Hero />
      <Skill />
    </div>
  );
}

export default index;
