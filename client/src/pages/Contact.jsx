import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import Map from "../components/contact/Map";
import GetInTouch from "../components/contact/GetInTouch";
import Form from "../components/contact/Form";

const Contact = () => {
  return (
    <div className="bg-[#fff]">
      <Navbar />
      <Header title={"Contact Us"} />
      <section className="bg-[#fff] px-3 lg:px-5 2xl:px-32 py-6 pb-28">
        <div className="w-full">
          <div className="flex flex-col gap-[50px] md:flex-row">
            <Form />
            <GetInTouch />
          </div>
        </div>
      </section>
      <Map />
      <Footer />
    </div>
  );
};

export default Contact;
