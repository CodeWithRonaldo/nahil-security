import React from "react";
import styles from "./MissionVision.module.css";
import missionIcon from "../../assets/express-delivery.png";
import visionIcon from "../../assets/worldwide-shipping.png";

const MissionVision = () => {
  return (
    <div className={styles.container}>
      {/* Mission Section */}
      <div className={styles.card}>
        <div className={styles.icon}>
          <img src={missionIcon} alt="Mission Icon" />
        </div>
        <h2 className={styles.title}>our mission</h2>
        <p className={styles.text}>
          Our mission and values will always go the extra mile in dealing with
          people, whether they are members of the public, customers, our
          supervisors, or employees. We will endeavor to obtain management
          consensus on important issues, especially those that affect our
          customers and employees.
        </p>
      </div>

      {/* Vision Section */}
      <div className={styles.card}>
        <div className={styles.icon}>
          <img src={visionIcon} alt="Vision Icon" />
        </div>
        <h2 className={styles.title}>our vision</h2>
        <p className={styles.text}>
          At Nahil Security Company Limited, we believe that real security
          challenges require real security solutions by competent professionals.
          Our vision is to be recognized as the most professional, ethical, and
          highest-quality security company in the industry.
        </p>
      </div>
    </div>
  );
};

export default MissionVision;
