import React from "react";
import styles from "../styles/Skillsection.module.css";
import ParallaxText from "./ParallaxText";

function Skillsection() {
  return (
    <div>
      <div className={styles.Skillsection}>
        <ParallaxText baseVelocity={-5}>
          HTML &nbsp; ●&nbsp; CSS &nbsp; ●&nbsp; JAVASCRIPT&nbsp; ●{" "}
        </ParallaxText>
        <ParallaxText baseVelocity={5}>
          REACT.js&nbsp; ●&nbsp; NEXT.js&nbsp; ●&nbsp; Node.js&nbsp; ●&nbsp;
          MongoDB&nbsp; ●&nbsp; SQL&nbsp; ●&nbsp; GitHub &nbsp;●
        </ParallaxText>
      </div>
      <div className={styles.enoty}></div>
    </div>

    // <div>
    //   <section >
    //     <ul>
    //       <li>HTML</li>
    //       <li>CSS</li>
    //       <li>JAVASCRIPT</li>
    //       <li>REACT.js</li>
    //       <li>NEXT.js</li>
    //       <li>JAVASCRIPT</li>
    //       <li>JAVASCRIPT</li>
    //     </ul>
    //   </section>
    // </div>
  );
}

export default Skillsection;
