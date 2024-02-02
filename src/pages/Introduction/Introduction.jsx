import React from "react";
import styles from "./Introduction.module.css";

function Introduction() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <p className={styles.text}>Let's Introduce</p>
            <p className={styles.text}>Ourself</p>
          </div>
          <div className={styles.topRight}>
            <p>Criminal Lawyer</p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit
              Exercitation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
