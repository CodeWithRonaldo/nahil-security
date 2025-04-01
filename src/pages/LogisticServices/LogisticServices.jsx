import React from "react";
import { motion } from "framer-motion";
import styles from "./LogisticServices.module.css";
import heroImage from "../../assets/logistic4.png"; // Add your logistics hero image

// Import service images
import thirdPartyImage from "../../assets/third-party.png";
import cargoHandlingImage from "../../assets/cargo-handling.png";
import expressDeliveryImage from "../../assets/express.png";
import securedDeliveryImage from "../../assets/secure-valuable.png";
import commoditiesImage from "../../assets/commodities.png";
import customsBrokerageImage from "../../assets/customs-brokerage.png";
import fineArtsImage from "../../assets/fine-art.png";
import jetServiceImage from "../../assets/jet-services.png";
import tradeShowImage from "../../assets/trade-show.png";
import { Link } from "react-router-dom";

const logisticsServices = [
  {
    id: 1,
    title: "Third Party Logistics (3PL)",
    description:
      "Comprehensive third-party logistics solutions to streamline your supply chain operations.",
    image: thirdPartyImage,
  },
  {
    id: 2,
    title: "Consignments/Cargo Handling",
    description:
      "Professional handling of consignments and cargo with maximum security and efficiency.",
    image: cargoHandlingImage,
  },
  {
    id: 3,
    title: "Express Delivery",
    description:
      "Fast and reliable express delivery services for time-sensitive shipments.",
    image: expressDeliveryImage,
  },
  {
    id: 4,
    title: "Secured Delivery",
    description:
      "High-security transportation solutions for valuable and sensitive deliveries.",
    image: securedDeliveryImage,
  },
  {
    id: 5,
    title: "Commodities",
    description:
      "Specialized handling and transportation of various commodities across multiple industries.",
    image: commoditiesImage,
  },
  {
    id: 6,
    title: "Customs Brokerage",
    description:
      "Expert customs clearance services to navigate complex international regulations.",
    image: customsBrokerageImage,
  },
  {
    id: 7,
    title: "Fine Arts",
    description:
      "Specialized transportation and handling of fine art and cultural artifacts.",
    image: fineArtsImage,
  },
  {
    id: 8,
    title: "Jet Service",
    description:
      "Premium air transport solutions for urgent and high-value shipments.",
    image: jetServiceImage,
  },
  {
    id: 9,
    title: "Trade Show Packages",
    description:
      "Comprehensive logistics services for trade show exhibits and materials.",
    image: tradeShowImage,
  },
];

const LogisticsServices = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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

  return (
    <div className={styles.logisticsServicesPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroText}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1>Nahil Logistics Company Limited</h1>
            <h2>Logistics Services</h2>
            <p>
              We deliver comprehensive logistics solutions to meet the unique
              requirements of businesses and individuals, ensuring efficient
              movement of goods across the globe.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/appointment" className={styles.appointmentBtn}>
                Book an Appointment with Us
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

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Logistics Services
        </motion.h2>

        <motion.div
          className={styles.servicesGrid}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {logisticsServices.map((service) => (
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

export default LogisticsServices;
