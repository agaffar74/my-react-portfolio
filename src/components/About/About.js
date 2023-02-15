//importing component
import React from "react";

//Importing relevent files
import styles from "./About.module.css";
import Skills from "./Skills";


//Function of the about module
const About = () => {
  return (
    <section className={styles.about_section} id="about">
      <div className={styles.heading}>
        <h2 className={styles["title"]}>About Me</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
        <h3>About Me</h3>
          <p className={styles.desc}>
            I'm a Front-End Developer from London, UK.
          </p>
          <p className={styles.desc}>
            Innovative Front End Developer with 1 year experience building 
            and maintaining responsive websites in the Care Home industry. 
            Proficient in HTML, CSS, jQuery, JavaScript and React, Node; 
            plus modern libraries and frameworks.
          </p>
        </div>

        <div className={styles.right}>
          <h3>My Skills</h3>
          <Skills />
        </div>

      </div>
    </section>
  );
};

export default About;