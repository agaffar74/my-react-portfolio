//Importing relevent components
import React from "react";
import styles from "./Work.module.css";

//function for Work section
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
            Computer Service and Repair Technician - Self-Employed, London
            </h4>
            <p1 className={styles.timeline_date}>July 2021 - Present</p1>
            <br/>
            <p2 className={styles.timeline_desc}>
            Repairing computer hardware and diagnosing and 
            resolving network and software issues for clients.
            </p2>
          </div>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
            Assistant Manager  - Mooncare Limited, Isle of Dogs, London
            </h4>
            <p1 className={styles.timeline_date}>July 2020 - June 2021</p1>
            <br/>
            <p2 className={styles.timeline_desc}>
            Managing the daily operations of a care setting 
            and ensuring that the quality of the services provided meets national care standards.
            </p2>
          </div>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
            Photographer  - Self-Employed, London
            </h4>
            <p1 className={styles.timeline_date}>April 2017 - June 2020</p1>
            <br/>
            <p2 className={styles.timeline_desc}>
            Photographed high-quality images and edited for both 
            print and internet distribution for clients.  
            </p2>
          </div>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
            Retail Store Manager  - Tesco Express, London
            </h4>
            <p1 className={styles.timeline_date}>July 2008 - March 2017</p1>
            <br/>
            <p2 className={styles.timeline_desc}>
            Managed the day-to-day operations of the store 
            with optimising profitability.  
            </p2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

