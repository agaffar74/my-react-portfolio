import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import { useState } from "react";


function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav className={styles.nav_container}>
      <div className={styles.desktopMenu}>
        <div className={styles.nav_left}>
          <a href="#home">AG.</a>
        </div>
        <div className={styles.nav}>
          <a href="#about" className={styles.nav_link}>
            About
          </a>
          <a href="#resume" className={styles.nav_link}>
            Resume
          </a>
          <a href="#work" className={styles.nav_link}>
            Work
          </a>
          <a href="#contact" className={styles.nav_link}>
            Contact
          </a>
        </div>
        <div className={styles.nav_right}>


          <a
            className={styles.nav_resume_btn}
            href={process.env.PUBLIC_URL + "/profile/Personal_Resume.pdf"}
            target="_blank" rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <div className={styles.mobileMenu}>
        {/* Hamburger menu */}
        <div className={styles.nav_left}>
          <a href="#home">AG.</a>
        </div>
        <div
          className={`${styles.navMobile} ${
            isMenuClicked ? styles.active : ""
          }`}
        >
          <a href="#about" className={styles.nav_link}>
            About
          </a>
          <a href="#resume" className={styles.nav_link}>
            Resume
          </a>
          <a href="#work" className={styles.nav_link}>
            Work
          </a>
          <a href="#contact" className={styles.nav_link}>
            Contact
          </a>
          <a
            className={styles.nav_link}
            href={process.env.PUBLIC_URL + "/profile/WaminiResume.pdf"}
            target="_blank" rel="noreferrer"
          >
            Resume
          </a>
        </div>
        <div className={styles.nav_right}>

          <div className={styles.hamburgerMenu} onClick={toggleMobileMenu}>
            {isMenuClicked ? <IoClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;