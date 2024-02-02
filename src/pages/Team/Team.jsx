import React from "react";
import styles from "./Team.module.css";

function Team() {
  return (
    <div className={styles.container}>
      <h2>Our Team</h2>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div className={styles.chip}>
            <img
              src={require("../../assets/Danial.png")}
              className={styles.teamImg}
              alt="team"
            />
            <div>
              <p className={styles.name}>Danial Def</p>
              <p className={styles.cases}>301 Cases</p>
            </div>
          </div>
          <div className={styles.chip}>
            <img
              src={require("../../assets/Sanfole.png")}
              className={styles.teamImg}
              alt="team"
            />
            <div>
              <p className={styles.name}>Sanfole</p>
              <p className={styles.cases}>850 Cases</p>
            </div>
          </div>
          <div className={styles.chip}>
            <img
              src={require("../../assets/Cesforila.png")}
              className={styles.teamImg}
              alt="team"
            />
            <div>
              <p className={styles.name}>Cesforila</p>
              <p className={styles.cases}>470 Cases</p>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.chip}>
            <img
              src={require("../../assets/Colleen.png")}
              className={styles.teamImg}
              alt="team"
            />
            <div>
              <p className={styles.name}>Colleen</p>
              <p className={styles.cases}>190 Cases</p>
            </div>
          </div>
          <div className={styles.chip}>
            <img
              src={require("../../assets/Haldone.png")}
              className={styles.teamImg}
              alt="team"
            />
            <div>
              <p className={styles.name}>Haldone</p>
              <p className={styles.cases}>212 Cases</p>
            </div>
          </div>
          <div className={styles.chip}>
            <img
              src={require("../../assets/Nik.png")}
              className={styles.teamImg}
              alt="team"
            />
            <div>
              <p className={styles.name}>Nik Jeo</p>
              <p className={styles.cases}>350 Cases</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
