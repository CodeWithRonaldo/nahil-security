import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/Nahil-logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.topHeader}>
        <div className={styles.container}>
          <span className={styles.companyName}>NAHIL SECURITY COMPANY LIMITED</span>
          <div className={styles.headerLinks}>
          <input type="text" placeholder="Search..." className={styles.searchBar} />
            <a href="#">Contact us</a>
            <a href="#">FAQs</a>
            <a href="#">Career</a>
            <a href="#">News Blog</a>
            <span className={styles.socialIcons}>
              <a href="#"><FaFacebook /><i className="fab fa-facebook"></i></a>
              <a href="#"><FaTwitter /><i className="fab fa-twitter"></i></a>
              <a href="#"><FaWhatsapp /><i className="fab fa-whatsapp"></i></a>
            </span>
          </div>
        </div>
      </header>
      <nav className={styles.mainNavbar}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="Nahil Security" />
          </Link>
        <div className={styles.container}>
          <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li className={styles.dropdown}>
              <span>Security Services ▼</span>
              <ul className={styles.dropdownMenu}>
                <li><Link to="/guarding-services">Guarding Services</Link></li>
                <li><Link to="/general-services">General Services</Link></li>
                <li><Link to="/secure-valuable">Secure Valuable</Link></li>
                <li><Link to="/airline-aviation-security">Airline/Aviation Security</Link></li>
                <li><Link to="/safe-keeping">Safe Keeping</Link></li>
                <li><Link to="/dispatch-arrangement">Dispatch Arrangement</Link></li>
                <li><Link to="/counter-surveillance">Counter Surveillance</Link></li>
                <li><Link to="/cctv">Closed Circuit TV</Link></li>
                <li><Link to="/private-events">Private Events</Link></li>
                <li><Link to="/vault-storage">Vault & Secure Storage Facilities</Link></li>
                <li><Link to="/travelling-exhibitions">Travelling Exhibitions</Link></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <span>Logistics Services ▼</span>
              <ul className={styles.dropdownMenu}>
                <li><Link to="/third-party-logistics">Third Party Logistics (3PL)</Link></li>
                <li><Link to="/consignments">Consignments/Cargo Handling</Link></li>
                <li><Link to="/express-delivery">Express Delivery</Link></li>
                <li><Link to="/secured-delivery">Secured Delivery</Link></li>
                <li><Link to="/commodities">Commodities</Link></li>
                <li><Link to="/customs-brokerage">Customs Brokerage</Link></li>
                <li><Link to="/diamond-jewellery">Diamond and Jewelleries</Link></li>
                <li><Link to="/fine-arts">Fine Arts</Link></li>
                <li><Link to="/jet-service">Jet Service</Link></li>
                <li><Link to="/trade-show-packages">Trade Show Packages</Link></li>
              </ul>
            </li>
            <li><Link to="/appointment">Appointment</Link></li>
          </ul>
          <div className={styles.navActions}>
            
            <button className={styles.trackBtn}>Track Shipment</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
