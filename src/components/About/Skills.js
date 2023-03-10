//Importing component from react
import React from "react";

//Importing relevent file
import styles from "./Skills.module.css";

//function for Skills section
const Skills = () => {
  return (
    <div className={styles["skills"]} id="skills">
      {/* <h1>My current skills</h1> */}
      <div className={styles["skills_container"]}>
        <div className={styles["skills_wrapper"]}>
          <div className={styles.skill}>HTML</div>
          <div className={styles.skill}>CSS</div>          
          <div className={styles.skill}>Javascript</div>
          <div className={styles.skill}>Bootstrap</div>          
          <div className={styles.skill}>React.js</div>
          <div className={styles.skill}>Node.js</div>
          <div className={styles.skill}>Redux</div>
          <div className={styles.skill}>Git</div>
          <div className={styles.skill}>Photoshop</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;