import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <p className={styles.logoText}>IGSTUDIO</p>
      </div>

      <div className={styles.menu}>
        <p className={styles.menuText}>Home</p>
        <p className={styles.menuText}>Attorneys</p>
        <p className={styles.menuText}>Practice Areas</p>
        <p className={styles.menuText}>About Us</p>
      </div>

      <div className={styles.button}>Contact Now</div>
    </div>
  );
}

export default NavBar;
