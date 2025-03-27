import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./ServicesSection.module.css";
import { Link } from "react-router-dom";
import SafeIcon from "../../assets/stay-safe.png";
import PoliceMan from "../../assets/policeman.png";
import Vault from "../../assets/vault1.png";
import Cctv from "../../assets/cctv-camera.png";
import Aviation from "../../assets/aviation.png";

const services = [
  { title: "Safe Keeping Service", icon: SafeIcon, link: "/safe-keeping" },
  { title: "Counter Surveillance", icon: Cctv, link: "/counter-surveillance" },
  { title: "Private Events", icon: PoliceMan, link: "/private-events" },
  { title: "Aviation Security", icon: Aviation, link: "/aviation-security" },
  { title: "Vaults Storage", icon: Vault, link: "/vaults-storage" },
];

const SecurityServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Variants for section animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Stagger the children animations
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section 
      ref={ref}
      className={styles.container}
    >
      <div className={styles.orangeBar}></div>
      
      <motion.h2 
        className={styles.heading}
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        A global security company with
        <span className={styles.breakLine}>global reach</span>
      </motion.h2>
      
      <motion.p 
        className={styles.subheading}
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        If, as a traditional business, you're looking to make a successful
        digital transformation for your company, you need the right tools to
        work for you.
      </motion.p>
      
      <motion.div 
        className={styles.servicesContainer}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Link to={service.link} className={styles.serviceCard}>
              <div className={styles.icon}>
                <img src={service.icon} alt={service.title} />
              </div>

              <h3 className={styles.serviceTitle}>{service.title}</h3>

              <p className={styles.serviceLink}>Learn more about this service</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.p 
        className={styles.cta}
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Bring them together and you overcome the ordinary. <Link>See what we do</Link>
      </motion.p>
    </section>  
  );
};

export default SecurityServices;