import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import SecImg from "../../assets/security-man.png";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            <span>Fast & Reliable</span>
            <span className={styles.secondLine}>Logistics Services</span>
          </h1>
          <p className={styles.description}>
            We offer different services ranging from logistics, warehousing,
            cargo transport and other related services. with Zerik you can be
            sure your products to be delivered securely on time.
          </p>
          <button className={styles.ctaButton}>
            LOGISTICS SERVICES WE OFFER
          </button>
        </div>
        <img className={styles.secimg} src={SecImg} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
