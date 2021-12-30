

import NavigationBar from "../../components/LandingPage/Header/NavigationBar";
import HowItWorks from "../../components/LandingPage/HowItWorks/HowItWorks";
import CarListing from "../../components/LandingPage/OurdriverSection/DriverSection";
import HeroSection from "../../components/LandingPage/HeroSection/HeroSection";
import Testimonial from "../../components/LandingPage/Testimonial/Testimonial";
import Footer from "../../components/LandingPage/Footer/Footer";

const Homepage = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <HowItWorks />
      <CarListing />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Homepage;
