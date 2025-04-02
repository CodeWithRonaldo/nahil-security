import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./About.module.css";
import SecurityOfficer from "../../assets/security-man.png";
import StatImage1 from "../../assets/stat1.png"; 
import StatImage2 from "../../assets/stat2.png"; 
import StatImage3 from "../../assets/stat3.png"; 
import Testimonials from "../../components/Testimonials/Testimonials";
import MissionVision from "../../components/MissionVision/MissionVision";
import AboutHero from "../../components/AboutHero/AboutHero";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
<>
<AboutHero/>
<Testimonials/>
<MissionVision/>

</>
     
    
  );
};

export default About;