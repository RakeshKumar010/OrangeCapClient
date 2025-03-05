
import Navbar from "../components/global/Navbar";
import Hero from "../components/home/Hero";
import CardsHome from "../components/home/CardsHome";
import AboutUsSection from "../components/home/AboutUsSection";
import CTASection from "../components/home/CTASection";
import PortfolioSection from "../components/home/PortfolioSection";
import CounterSection from "../components/home/CounterSection";
import TestimonialSection from "../components/home/TestimonialSection";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/global/Footer";
const Home = () => {
 
  return (
    <div className=" overflow-hidden ">
      <Navbar />
      <Hero />
      <CardsHome />
      <AboutUsSection />
      <CTASection />
      <PortfolioSection />
      <CounterSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
