// Importing components
import React from "react";
import styles from "./SkillCard.module.css";


const SkillCard = (props) => {
  return (
    <li className={styles["SkillCard"]}>
      <div className={styles["card"]}>
        <div className={styles["card_image"]} title={props.text}>
          <img src={props.src} />
        </div>
      </div>
    </li>
  );
};

export default SkillCard;