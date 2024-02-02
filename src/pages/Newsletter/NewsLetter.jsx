import React from "react";
import styles from "./NewsLetter.module.css";

function NewsLetter() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.newsletterTitle}>Subscribe Our Newsletter</h2>
        <div className={styles.fields}>
          <input className={styles.inputName} type="text" placeholder="Name" />
          <input
            className={styles.inputEmail}
            type="text"
            placeholder="Enter your Email"
          />
          <div className={styles.btn}>SEND</div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
