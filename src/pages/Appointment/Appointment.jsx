import React, { useState } from "react";
import styles from "./Appointment.module.css";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  FileText,
  MessageSquare,
} from "lucide-react";

const Appointment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ message: "", type: "" });
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    notes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: "", type: "" });

    // Replace this URL with your actual Formspree form URL
    // Create a new form at https://formspree.io/forms/new
    const formspreeEndpoint = "https://formspree.io/f/mvgkbwon";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          notes: formData.notes,
          appointment_date: selectedDate,
          appointment_time: selectedTime,
        }),
      });

      if (response.ok) {
        // Success
        setFormStatus({
          message:
            "Your consultation request has been sent! We will contact you shortly.",
          type: "success",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          notes: "",
        });
        setSelectedDate("");
        setSelectedTime("");
      } else {
        // Error
        setFormStatus({
          message:
            "There was a problem submitting your request. Please try again or contact us directly.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({
        message:
          "There was a problem submitting your request. Please try again or contact us directly.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Available time slots
  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
  ];

  // Services offered
  const services = [
    "Security Assessment",
    "Vulnerability Testing",
    "Security System Installation",
    "Consultation",
    "Monitoring Setup",
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
            <div className={styles.logoIcon}>
              <FileText size={24} />
            </div>
            <span>Nahil Security Company</span>
          </div>
          <h1 className={styles.heroTitle}>Need Consultation?</h1>
          <p className={styles.heroText}>
            At Nahil Security Company Limited we have the best experts and
            experienced professionals ready to guide you through and provide you
            answers to all your questions.
          </p>
        </div>
        <div className={styles.heroFormContainer}>
          <h2 className={styles.heroFormTitle}>
            Get notified of our latest offers:
          </h2>
          <div className={styles.emailSignup}>
            <input
              type="email"
              placeholder="Your email address"
              className={styles.emailInput}
            />
            <button className={styles.signupButton}>Sign up</button>
          </div>
        </div>
      </div>

      {/* Appointment Form Section */}
      <div className={styles.appointmentContainer}>
        <header className={styles.header}>
          <h2>Book Your Security Consultation</h2>
          <p>Schedule a time with our security experts</p>
        </header>

        {formStatus.message && (
          <div className={`${styles.statusMessage} ${styles[formStatus.type]}`}>
            {formStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>
              <Calendar className={styles.icon} size={20} />
              <span>Select Date & Time</span>
            </h3>

            <div className={styles.dateTimeContainer}>
              <div className={styles.formGroup}>
                <label htmlFor="appointment_date">Date</label>
                <div className={styles.inputWithIcon}>
                  <Calendar size={18} className={styles.inputIcon} />
                  <input
                    type="date"
                    id="appointment_date"
                    name="appointment_date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className={styles.input}
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="appointment_time">Time</label>
                <div className={styles.inputWithIcon}>
                  <Clock size={18} className={styles.inputIcon} />
                  <select
                    id="appointment_time"
                    name="appointment_time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className={styles.select}
                    required
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>
              <User className={styles.icon} size={20} />
              <span>Your Information</span>
            </h3>

            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <div className={styles.inputWithIcon}>
                <User size={18} className={styles.inputIcon} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <div className={styles.inputWithIcon}>
                  <Mail size={18} className={styles.inputIcon} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <div className={styles.inputWithIcon}>
                  <Phone size={18} className={styles.inputIcon} />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="service">Service</label>
              <div className={styles.inputWithIcon}>
                <FileText size={18} className={styles.inputIcon} />
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={styles.select}
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="notes">Notes (Optional)</label>
              <div className={styles.inputWithIcon}>
                <MessageSquare size={18} className={styles.inputIcon} />
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  rows="3"
                  placeholder="Please include any specific security concerns or questions"
                />
              </div>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Book Consultation"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
