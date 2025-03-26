import HeroSection from "../HeroSection/HeroSection";
import HeroTab from "../HeroTab/HeroTab";
import ServicesCarousel from "../ServicesCarousel/ServicesCarousel";
import ServicesSection from "../ServicesSection/ServicesSection";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HeroTab />
      <ServicesSection />
      <ServicesCarousel/>
      <Testimonials/>
      
    </>
  );
};

export default Home;
