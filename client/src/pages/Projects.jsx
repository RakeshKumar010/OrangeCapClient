import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import Navbar from "../components/global/Navbar";
import TestimonialSection from "../components/home/TestimonialSection";
import CarouselComponent from "../components/projects/CarouselComponent";
import PortfolioCardCon from "../components/projects/PortfolioCardCon";

 

const Projects = () => {
  return (
    <div className="bg-[#fff] overflow-hidden">
      <Navbar />
      <Header title={"Project"} />
      <PortfolioCardCon />
      <TestimonialSection/>
      <CarouselComponent/>
      <Footer />
    </div>
  );
};

export default Projects;
