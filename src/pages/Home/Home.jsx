import React from "react";
import styles from "./Home.module.css";
import NavBar from "../../components/NavBar/NavBar";
import man from "../../assets/man.png";

function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.leftPanel}>
          <div>
            <h2>You don't have to</h2>
            <h2>Fight them Alone.</h2>
          </div>
          <p className={styles.leftPanelText}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>

          <div className={styles.emailWrapper}>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter you email address"
            />
            <div className={styles.Btn}>Let's Talk</div>
          </div>
        </div>
        <img className={styles.man} src={man} alt="hero" />
      </div>
    </div>
  );
}

export default Home;
