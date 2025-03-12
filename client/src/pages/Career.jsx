import React from "react";
import Navbar from "../components/global/Navbar";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import CareersPage from "../components/career/CareersPage";

const Career = () => {
  return  <div className="bg-[#fff]">
  <Navbar />
  <Header title={"Career"} />
  <CareersPage/>
  <Footer />
</div>
};

export default Career;
