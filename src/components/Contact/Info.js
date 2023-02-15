import React from "react";
import styles from "./Info.module.css";

import { CiMapPin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";



function Info() {
  return (
    <div className={styles["info"]}>
      <div className={styles["info-item"]}>
        <div className={styles["icon"]}>
          <CiMapPin />
        </div>
        <div className={styles["content"]}>
          <h4 className={styles["title"]}>Address</h4>
          <p className={styles["body"]}>London, UK</p>
        </div>
      </div>
      <div className={styles["info-item"]}>
        <div className={styles["icon"]}>
          <CiMail />
        </div>
        <div className={styles["content"]}>
          <h4 className={styles["title"]}>Email</h4>
          <p className={styles["body"]}>a_gaffar74@yahoo.com</p>
        </div>
      </div>
    </div>
  );
}

export default Info;