import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./AboutHero.module.css";
import SecurityOfficer from "../../assets/security-man.png";
import StatImage1 from "../../assets/stat1.png"; 
import StatImage2 from "../../assets/stat2.png"; 
import StatImage3 from "../../assets/stat3.png"; 

const AboutHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2 + 0.3,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroBackground}></div>
      
      <motion.div 
        ref={ref}
        className={styles.aboutHero}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className={styles.heroContent}>
          <motion.div className={styles.textContent} variants={containerVariants}>
            <motion.span className={styles.companyTag} variants={textVariants}>
              About Us
            </motion.span>
            
            <motion.h1 variants={textVariants}>
              Nahil Security Company Limited
            </motion.h1>
            
            <motion.h2 variants={textVariants}>
              A Global Security Company with Global Reach
            </motion.h2>
            
            <motion.div className={styles.description} variants={containerVariants}>
              <motion.p variants={textVariants}>
                <span className={styles.initialLetter}>N</span>ahil Security is a fully Licensed, Bonded and Insured Private 
                Security Company and a leader in high quality and effective 
                security. Our physical security services are designed to fully 
                integrate with your requirements, likewise to provide the maximum 
                protection for your workers and assets.
              </motion.p>

              <motion.p variants={textVariants}>
                Our officers are selected for their professional demeanor, attitude and ability. 
                All officers undergo comprehensive background screening, criminal record and 
                fingerprint checks.
              </motion.p>
              
              <motion.button className={styles.learnMoreBtn} variants={textVariants}>
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div className={styles.imageSection} variants={imageVariants}>
            <motion.div className={styles.imageWrapper} variants={imageVariants}>
              <div className={styles.imageBorder}></div>
              <img 
                src={SecurityOfficer} 
                alt="Nahil Security Officer" 
                className={styles.heroImage}
              />
              
              {/* Positioned Stat Images */}
              <div className={styles.statImageContainer}>
                <motion.img 
                  src={StatImage1} 
                  alt="Stat 1" 
                  className={`${styles.statImage} ${styles.statImage1}`}
                  variants={statVariants}
                  custom={0}
                />
                <motion.img 
                  src={StatImage2} 
                  alt="Stat 2" 
                  className={`${styles.statImage} ${styles.statImage2}`}
                  variants={statVariants}
                  custom={1}
                />
                <motion.img 
                  src={StatImage3} 
                  alt="Stat 3" 
                  className={`${styles.statImage} ${styles.statImage3}`}
                  variants={statVariants}
                  custom={2}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className={styles.scrollText}>Scroll to explore</span>
          <div className={styles.scrollLine}>
            <div className={styles.scrollDot}></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutHero;