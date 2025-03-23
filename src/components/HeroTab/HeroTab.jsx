import React, { useState } from 'react'
import styles from './Herotab.module.css'


const HeroTab = () => {

    const [activeTab, setActiveTab] = useState(1);
      
      const tabs = [
        { id: 1, title: "Professional Security Services" },
        { id: 2, title: "International Logistics Solutions" },
        { id: 3, title: "Complete Assets Management" },
      ];
    
      const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        
      };
    
  return (
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
  )
}

export default HeroTab