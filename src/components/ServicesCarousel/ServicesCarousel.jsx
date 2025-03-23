import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./ServicesCarousel.module.css";

const ServicesCarousel = () => {
  const services = [
    {
      id: 1,
      title: "Dispatch Arrangement",
      description:
        "You want immediate and accurate dispatching services, and that is what we provide! Our dispatchers...",
      image: "dispatch-image.jpg",
    },
    {
      id: 2,
      title: "Travelling Exhibitions",
      description:
        "Facility Inspection and Security Analysis, Guarding, and Physical Security Coordination with Government Security...",
      image: "travelling-image.jpg",
    },
    {
      id: 3,
      title: "Guarding Services",
      description:
        "Nahil Security provides guarding services for a variety of events such as high-profile occasions and...",
      image: "guarding-image.jpg",
    },
  ];

  return (
    <section className={styles.servicesCarouselContainer}>
      <div className={styles.header}>
        <h1>Providing Top-Notch <br /> Security Services</h1>
        <p>
          We provide security services for banking, construction, events, residential areas,
          IT industries, housekeeping, schools, and commercial sectors.
        </p>
        <div className={styles.headerLinks}>
          <a href="#">All Security Services</a>
          <a href="#">Speak with Our Experts Today</a>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.servicesCarousel}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id} className={styles.serviceCard}>
            <img src={service.image} alt={service.title} className={styles.serviceImage} />
            <div className={styles.serviceContent}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className={styles.serviceButton}>+</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServicesCarousel;
