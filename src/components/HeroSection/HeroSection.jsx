import React, { useState } from 'react';
import styles from './HeroSection.module.css';
import SecImg from '../../assets/security-man.png'

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(1);
  
  const tabs = [
    { id: 1, title: "Professional Security Services" },
    { id: 2, title: "International Logistics Solutions" },
    { id: 3, title: "Complete Assets Management" },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    // You can add additional functionality here, like changing content or scrolling to a section
  };

  return (
    <div className={styles.heroContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            <span>Fast & Reliable</span>
            <span className={styles.secondLine}>Logistics Services</span>
          </h1>
          <p className={styles.description}>
            We offer different services ranging from logistics, warehousing,
            cargo transport and other related services. with Zerik you can be
            sure your products to be delivered securely on time.
          </p>
          <button className={styles.ctaButton}>
            LOGISTICS SERVICES WE OFFER
          </button>
        </div>
        <img className={styles.secimg} src={SecImg} alt="" />
      </div>
      <div className={styles.tabsContainer}>
        {tabs.map((tab) => (
          <div 
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            <span className={styles.tabNumber}>{tab.id}</span>
            <span className={styles.tabTitle}>{tab.title}</span>
          </div>
        ))}
        <div className={styles.progressBar}>
          <div 
            className={styles.progressIndicator} 
            style={{ 
              width: `${100 / tabs.length}%`, 
              left: `${((activeTab - 1) * 100) / tabs.length}%` 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;