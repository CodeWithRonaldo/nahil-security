import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./SecurityServices.module.css";
import heroImage from "../../assets/security-man.png";

const SecurityHeroSection = () => {
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

  const securityFeatures = [
    "24/7 Surveillance",
    "Rapid Response Teams",
    "Advanced Equipment",
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
          <motion.h1 variants={itemVariants}>Nahil Security Company Limited</motion.h1>
          <motion.h2 variants={itemVariants}>Security Services</motion.h2>
          <motion.p variants={itemVariants}>
            We offer a host of services to suit the requirements and demands
            of every individual, group, company or organization whose security
            we take responsibility for.
          </motion.p>

          <motion.ul className={styles.featureList} variants={containerVariants}>
            {securityFeatures.map((feature, index) => (
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
          <img src={heroImage} alt="Security professional" />
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityHeroSection;