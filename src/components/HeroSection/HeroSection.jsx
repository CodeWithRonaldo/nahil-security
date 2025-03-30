import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import styles from "./HeroSection.module.css";
// import SecImg from "../../assets/security-man.png";

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

  const serviceFeatures = [
    "Secure Logistics",
    "Timely Delivery",
    "Comprehensive Tracking",
  ];

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <motion.div
          className={styles.textSection}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className={styles.heroTitle} variants={itemVariants}>
            Reliable Security &
            <br />
            Logistics Solutions
          </motion.h1>

          <motion.p className={styles.heroDescription} variants={itemVariants}>
            Providing top-tier security and logistics services with precision,
            speed, and unmatched reliability.
          </motion.p>
          
          <motion.ul className={styles.featureList} variants={containerVariants}>
            {serviceFeatures.map((feature, index) => (
              <motion.li
                key={index}
                className={styles.featureItem}
                variants={itemVariants}
              >
                <Check className={styles.checkIcon} />
                {feature}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div className={styles.ctaSection} variants={containerVariants}>
            <motion.button className={styles.primaryButton} variants={itemVariants}>
              Explore Services <ArrowRight />
            </motion.button>

            <motion.button className={styles.secondaryButton} variants={itemVariants}>
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
        {/* Image is handled through CSS background */}
      </div>
    </div>
  );
};

export default HeroSection;