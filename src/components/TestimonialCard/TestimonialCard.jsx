import React from "react";
import styles from "./TestimonialCard.module.css";

const TestimonialCard = ({ name, position, text, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <p className={styles.text}>{text}</p>
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.position}>{position}</p>
    </div>
  );
};

export default TestimonialCard;
