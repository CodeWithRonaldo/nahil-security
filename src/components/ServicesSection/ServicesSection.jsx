import React from "react";
import styles from "./ServicesSection.module.css";
import { Link } from "react-router-dom";
import { MdOutlineSecurity } from "react-icons/md";
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
  return (
    <section className={styles.container}>
      <div className={styles.orangeBar}></div>
      <h2 className={styles.heading}>
        A global security company with
        <span className={styles.breakLine}>global reach</span>
      </h2>
      <p className={styles.subheading}>
        If, as a traditional business, you're looking to make a successful
        digital transformation for your company, you need the right tools to
        work for you.
      </p>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <Link key={index} to={service.link} className={styles.serviceCard}>
            <div className={styles.icon}>
              <img src={service.icon} alt={service.title} />
            </div>

            <h3 className={styles.serviceTitle}>{service.title}</h3>

            <p className={styles.serviceLink}>Learn more about this service</p>
          </Link>
        ))}
      </div>
      <p className={styles.cta}>Bring them together and you overcome the ordinary. <Link>See what we do</Link> </p>
    </section>  
  );
};

export default SecurityServices;
