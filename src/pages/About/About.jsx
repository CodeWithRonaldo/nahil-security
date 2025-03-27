import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./About.module.css";
import SecurityOfficer from "../../assets/security-man.png";
import StatImage1 from "../../assets/stat1.png"; 
import StatImage2 from "../../assets/stat2.png"; 
import StatImage3 from "../../assets/stat3.png"; 
import Testimonials from "../../components/Testimonials/Testimonials";
import MissionVision from "../../components/MissionVision/MissionVision";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className={styles.aboutContainer}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className={styles.content}>
        <motion.div className={styles.textContent} variants={itemVariants}>
          <motion.h1 variants={itemVariants}>
            Nahil Security Company Limited
          </motion.h1>
          
          <motion.h2 variants={itemVariants}>
            A Global Security Company with Global Reach
          </motion.h2>
          
          <motion.div variants={itemVariants}>
            <motion.p variants={itemVariants}>
              <span className={styles.initialLetter}>N</span>ahil Security is a fully Licensed, Bonded and Insured Private 
              Security Company and a leader in high quality and effective 
              security. Our physical security services are designed to fully 
              integrate with your requirements, likewise to provide the maximum 
              protection for your workers and assets. Our officers are selected for 
              their professional demeanor, attitude and ability. All officers undergo 
              comprehensive background screening, criminal record and 
              fingerprint checks.
            </motion.p>

            <motion.p variants={itemVariants}>
              Our extensive training involves theoretical and practical courses 
              including security planning, security and law, public relations, first 
              aid, fire prevention and public decorum. Nahil Security officers are 
              prepared to politely handle and diffuse delicate situations, while 
              taking a proactive stance enforcing client policy. Commitment to 
              effective security and exceptional customer service is our hallmark. 
              Nahil Security Company guarantees our entire prospect client a safe 
              haven for all type of asset.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div className={styles.imageSection} variants={imageVariants}>
          <motion.div className={styles.imageWrapper} variants={imageVariants}>
            <img 
              src={SecurityOfficer} 
              alt="Nahil Security Officer" 
              className={styles.heroImage}
            />
            
            {/* Positioned Stat Images */}
            <motion.div 
              className={styles.statImageContainer}
              variants={itemVariants}
            >
              <motion.img 
                src={StatImage1} 
                alt="Stat 1" 
                className={`${styles.statImage} ${styles.statImage1}`}
                variants={itemVariants}
              />
              <motion.img 
                src={StatImage2} 
                alt="Stat 2" 
                className={`${styles.statImage} ${styles.statImage2}`}
                variants={itemVariants}
              />
              <motion.img 
                src={StatImage3} 
                alt="Stat 3" 
                className={`${styles.statImage} ${styles.statImage3}`}
                variants={itemVariants}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Testimonials/>
      <MissionVision/>
    </motion.div>
  );
};

export default About;