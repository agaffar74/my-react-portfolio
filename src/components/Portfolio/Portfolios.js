import React from "react";
import PortfolioCard from "./PortfolioCard";
import styles from "./Portfolios.module.css";

const Portfolios = () => {
  return (
    <section className={styles.work_section} id="work">
      <div className={styles.heading}>
        <h2 className={styles["title"]}>My Portfolios</h2>
      </div>
      <div className={styles.container}>
        <PortfolioCard />
      </div>
    </section>
  );
};

export default Portfolios;