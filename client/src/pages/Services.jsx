import Footer from "../components/global/Footer"
import Header from "../components/global/Header"
import Navbar from "../components/global/Navbar"
import OurWorking from "../components/service/OurWorking"
import ServiceCardCon from "../components/service/ServiceCardCon"

 

const Services = () => {
  return (
    <div className="bg-[#fff]">
    <Navbar />
    <Header title={"service"} />
    <ServiceCardCon />
    <OurWorking/>
    <Footer />
  </div>
  )
}

export default Services