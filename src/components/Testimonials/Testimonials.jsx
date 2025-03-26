import React from "react";
import styles from "./Testimonials.module.css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import TestimonialImg1 from "../../assets/man-folding.jpg"
import TestimonialImg2 from "../../assets/woman-folding.jpg"
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Khamir Rabdallah",
    position: "Billy Marsh Associates",
    text: "Your professionalism and discretion was impeccable during my personal crisis, I am eternally grateful",
    image: TestimonialImg1,
  },
  {
    name: "Patrick Koeman",
    position: "CEO, BESTA Engineering",
    text: "As always, very good service for the Recall notice, and some service also done at the same time. I just had to get the tires changes",
    image: TestimonialImg2,
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.heading}>what our customers say</h2>
      <p className={styles.subtext}>
        At Nahil Security Company Limited we value what our customers think <br></br> or say about us.
        Their feedback helps us to work better.
      </p>
      <div className={styles.cardsContainer}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
      <p className={styles.text}>We are always glad to hear from our client. <Link>Share your Testimonials</Link> </p>
      
    </section>
  );
};

export default Testimonials;
