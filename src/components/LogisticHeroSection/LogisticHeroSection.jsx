import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./LogisticServices.module.css";
import heroImage from "../../assets/logistic4.png";

const LogisticsHeroSection = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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

  const logisticsFeatures = [
    "Global Shipping Network",
    "Real-time Tracking",
    "Secured Transport",
  ];

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <motion.div
          className={styles.heroText}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>Nahil Logistics Company Limited</motion.h1>
          <motion.h2 variants={itemVariants}>Logistics Services</motion.h2>
          <motion.p variants={itemVariants}>
            We deliver comprehensive logistics solutions to meet the unique
            requirements of businesses and individuals, ensuring efficient
            movement of goods across the globe.
          </motion.p>

          <motion.ul className={styles.featureList} variants={containerVariants}>
            {logisticsFeatures.map((feature, index) => (
              <motion.li
                key={index}
                className={styles.featureItem}
                variants={itemVariants}
              >
                <Check className={styles.featureIcon} />
                {feature}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/appointment" className={styles.appointmentBtn}>
              Book an Appointment with Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={heroImage} alt="Logistics professional" />
        </motion.div>
      </div>
    </section>
  );
};

export default LogisticsHeroSection;