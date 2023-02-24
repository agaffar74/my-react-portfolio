//Importing components from react
import React from "react";
import Form from "./Form";
import Info from "./Info";

//Importing relevent file
import styles from "./Contact.module.css";

//function for Contact section
const Contact = () => {
  return (
    <section className={styles.contact_section} id="contact">
      <div className={styles.heading}>
        <h2 className={styles["title"]}>Contact Me</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <Form />
        </div>
        <div className={styles.right}>
          <Info />
        </div>
      </div>
    </section>
  );
}

export default Contact;