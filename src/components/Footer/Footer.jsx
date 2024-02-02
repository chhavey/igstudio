import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import { ReactComponent as Instagram } from "../../assets/Instagram.svg";
import { ReactComponent as Facebook } from "../../assets/Facebook.svg";
import { ReactComponent as Twitter } from "../../assets/Twitter.svg";
import { ReactComponent as Pinterest } from "../../assets/Pinterest.svg";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
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

          <div className={styles.socialIcons}>
            <Instagram style={{ height: "20px" }} />
            <Facebook style={{ height: "20px" }} />
            <Twitter style={{ height: "20px" }} />
            <Pinterest style={{ height: "20px" }} />
          </div>
        </div>

        <div className={styles.info}>
          <p>© 2020 Acme. All rights reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
