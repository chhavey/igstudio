import React from "react";
import styles from "./Practices.module.css";
import Business1 from "../../assets/BusinessLaw1.png";
import Business2 from "../../assets/BusinessLaw2.png";
import elder from "../../assets/elderAbuse.png";
import estate from "../../assets/realEstate.png";
import landlord from "../../assets/landlordDisputes.png";
import partnership from "../../assets/partnership.png";

function Practices() {
  return (
    <div className={styles.container}>
      <h2>Area of Practices</h2>
      <div className={styles.ImgContainer}>
        <div className={styles.imgWrapper}>
          <div className={styles.imgBox}>
            <img src={Business1} alt="Business Law" />
            <p className={styles.text}>BUSINESS LAW</p>
          </div>
          <div className={styles.imgBox}>
            <img src={partnership} alt="Partnership" />
            <p className={styles.text}>PARTNERSHIP LAW</p>
          </div>
        </div>
        <div className={styles.imgWrapper}>
          <div className={styles.imgBox}>
            <img src={estate} alt="Real Estate" />{" "}
            <p className={styles.text}>REAL ESTATE LAW</p>
          </div>
          <div className={styles.imgBox}>
            <img src={Business2} alt="Business Law" />{" "}
            <p className={styles.text}>BUSINESS LAW</p>
          </div>
        </div>
        <div className={styles.imgWrapper}>
          <div className={styles.imgBox}>
            <img src={landlord} alt="Landlord Disputes" />
            <p className={styles.text}>LANDLORD DISPUTES</p>
          </div>
          <div className={styles.imgBox}>
            <img src={elder} alt="Elder Abuse" />
            <p className={styles.text}>ELDER ABUSE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Practices;
