 
import {   useEffect, useState } from "react";
import { ServiceData } from "../lib/data";
import Navbar from "../components/global/Navbar";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import ServiceDetailsSidebar from "../components/service/ServiceDetailsSidebar"; 
import ServiceContant from "../components/service/ServiceContant";
import { useParams } from "react-router-dom";

const ServiceDetails = ( ) => {
    const [serviceDetails, setServiceDetails] = useState(null);
    const { id } = useParams();


  useEffect(() => {
    const data = ServiceData.find((value) => value.id == id);
    if (data) {
      setServiceDetails(data);
     
      
    }
  }, [id]);

  if (!serviceDetails) {
    return <p className="text-white text-center py-10">Loading...</p>;
  }

  return (
    <div className="bg-[#fff]">
      <Navbar />
  
      <Header title={serviceDetails?serviceDetails.title:"Service Details"} />
      <section className="overflow-hidden py-6 md:py-14 px-3 lg:px-5 2xl:px-32 bg-white text-gray-700">
        <div className="w-full">
          <div className="grid relative items-start gap-10 md:grid-cols-[390px_1fr] 2xl:gap-[50px]">
           <ServiceDetailsSidebar />
             <ServiceContant serviceDetails={serviceDetails} />
          </div>
        </div>
      </section> 
      <Footer />
    </div>
  );
};

export default ServiceDetails;


 