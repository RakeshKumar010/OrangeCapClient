 
import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import CounterSection from '../components/home/CounterSection'
import CTASection from '../components/home/CTASection'
import AboutUsSection from '../components/home/AboutUsSection'
import Header from '../components/global/Header'
import AboutSecVideo from '../components/about/AboutSecVideo'
import Teams from '../components/about/Teams'
import TextSlideBanner from '../components/about/TextSlideBanner'

const About = () => {
  return (
    <div className="bg-[#fff] overflow-hidden">
    <Navbar />
    <Header title={"About Us"} />
    <AboutUsSection />
    <CTASection />
    <CounterSection />
    <AboutSecVideo />
    <Teams/>
    <TextSlideBanner/>
    <Footer />
  </div>
  )
}

export default About