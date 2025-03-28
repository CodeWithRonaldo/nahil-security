import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./ServicesCarousel.module.css";
import dispatchimg from "../../assets/dispatch.jpg"

const ServicesCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const services = [
    {
      id: 1,
      title: "Dispatch Arrangement",
      description:
        "You want immediate and accurate dispatching services, and that is what we provide! Our dispatchers...",
      image: dispatchimg,
    },
    {
      id: 2,
      title: "Travelling Exhibitions",
      description:
        "Facility Inspection and Security Analysis, Guarding, and Physical Security Coordination with Government Security...",
      image: dispatchimg,
    },
    {
      id: 4,
      title: "Guarding Services",
      description:
        "Nahil Security provides guarding services for a variety of events such as high-profile occasions and...",
      image: dispatchimg,
    },
    {
      id: 5,
      title: "Guarding Services",
      description:
        "Nahil Security provides guarding services for a variety of events such as high-profile occasions and...",
      image: dispatchimg,
    },
    {
      id: 6,
      title: "Guarding Services",
      description:
        "Nahil Security provides guarding services for a variety of events such as high-profile occasions and...",
      image: dispatchimg,
    },
    {
      id: 7,
      title: "Guarding Services",
      description:
        "Nahil Security provides guarding services for a variety of events such as high-profile occasions and...",
      image: dispatchimg,
    },
  ];

  // Variants for header and carousel animations
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section ref={ref} className={styles.servicesCarouselContainer}>
      <motion.div 
        className={styles.header}
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1 variants={headerVariants}>
          Providing Top-Notch <br /> Security Services
        </motion.h1>
        <motion.p variants={headerVariants}>
          We provide security services for banking, construction, events, residential areas,
          IT industries, housekeeping, schools, and commercial sectors.
        </motion.p>
        <motion.div 
          className={styles.headerLinks}
          variants={headerVariants}
        >
          <a href="#">All Security Services</a>
          <a href="#">Speak with Our Experts Today</a>
        </motion.div>
      </motion.div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{dragable:true}}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.servicesCarousel}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id} className={styles.serviceCard}>
            <motion.div
              variants={slideVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className={styles.serviceImage} 
              />
              <div className={styles.serviceContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServicesCarousel;