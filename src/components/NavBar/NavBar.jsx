import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../../assets/Nahil-logo.png";

const Dropdown = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={styles.dropdown}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div 
        className={styles.dropdownTitle} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} 
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {links.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const securityServices = [
    { path: "/guarding-services", label: "Guarding Services" },
    { path: "/general-services", label: "General Services" },
    { path: "/secure-valuable", label: "Secure Valuable" },
    { path: "/airline-aviation-security", label: "Airline/Aviation Security" },
    { path: "/safe-keeping", label: "Safe Keeping" },
    { path: "/dispatch-arrangement", label: "Dispatch Arrangement" },
    { path: "/counter-surveillance", label: "Counter Surveillance" },
    { path: "/cctv", label: "Closed Circuit TV" },
    { path: "/private-events", label: "Private Events" },
    { path: "/vault-storage", label: "Vault & Secure Storage Facilities" },
    { path: "/travelling-exhibitions", label: "Travelling Exhibitions" }
  ];

  const logisticsServices = [
    { path: "/third-party-logistics", label: "Third Party Logistics (3PL)" },
    { path: "/consignments", label: "Consignments/Cargo Handling" },
    { path: "/express-delivery", label: "Express Delivery" },
    { path: "/secured-delivery", label: "Secured Delivery" },
    { path: "/commodities", label: "Commodities" },
    { path: "/customs-brokerage", label: "Customs Brokerage" },
    { path: "/diamond-jewellery", label: "Diamond and Jewelleries" },
    { path: "/fine-arts", label: "Fine Arts" },
    { path: "/jet-service", label: "Jet Service" },
    { path: "/trade-show-packages", label: "Trade Show Packages" }
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Nahil Security" />
        </Link>

        <div className={styles.mobileMenuToggle} onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <div 
          className={`
            ${styles.navMenu} 
            ${menuOpen ? styles.navMenuActive : ''}
          `}
        >
          <ul className={styles.navList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>

            <li><Link to="/security-services">
              <Dropdown 
                title="Security Services" 
                links={securityServices} 
              /></Link>
            </li>

            <li><Link to="/logistic-services">
              <Dropdown 
                title="Logistics Services" 
                links={logisticsServices} 
              /></Link>
            </li>

            <li><Link to="/appointment">Appointment</Link></li>
          </ul>

          <div className={styles.navActions}>
            <button className={styles.trackBtn}>Track Shipment</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;