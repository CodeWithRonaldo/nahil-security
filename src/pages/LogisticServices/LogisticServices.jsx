import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./LogisticServices.module.css";
import thirdPartyImage from "../../assets/third-party.png";
import cargoHandlingImage from "../../assets/cargo-handling.png";
import expressDeliveryImage from "../../assets/express.png";
import securedDeliveryImage from "../../assets/secure-valuable.png";
import commoditiesImage from "../../assets/commodities.png";
import customsBrokerageImage from "../../assets/customs-brokerage.png";
import fineArtsImage from "../../assets/fine-art.png";
import jetServiceImage from "../../assets/jet-services.png";
import tradeShowImage from "../../assets/trade-show.png";


const LogisticsServices = () => {
  
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

  
  const logisticsFeatures = [
    "Global Shipping Network",
    "Real-time Tracking",
    "Secured Transport",
  ];

  
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

  return (
    <div className={styles.logisticsServicesPage}>
     
      <div className={styles.heroContainer}>
        <div className={`${styles.heroContent} ${styles.logisticsHero}`}>
          <motion.div
            className={styles.textSection}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className={styles.heroTitle} variants={itemVariants}>
              Nahil Logistics
              <br />
              Company Limited
            </motion.h1>

            <motion.p className={styles.heroDescription} variants={itemVariants}>
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
              <Link to="/logistic-services">
              <motion.button className={styles.secondaryButton} variants={itemVariants}>
                View Services
              </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
        </div>
      </div>

     
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