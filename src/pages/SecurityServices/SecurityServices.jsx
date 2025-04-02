import React from "react";
import { motion } from "framer-motion";
import styles from "./SecurityServices.module.css";
import heroImage from "../../assets/security-man.png"; // Add your hero image
import { Check, ArrowRight } from "lucide-react";

import vaultImage from "../../assets/vault-storage.png"; // Example from your screenshot
import generalServicesImage from "../../assets/general-services.png"; // Example from your screenshot
import secureValuableImage from "../../assets/secure-valuable.png"; // Example from your screenshot
import guardingImage from "../../assets/guarding-services.png";
import aviationImage from "../../assets/airline-security.png";
import safeKeepingImage from "../../assets/safe-keeping.png";
import dispatchImage from "../../assets/dispatch-arrangement.png";
import counterSurveillanceImage from "../../assets/counter-surveillance.png";
import cctvImage from "../../assets/closed-circuit.png";
import privateEventsImage from "../../assets/private-events.png";
import travellingImage from "../../assets/traveling-exhibition.png";
import { Link } from "react-router-dom";







const SecurityServices = () => {
  
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

 
  const securityFeatures = [
    "24/7 Surveillance",
    "Rapid Response Teams",
    "Advanced Equipment",
  ];

  
  const securityServices = [
    {
      id: 1,
      title: "Guarding Services",
      description:
        "Professional guarding solutions for residential and commercial properties.",
      image: guardingImage,
    },
    {
      id: 2,
      title: "General Services",
      description:
        "Nahil Security Company's Civil Investigations and Bureau of intelligence prov",
      image: generalServicesImage,
    },
    {
      id: 3,
      title: "Secure Valuable",
      description:
        "Nahil Security company protects valuable assets such as Money, Gold, Diamonds",
      image: secureValuableImage,
    },
    {
      id: 4,
      title: "Airline/Aviation Security",
      description:
        "Advanced security protocols for aviation facilities and operations.",
      image: aviationImage,
    },
    {
      id: 5,
      title: "Safe Keeping",
      description: "Secure storage and safekeeping services for your valuables.",
      image: safeKeepingImage,
    },
    {
      id: 6,
      title: "Dispatch Arrangement",
      description: "Efficient security dispatch management and coordination.",
      image: dispatchImage,
    },
    {
      id: 7,
      title: "Counter Surveillance",
      description: "Detect and neutralize unauthorized surveillance activities.",
      image: counterSurveillanceImage,
    },
    {
      id: 8,
      title: "Closed Circuit TV",
      description: "State-of-the-art CCTV monitoring and management systems.",
      image: cctvImage,
    },
    {
      id: 9,
      title: "Private Events",
      description:
        "Discreet security services for private events and gatherings.",
      image: privateEventsImage,
    },
    {
      id: 10,
      title: "Vault & Secure Storage Facilities",
      description:
        "Nahil Security's highly-secured, strategically located storage facilities are",
      image: vaultImage,
    },
    {
      id: 11,
      title: "Travelling Exhibitions",
      description: "Security solutions for mobile exhibitions and displays.",
      image: travellingImage,
    },
  ];

  return (
    <div className={styles.securityServicesPage}>
     
      <div className={styles.heroContainer}>
        <div className={`${styles.heroContent} ${styles.securityHero}`}>
          <motion.div
            className={styles.textSection}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className={styles.heroTitle} variants={itemVariants}>
              Nahil Security
              <br />
              Company Limited
            </motion.h1>

            <motion.p className={styles.heroDescription} variants={itemVariants}>
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
                  <Check className={styles.checkIcon} />
                  {feature}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div className={styles.ctaSection} variants={containerVariants}>
              <Link to="/appointment">
                <motion.button className={styles.primaryButton} variants={itemVariants}>
                  Book an Appointment <ArrowRight />
                </motion.button>
              </Link>
              
              {/* <motion.button className={styles.secondaryButton} variants={itemVariants}>
                Explore Services
              </motion.button> */}
            </motion.div>
          </motion.div>
          {/* Background image is handled through CSS */}
        </div>
      </div>

    
      <section className={styles.servicesSection}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Security Services
        </motion.h2>

        <motion.div
          className={styles.servicesGrid}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {securityServices.map((service) => (
            <motion.div
              key={service.id}
              className={styles.serviceCard}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className={styles.cardImageContainer}>
                <img
                  src={service.image}
                  alt={service.title}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.orangeLine}></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className={styles.plusIcon}>+</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default SecurityServices;