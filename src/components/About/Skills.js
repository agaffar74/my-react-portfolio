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
          <div className={styles.skill}>Javascript</div>
          <div className={styles.skill}>HTML</div>
          <div className={styles.skill}>CSS</div>        
          <div className={styles.skill}>jQuery</div> 
          <div className={styles.skill}>AZAX</div> 
          <div className={styles.skill}>Bootstrap</div>
          <div className={styles.skill}>DOM</div>           
          <div className={styles.skill}>React.js</div>
          <div className={styles.skill}>Node.js</div>
          <div className={styles.skill}>ES6+</div> 
          <div className={styles.skill}>Redux</div>
          <div className={styles.skill}>Git Bash</div>
          <div className={styles.skill}>Git Hub</div> 
          <div className={styles.skill}>Netlify</div>
          <div className={styles.skill}>Troubleshooting</div> 
          <div className={styles.skill}>Office 365</div>
          <div className={styles.skill}>Virtualisation</div>
          <div className={styles.skill}>Software Installation</div>
          <div className={styles.skill}>Server Administration</div>
          <div className={styles.skill}>Active Directory</div> 
          <div className={styles.skill}>Cyber Security</div>
          <div className={styles.skill}>Photography</div>        
          <div className={styles.skill}>Photo Editing</div>
          <div className={styles.skill}>Photoshop</div> 
          <div className={styles.skill}>Performance Management</div> 
          <div className={styles.skill}>Decision Making</div>
          <div className={styles.skill}>Team Management</div>  
        </div>
      </div>
    </div>
  );
};

export default Skills;