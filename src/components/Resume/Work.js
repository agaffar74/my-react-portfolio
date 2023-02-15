import React from "react";
import styles from "./Work.module.css";


const Work = () => {
  return (
    <div className={styles.container}>
      <div className={styles.timeline_wrapper}>
        <div>
          <div className={styles.timeline_start}></div>
          {/* <h3>Work</h3> */}
        </div>
        <div className={styles.timeline}>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
            Assistant Manager  - Mooncare Limited, London
            </h4>
            <p1 className={styles.timeline_date}>June 2020 - July-2021</p1>
            <br/>
            <p2 className={styles.timeline_desc}>
            Managing a carehome coordinating care and the daily operations
            of a care setting, ensuring that the practice runs smoothly
            </p2>
          </div>
        </div>
        <div className={styles.timeline}>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
            IT Technician Traineeship  - IT Career Switch Ltd, London
            </h4>
            <p1 className={styles.timeline_date}>Sept 2019 - Oct-2021</p1>
            <br/>
            <p2 className={styles.timeline_desc}>
            IT Technician Traineeship specialising in troubleshooting 
            hardware and software issues through a series of courses, 
            practical work and official certifications. 
            </p2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

