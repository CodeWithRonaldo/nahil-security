// Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo}>
        <p>Badem 14 villa, Bahcesehir 1 kisim</p>
        <p>Toprak Cikmazi & Bulbul CD No: 2</p>
        <p>34488 Basaksehir/Istanbul Turkiye</p>
        <p>Email: info@nahilsecuritycompany.com</p>
      </div>
      <p>
      Nahil Security is a fully Licensed, Bonded and Insured Private Security Company <br />and a leader in high quality and effective security. <br />
      Email: info@nahilsecuritycompany.com
      </p>

      <div className={styles.columnContainer}>
        <div className={styles.column}>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About nahil</a></li>
            <li><a href="#">Book Appointment</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Career Opportunity</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Logistics Services</h4>
          <ul>
            <li><a href="#">Cargo Handling</a></li>
            <li><a href="#">Third Party Logistics</a></li>
            <li><a href="#">Customs Brokerage</a></li>
            <li><a href="#">Express Delivery</a></li>
            <li><a href="#">Secured Delivery</a></li>
            <li><a href="#">Jet Service</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Security Services</h4>
          <ul>
            <li><a href="#">General Services</a></li>
            <li><a href="#">Secure Valuable</a></li>
            <li><a href="#">Airliner/Aviation Security</a></li>
            <li><a href="#">Safe Keeping</a></li>
            <li><a href="#">Dispatch Arrangement</a></li>
            <li><a href="#">Counter Surveillance</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© 2022 Nahil Security Company Limited. All rights reserved.</p>
        {/* <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon}><FaFacebook /></a>
          <a href="#" className={styles.socialIcon}><FaTwitter /></a>
          <a href="#" className={styles.socialIcon}><FaWhatsapp /></a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;