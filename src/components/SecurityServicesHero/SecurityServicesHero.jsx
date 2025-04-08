import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./SecurityServicesHero.module.css";
import SecurityOfficer from "../../assets/security-man.png";
import guardingImage from "../../assets/guarding-services.png";
import secureValuableImage from "../../assets/secure-valuable.png";
import counterSurveillanceImage from "../../assets/counter-surveillance.png";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const SecurityHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
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

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2 + 0.3,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const securityFeatures = [
    "24/7 Surveillance",
    "Rapid Response Teams",
    "Advanced Equipment",
  ];

  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroBackground}></div>

      <motion.div
        ref={ref}
        className={styles.securityHero}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className={styles.heroContent}>
          <motion.div
            className={styles.textContent}
            variants={containerVariants}
          >
            <motion.span className={styles.companyTag} variants={textVariants}>
              Our Services
            </motion.span>

            <motion.h1 variants={textVariants}>
              Nahil Security Company Limited
            </motion.h1>

            <motion.h2 variants={textVariants}>
              Comprehensive Security Solutions
            </motion.h2>

            <motion.div
              className={styles.description}
              variants={containerVariants}
            >
              <motion.p variants={textVariants}>
                <span className={styles.initialLetter}>W</span>e offer a host of
                services to suit the requirements and demands of every
                individual, group, company or organization whose security we
                take responsibility for.
              </motion.p>

              <motion.ul
                className={styles.featureList}
                variants={containerVariants}
              >
                {securityFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    className={styles.featureItem}
                    variants={textVariants}
                  >
                    <Check className={styles.checkIcon} />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
              <Link to="/appointment">
                <motion.button
                  className={styles.learnMoreBtn}
                  variants={textVariants}
                >
                  Book an Appointment
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div className={styles.imageSection} variants={imageVariants}>
            <motion.div
              className={styles.imageWrapper}
              variants={imageVariants}
            >
              <div className={styles.imageBorder}></div>
              <img
                src={SecurityOfficer}
                alt="Nahil Security Officer"
                className={styles.heroImage}
              />

              {/* Positioned Service Images */}
              <div className={styles.statImageContainer}>
                <motion.img
                  src={guardingImage}
                  alt="Guarding Services"
                  className={`${styles.statImage} ${styles.statImage1}`}
                  variants={statVariants}
                  custom={0}
                />
                <motion.img
                  src={secureValuableImage}
                  alt="Secure Valuable"
                  className={`${styles.statImage} ${styles.statImage2}`}
                  variants={statVariants}
                  custom={1}
                />
                <motion.img
                  src={counterSurveillanceImage}
                  alt="Counter Surveillance"
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
          <span className={styles.scrollText}>
            Scroll to explore our services
          </span>
          <div className={styles.scrollLine}>
            <div className={styles.scrollDot}></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SecurityHero;
