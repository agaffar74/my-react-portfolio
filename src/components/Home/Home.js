//Imported relevent components
import React from "react";
import styles from "./Home.module.css";

import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

//Function for Home section and return
const Home = () => {
  return (
    <section className={styles.home_section} id="home">
      <div className={styles.home_left}>
        <div className={styles.home_img}>
          <div className={styles.cover}></div>
          <img
            className={styles.image}
            src={process.env.PUBLIC_URL + "/profile/profilePhoto.png"} alt = "Personal Pic"
          />
        </div>
      </div>
      <div className={styles.home_right}>
       
        <h1 className={styles.heading_1}>
          Abdul <span>Gaffar.</span>
        </h1>
        {/* <h1 className={styles.heading_2}>I build things for the web.</h1> */}
        <p className={styles.desc}>
          IT Technician and Front-End Web Developer
        </p>
        <div className={styles.social_icons}>
          <a
            href="https://www.linkedin.com/in/abdul-gaffar-1b3b33245"
            target="_blank" rel="noreferrer"
          >
            <FiLinkedin />
          </a> <a href="https://github.com/agaffar74" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
          <a href="https://www.instagram.com/a_gaffar74/" target="_blank" rel="noreferrer">
            <FiInstagram />
          </a>
          <a href="https://www.facebook.com/a_gaffar74/" target="_blank" rel="noreferrer">
            <FiFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;