import React from "react";
import styles from "./Education.module.css";


const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.timeline_wrapper}>
        <div className={styles.timeline}>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
              London International College, London, UK
            </h4>
            <p className={styles.timeline_date}>2001-2003</p>
            <p className={styles.timeline_desc}>
              Master of Business Administration
            </p>
          </div>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
              London International College, London, UK
            </h4>
            <p className={styles.timeline_date}>1998-2000</p>
            <p className={styles.timeline_desc}>
              BSc General Studies
            </p>
          </div>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
              Microland IICE, Dhaka, BD
            </h4>
            <p className={styles.timeline_date}>1995 - 1996</p>
            <p className={styles.timeline_desc}>
              Higher Diploma in Computer Science</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;