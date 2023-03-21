//Importing components from react
import React from "react";
import { CiMapPin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

//Importing relevent file to work with info
import styles from "./Info.module.css";


//function for Ino section
const Info = () => {
  return (
    <div className={styles["info"]}>
      <div className={styles["info-item"]}>
        <div className={styles["icon"]}>
          <CiMapPin />
        </div>
        <div className={styles["content"]}>
          <h4 className={styles["title"]}>Address</h4>
          <p className={styles["body"]}>Redbridge, London, UK</p>
        </div>
      </div>
      <div className={styles["info-item"]}>
        <div className={styles["icon"]}>
          <CiMail />
        </div>
        <div className={styles["content"]}>
          <h4 className={styles["title"]}>Email</h4>
          <p className={styles["body"]}>agaffar74@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Info;