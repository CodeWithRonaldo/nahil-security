import React from "react";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";
import SecImg from "../../assets/security-man.png";

const HeroSection = () => {
  // Variants for text animation
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.3,
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    })
  };

  // Variants for image animation
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.9, // Slightly after text animations
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className={styles.heroContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <motion.h1 
            className={styles.title}
            initial="hidden"
            animate="visible"
          >
            <motion.span 
              variants={textVariants} 
              custom={0} 
              initial="hidden" 
              animate="visible"
            >
              Fast & Reliable
            </motion.span>
            <motion.span 
              className={styles.secondLine}
              variants={textVariants} 
              custom={1} 
              initial="hidden" 
              animate="visible"
            >
              Logistics Services
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className={styles.description}
            variants={textVariants}
            custom={2}
            initial="hidden"
            animate="visible"
          >
            We offer different services ranging from logistics, warehousing,
            cargo transport and other related services. with Zerik you can be
            sure your products to be delivered securely on time.
          </motion.p>
          
          <motion.button 
            className={styles.ctaButton}
            variants={textVariants}
            custom={3}
            initial="hidden"
            animate="visible"
          >
            LOGISTICS SERVICES WE OFFER
          </motion.button>
        </div>
        
        <motion.img 
          className={styles.secimg} 
          src={SecImg} 
          alt="Security Services" 
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />
      </div>
    </div>
  );
};

export default HeroSection;