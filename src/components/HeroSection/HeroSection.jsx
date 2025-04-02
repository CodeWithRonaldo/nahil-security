import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Shield, Truck, Diamond } from "lucide-react";
import styles from "./HeroSection.module.css";
import SecurityImg from "../../assets/secure-valuable.png";
import CargoImg from "../../assets/ship9.png";
import VaultImg from "../../assets/vault9.png";

const HeroSection = () => {
  // Slide content - organized by service categories
  const slides = [
    {
      title: "Professional Guarding Services",
      description: "Providing comprehensive security personnel solutions with highly trained officers for all your protection needs.",
      features: ["General Security Services", "Valuable Asset Protection", "Safe Keeping"],
      imageUrl: SecurityImg, 
      icon: <Shield className={styles.slideIcon} />
    },
    {
      title: "Secure Logistics & Transportation",
      description: "End-to-end secure logistics solutions ensuring safe transportation and delivery of your valuable items.",
      features: ["Dispatch Arrangement", "Express & Secured Delivery", "Consignments/Cargo Handling"],
      imageUrl: CargoImg,
      icon: <Truck className={styles.slideIcon} />
    },
    {
      title: "High-Value Item Protection",
      description: "Specialized security for diamonds, gold, and jewelry with state-of-the-art vault facilities and handling protocols.",
      features: ["Diamond, Gold & Jewelry Security", "Vault & Secure Storage", "Travelling Exhibitions"],
      imageUrl: VaultImg,
      icon: <Diamond className={styles.slideIcon} />
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.7,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div 
      className={styles.heroContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className={styles.heroSlide}
          style={{ backgroundImage: `url(${slides[currentSlide].imageUrl})` }}
        >
          <div className={styles.slideOverlay}>
            <div className={styles.contentContainer}>
              <motion.div
                className={styles.textContent}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div className={styles.companyIntro} variants={itemVariants}>
                  <h2 className={styles.companyName}>Nahil Security Company Limited</h2>
                  <p className={styles.companyTagline}>A Global Security Company with Global Reach</p>
                </motion.div>

                <motion.div className={styles.titleContainer} variants={itemVariants}>
                  <div className={styles.iconWrapper}>{slides[currentSlide].icon}</div>
                  <h1 className={styles.heroTitle}>
                    {slides[currentSlide].title}
                  </h1>
                </motion.div>

                <motion.p className={styles.heroDescription} variants={itemVariants}>
                  {slides[currentSlide].description}
                </motion.p>
              
                <motion.ul className={styles.featureList} variants={contentVariants}>
                  {slides[currentSlide].features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className={styles.featureItem}
                      variants={itemVariants}
                    >
                      <span className={styles.featureBullet}></span>
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div className={styles.ctaSection} variants={contentVariants}>
                  <motion.button className={styles.primaryButton} variants={itemVariants}>
                    View All Services <ArrowRight size={18} />
                  </motion.button>

                  <motion.button className={styles.secondaryButton} variants={itemVariants}>
                    Contact Us
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider controls */}
      <div className={styles.sliderControls}>
        <button className={styles.sliderButton} onClick={prevSlide} aria-label="Previous slide">
          <ChevronLeft size={20} />
        </button>
        <div className={styles.indicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button className={styles.sliderButton} onClick={nextSlide} aria-label="Next slide">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;