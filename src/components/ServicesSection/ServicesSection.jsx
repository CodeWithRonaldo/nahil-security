import React from "react";
import styles from './ServicesSection.module.css';
import { Link } from "react-router-dom";

const services = [
  { title: "safe keeping service", icon: "🔒" },
  { title: "counter surveillance", icon: "📹" },
  { title: "private events", icon: "👮" },
  { title: "aviation security", icon: "✈️" },
  { title: "vaults storage", icon: "🛠️" },
];

const SecurityServices = () => {
  return (
    <section className={styles.container}>
        <div className={styles.orangeBar}></div>
        <h2 className={styles.heading}>
          a global security company with 
          <span className={styles.breakLine}>global reach</span>
        </h2>
        <p className={styles.subheading}>
          If, as a traditional business, you're looking to make a successful digital 
          transformation for your company, you need the right tools to work for you.
        </p>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceLink}>Learn more about this service</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default SecurityServices;
