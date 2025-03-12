import ApplyForm from "../components/career/ApplyForm";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import Navbar from "../components/global/Navbar";

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <Header title={"Apply job"} />
      <ApplyForm /> 
      <Footer />
    </>
  );
}
