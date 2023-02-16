//Imported components from react
import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

//Imported relevent file here
import styles from "./Footer.module.css";

const Footer = () => {
  const year = () => {
    const d = new Date();
    let y = d.getFullYear();
    return y;
  };

  return (
    <div className={styles.footer}>
      <div>
        <a
          className={styles.socialIcon}
          href="https://www.linkedin.com/in/abdul-gaffar-1b3b33245/"
          target="_blank" rel="noreferrer"
        >
          <FiLinkedin />
        </a>        
        <a
          className={styles.socialIcon}
          href="https://github.com/agaffar74"
          target="_blank" rel="noreferrer"
        >
          <FiGithub />
        </a>

        <a
          className={styles.socialIcon}
          href="https://www.instagram.com/a_gaffar74/"
          target="_blank" rel="noreferrer"
        >
          <FiInstagram />
        </a>
        <a 
          className={styles.socialIcon}
          href="https://www.facebook.com/a_gaffar74/" 
          target="_blank" rel="noreferrer">
            <FiFacebook />
          </a>
      </div>

      <p class="copyright">
        © <span class="year">{year()}</span> -{" "}
        <span class="bold"> Abdul Gaffar</span>
      </p>
    </div>
  );
}

export default Footer;