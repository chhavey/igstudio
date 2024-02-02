import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <p>IGSTUDIO</p>
      </div>

      <div className={styles.menu}>
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>
      </div>

      <div className={styles.button}>Contact Now</div>
    </div>
  );
}

export default NavBar;
