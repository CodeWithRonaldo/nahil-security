import React from "react";
import styles from "./Testimonials.module.css";
import TestimonialImg1 from "../../assets/man-folding.jpg";
import TestimonialImg2 from "../../assets/woman-folding.jpg";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Patrick Koeman",
    position: "Billy Marsh Associates",
    text: "Your professionalism and discretion was impeccable during my personal crisis, I am eternally grateful",
    image: TestimonialImg1,
  },
  {
    name: "Khamir Rabdallah",
    position: "CEO, BESTA Engineering",
    text: "As always, very good service for the Recall notice, and some service also done at the same time. I just had to get the tires changes",
    image: TestimonialImg2,
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <h2 className={styles.heading}>What our clients say</h2>
          <div className={styles.underline}></div>
          <p className={styles.subtext}>
            At Nahil Security Company Limited we value what our customers think about us.
            Their feedback helps us to serve them better.
          </p>
        </div>
        
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.23.315-.606.755-1.13 1.324-1.572.23-.174.464-.332.7-.477.235-.146.464-.26.686-.343.222-.082.397-.124.525-.124.357 0 .42.147.42.44v.148c0 .22-.035.45-.104.69-.07.237-.157.455-.262.652-.105.197-.186.33-.24.398-.06.075-.09.117-.09.128 0 .13.046.262.138.398.092.136.245.204.457.204h.35c.225 0 .405.06.54.183.135.122.202.304.202.547v1.63c0 .243-.067.425-.2.547-.134.123-.314.184-.54.184h-.35c-.356 0-.6-.176-.734-.53a18.96 18.96 0 0 0-.367-1.128c-.058-.173-.14-.316-.245-.43a9.65 9.65 0 0 0-.913.614c-.28.228-.52.483-.714.767a3.43 3.43 0 0 0-.477 1.023c-.12.397-.176.916-.176 1.56v.03c0 .08 0 .15.014.22a.24.24 0 0 0 .033.087.43.43 0 0 0 .058.06l.012.01c.23.163.532.245.906.245.384 0 .703-.085.957-.256a.784.784 0 0 0 .36-.344c.09-.172.16-.354.207-.547.048-.193.083-.37.104-.527.022-.158.033-.237.033-.238 0-.15.056-.23.168-.23h1.014c.075 0 .14.025.193.075.054.05.08.11.08.185v.224c0 .835-.195 1.555-.587 2.158-.39.604-.953 1.075-1.683 1.413-.367.168-.778.296-1.233.384-.456.087-.908.13-1.356.13-1.273 0-2.223-.304-2.85-.91-.624-.605-.936-1.403-.936-2.393v-2.566c0-1.038.314-1.857.94-2.457.627-.6 1.55-.9 2.77-.9.363 0 .697.028 1 .086.304.058.55.125.745.202a1.84 1.84 0 0 1 .678-.656c.305-.16.698-.24 1.183-.24h.366c.225 0 .405.06.54.183.135.122.202.304.202.547v1.63c0 .243-.067.425-.2.547-.134.122-.314.183-.54.183h-.366c-.33 0-.582-.077-.754-.23-.172-.153-.258-.35-.258-.59V9.59l-.7.176c.1.06.155.138.165.233.01.095.016.203.016.323v5.436z" />
                </svg>
              </div>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.testimonialFooter}>
                <img src={testimonial.image} alt={testimonial.name} className={styles.testimonialImage} />
                <div className={styles.testimonialInfo}>
                  <h4 className={styles.testimonialName}>{testimonial.name}</h4>
                  <p className={styles.testimonialPosition}>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.cta}>
          <p>We are always glad to hear from our clients.</p>
          <Link to="/share-testimonial" className={styles.ctaButton}>
            Share your testimonial
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;