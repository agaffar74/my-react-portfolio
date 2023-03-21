//Imported relevent components
import React from "react";
import styles from "./Education.module.css";

//Function for Education section
const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.timeline_wrapper}>
        <div className={styles.timeline}>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
            Trilogy Skills Bootcamp, London, UK - 2023
            </h4>
            <p className={styles.timeline_desc}>
              Front-End Web Development
            </p>
          </div>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
              IT Career Switch Ltd, London, UK - 2020
            </h4>
            <p className={styles.timeline_desc}>
              IT Technician Traineeship
            </p>
          </div>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
            National Louis University, Chicago, USA - 2003
            </h4>
            <p className={styles.timeline_desc}>
              Master of Business Administration</p>
          </div>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
            Southeastern University, Washington DC, USA  - 2001
            </h4>
            <p className={styles.timeline_desc}>
              Bachelor of Science in General Studies</p>
          </div>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
              Microland IICE, Dhaka, Bangladesh - 1996
            </h4>
            <p className={styles.timeline_desc}>
              Higher Diploma in Computer Science</p>
          </div>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
              National University, Dhaka, Bangladesh - 1994
            </h4>
            <p className={styles.timeline_desc}>
              Bachelor of Commerce</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;