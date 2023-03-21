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
          Front-end web developer with 13+ years of 
          management experience. Trained at Trilogy 
          Skills Bootcamp and earned a certificate in 
          full-stack web development. Innovative 
          problem-solver passionate about developing 
          apps; focused on mobile-first design and 
          development. Strengths in creativity, 
          teamwork, and building projects from 
          ideation to execution.
          </p>
          <p className={styles.desc}>
          Also completed 
          an IT Technician Traineeship in 2021 
          specializing in troubleshooting hardware 
          and software issues through a series of 
          courses, practical work and official certifications.
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