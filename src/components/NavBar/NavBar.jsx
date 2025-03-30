import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../../assets/Nahil-logo.png";

const NavDropdown = ({ title, path, links, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navItemWithDropdown}>
      <div className={styles.navLinkContainer}>
        <Link to={path} onClick={closeMenu} className={styles.navLink}>
          {title}
        </Link>
        <button 
          className={styles.dropdownArrow} 
          onClick={toggleDropdown}
          aria-label={`Toggle ${title} dropdown`}
        >
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>
      
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {links.map((link) => (
            <li key={link.path}>
              <Link to={link.path} onClick={closeMenu}>{link.label}</Link>
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
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
      if (window.innerWidth > 1000) {
        setMenuOpen(false);
      }
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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
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
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
            <li>
              <NavDropdown 
                title="Security Services" 
                path="/security-services"
                links={securityServices}
                closeMenu={closeMenu}
              />
            </li>
            <li>
              <NavDropdown 
                title="Logistics Services" 
                path="/logistic-services"
                links={logisticsServices}
                closeMenu={closeMenu}
              />
            </li>
            <li><Link to="/appointment" onClick={closeMenu}>Appointment</Link></li>
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