import React from 'react';
import { motion } from 'framer-motion';
import styles from './SecurityServices.module.css';
import heroImage from '../../assets/security-man.png'; // Add your hero image

// Import service images
import vaultImage from '../../assets/vault-storage.png'; // Example from your screenshot
import generalServicesImage from '../../assets/general-services.png'; // Example from your screenshot
import secureValuableImage from '../../assets/secure-valuable.png'; // Example from your screenshot
import guardingImage from '../../assets/guarding-services.png';
import aviationImage from '../../assets/airline-security.png';
import safeKeepingImage from '../../assets/safe-keeping.png';
import dispatchImage from '../../assets/dispatch-arrangement.png';
import counterSurveillanceImage from '../../assets/counter-surveillance.png';
import cctvImage from '../../assets/closed-circuit.png';
import privateEventsImage from '../../assets/private-events.png';
import travellingImage from '../../assets/traveling-exhibition.png';

const securityServices = [
  {
    id: 1,
    title: "Guarding Services",
    description: "Professional guarding solutions for residential and commercial properties.",
    image: guardingImage
  },
  {
    id: 2,
    title: "General Services",
    description: "Zerik Security Company's Civil Investigations and Bureau of intelligence prov",
    image: generalServicesImage
  },
  {
    id: 3,
    title: "Secure Valuable",
    description: "Zerik Security company protects valuable assets such as Money, Gold, Diamonds",
    image: secureValuableImage
  },
  {
    id: 4,
    title: "Airline/Aviation Security",
    description: "Advanced security protocols for aviation facilities and operations.",
    image: aviationImage
  },
  {
    id: 5,
    title: "Safe Keeping",
    description: "Secure storage and safekeeping services for your valuables.",
    image: safeKeepingImage
  },
  {
    id: 6,
    title: "Dispatch Arrangement",
    description: "Efficient security dispatch management and coordination.",
    image: dispatchImage
  },
  {
    id: 7,
    title: "Counter Surveillance",
    description: "Detect and neutralize unauthorized surveillance activities.",
    image: counterSurveillanceImage
  },
  {
    id: 8,
    title: "Closed Circuit TV",
    description: "State-of-the-art CCTV monitoring and management systems.",
    image: cctvImage
  },
  {
    id: 9,
    title: "Private Events",
    description: "Discreet security services for private events and gatherings.",
    image: privateEventsImage
  },
  {
    id: 10,
    title: "Vault & Secure Storage Facilities",
    description: "Zerik Security's highly-secured, strategically located storage facilities are",
    image: vaultImage
  },
  {
    id: 11,
    title: "Travelling Exhibitions",
    description: "Security solutions for mobile exhibitions and displays.",
    image: travellingImage
  }
];

const SecurityServices = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
    hover: { 
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className={styles.securityServicesPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.div 
            className={styles.heroText}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1>Nahil Security Company Limited</h1>
            <h2>Security Services</h2>
            <p>We offer a host of services to suit the requirements and demands of every individual, group, company or organization whose security we take responsibility for.</p>
            
            <motion.button 
              className={styles.appointmentBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book an Appointment with Us
            </motion.button>
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

      {/* Services Section */}
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
                <img src={service.image} alt={service.title} className={styles.cardImage} />
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