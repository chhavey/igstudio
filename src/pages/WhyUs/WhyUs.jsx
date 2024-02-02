import React from "react";
import styles from "./WhyUs.module.css";
import { ReactComponent as Gift } from "../../assets/gift.svg";

function WhyUs() {
  return (
    <div className={styles.container}>
      <h2>Why Choose us?</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <Gift className={styles.gift} />
          <p className={styles.cardText}>98% Success Rate</p>
          <p className={styles.cardText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <div className={styles.Btn}>Read More</div>
        </div>
        <div className={styles.card}>
          <Gift className={styles.gift} />
          <p className={styles.cardText}>100% Success Rate</p>
          <p className={styles.cardText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <div className={styles.Btn}>Read More</div>
        </div>
        <div className={styles.card}>
          <Gift className={styles.gift} />
          <p className={styles.cardText}>100% Success Rate</p>
          <p className={styles.cardText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <div className={styles.Btn}>Read More</div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
