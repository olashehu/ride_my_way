

import NavigationBar from "../../components/LandingPage/Header/NavigationBar";
import HowItWorks from "../../components/LandingPage/HowItWorks/HowItWorks";
import CarListing from "../../components/LandingPage/OurdriverSection/DriverSection";
import HeroSection from "../../components/LandingPage/HeroSection/HeroSection";
import Testimonial from "../../components/LandingPage/Testimonial/Testimonial";
import NewFooter from "../../components/LandingPage/NewFooter/NewFooter";

const Homepage = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <HowItWorks />
      <CarListing />
      <Testimonial />
      <NewFooter />
    </>
  );
};

export default Homepage;
