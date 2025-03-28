import React from "react";
// import {motion } from "framer-motion;
import { Check, ArrowRight } from "lucide-react";
import styles from "./HeroSection.module.css";
import SecImg from "../../assets/security-man.png";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const serviceFeatures = [
    "Secure Logistics",
    "Timely Delivery",
    "Comprehensive Tracking",
  ];

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <div
          className={styles.textSection}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className={styles.heroTitle} variants={itemVariants}>
            Reliable Security &
            <br />
            Logistics Solutions
          </h1>

          <p className={styles.heroDescription} variants={itemVariants}>
            Providing top-tier security and logistics services with precision,
            speed, and unmatched reliability.
          </p>
          <div>
            <ul className={styles.featureList} variants={containerVariants}>
              {serviceFeatures.map((feature, index) => (
                <li
                  key={index}
                  variants={itemVariants}
                  className={styles.featureItem}
                >
                  <Check className={styles.checkIcon} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.ctaSection} variants={containerVariants}>
            <button className={styles.primaryButton} variants={itemVariants}>
              Explore Services <ArrowRight />
            </button>

            <button className={styles.secondaryButton} variants={itemVariants}>
              Contact Us
            </button>
          </div>
        </div>
        {/* <div 
          className={styles.imageSection}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img 
            src={SecImg} 
            alt="Security Services" 
            className={styles.heroImage}
          />
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
