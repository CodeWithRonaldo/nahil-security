import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Check } from "lucide-react";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.1 });

  // Replace this with your actual Formspree form ID
  const FORMSPREE_FORM_ID = "mblgpbbe";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`https://formspree.io/f/mblgpbbe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        // Reset submission status after 5 seconds
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    // {
    //   icon: <Phone className={styles.infoIcon} />,
    //   title: "Phone Number",
    //   details: ["+1 200 00 0000", "+1 500 00 0000"],
    // },
    {
      icon: <Mail className={styles.infoIcon} />,
      title: "Email Address",
      details: ["info@nahilsecurity.com", "support@nahilsecurity.com"],
    },
    // {
    //   icon: <MapPin className={styles.infoIcon} />,
    //   title: "Office Address",
    //   details: ["123 Security Avenue", "Accra, Ghana"],
    // },
    {
      icon: <Clock className={styles.infoIcon} />,
      title: "Working Hours",
      details: ["Monday - Friday: 8am - 6pm", "Weekend: 9am - 4pm"],
    },
  ];

  return (
    <div className={styles.contactPageWrapper}>
      {/* Hero Section */}
      <div className={styles.contactHero}>
        <div className={styles.contactHeroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our team is here to help with all your security needs
          </motion.p>
        </div>
      </div>

      {/* Contact Content */}
      <div className={styles.contactContent}>
        <div className={styles.container}>
          {/* Contact Info Cards */}
          <motion.div
            className={styles.contactInfoSection}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants} className={styles.sectionTitle}>
              Contact Information
            </motion.h2>
            <motion.p variants={itemVariants} className={styles.sectionDesc}>
              Reach out to us using any of the following means
            </motion.p>

            <div className={styles.contactInfoGrid}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className={styles.infoCard}
                  variants={itemVariants}
                >
                  <div className={styles.infoIconContainer}>{info.icon}</div>
                  <h3>{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form with Formspree */}
          <motion.div
            ref={formRef}
            className={styles.contactFormContainer}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className={styles.formHeader} variants={itemVariants}>
              <h2>Send Us A Message</h2>
              <p>Fill out the form below and we'll get back to you shortly</p>
            </motion.div>

            <motion.form
              className={styles.contactForm}
              onSubmit={handleSubmit}
              variants={containerVariants}
              
              action={`https://formspree.io/f/mblgpbbe`}
              method="POST"
            >
              <div className={styles.formRow}>
                <motion.div className={styles.formGroup} variants={itemVariants}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </motion.div>

                <motion.div className={styles.formGroup} variants={itemVariants}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                  />
                </motion.div>
              </div>

              <div className={styles.formRow}>
                <motion.div className={styles.formGroup} variants={itemVariants}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </motion.div>

                <motion.div className={styles.formGroup} variants={itemVariants}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    required
                  />
                </motion.div>
              </div>

              <motion.div className={styles.formGroup} variants={itemVariants}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={6}
                  required
                ></textarea>
              </motion.div>

              {/* Formspree honeypot field to prevent spam */}
              <input type="text" name="_gotcha" style={{ display: "none" }} />

              <motion.button
                type="submit"
                className={styles.submitButton}
                variants={itemVariants}
                disabled={isSubmitting || formSubmitted}
              >
                {isSubmitting ? (
                  <span className={styles.loadingSpinner}>
                    <span className={styles.loadingDot}></span>
                    <span className={styles.loadingDot}></span>
                    <span className={styles.loadingDot}></span>
                  </span>
                ) : formSubmitted ? (
                  <>
                    <Check size={20} /> Message Sent
                  </>
                ) : (
                  <>
                    <Send size={20} /> Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className={styles.mapSection}>
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/place/Badem+09/@41.062346,28.6591638,14z/data=!4m10!1m2!2m1!1sBadem+14+villa+Bahcesehir+1+kisim+Toprak+Cikmazi+%26+Bulbul+CD+No+2+34488+Basaksehir+Istanbul+Turkiye!3m6!1s0x14caa70e68618051:0x32045b32287fe0a9!8m2!3d41.062346!4d28.6952127!15sCmNCYWRlbSAxNCB2aWxsYSBCYWhjZXNlaGlyIDEga2lzaW0gVG9wcmFrIENpa21hemkgJiBCdWxidWwgQ0QgTm8gMiAzNDQ4OCBCYXNha3NlaGlyIElzdGFuYnVsIFR1cmtpeWWSARFhcGFydG1lbnRfY29tcGxleOABAA!16s%2Fg%2F11fl0nzxyq?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nahil Security Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;