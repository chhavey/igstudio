import React from "react";
import styles from "./Clients.module.css";

function Clients() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <h2 className={styles.leftText}>What says our</h2>
          <h2 className={styles.leftText}>happy Clients</h2>
        </div>

        <div className={styles.topRight}>
          <div className={styles.leftBtn}>⟵</div>
          <div className={styles.rightBtn}>⟶</div>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <img
            src={require("../../assets/Jane.png")}
            className={styles.jane}
            alt="jane"
          />
          <p className={styles.cardText}>Jane Cooper</p>
          <p style={{ fontSize: "smaller", marginBottom: "0.75rem" }}>
            CEO of Hunt
          </p>
          <p className={styles.cardText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
        </div>
        <div className={styles.card}>
          <img
            src={require("../../assets/Devon.png")}
            className={styles.devon}
            alt="devon"
          />
          <p className={styles.cardText}>Devon Lane</p>
          <p style={{ fontSize: "smaller", marginBottom: "0.75rem" }}>
            CEO of Hunt
          </p>

          <p className={styles.cardText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
        </div>
        <div className={styles.card}>
          <img
            src={require("../../assets/Robert.png")}
            className={styles.robert}
            alt="robert"
          />
          <p className={styles.cardText}>Robert Fox</p>
          <p style={{ fontSize: "smaller", marginBottom: "0.75rem" }}>
            CEO of Hunt
          </p>

          <p className={styles.cardText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Clients;
