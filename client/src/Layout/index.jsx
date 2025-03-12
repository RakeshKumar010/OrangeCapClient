import AOS from "aos";
import "aos/dist/aos.css";
import Cookies from "js-cookie";

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import AdminLogin from "../pages/AdminLogin";
import RedirectPage from "../pages/RedirectPage";
import Admin from "../pages/Admin";
import Dashboard from "../components/admin/pages/Dashboard";
import ServiceDetails from "../pages/ServiceDetails";
import ScrollToTop from "../components/global/ScrollToTop";
import Enquiry from "../components/admin/pages/Enquiry";
import MyProfile from "../components/admin/pages/MyProfile";
import User from "../components/admin/pages/User";
import AddUser from "../components/admin/pages/AddUser";
import PageTracker from "../components/global/PageTracker";
import CookieConsent from "../components/global/CookieConsent";
import Career from "../pages/Career";
import ApplyPage from "../pages/ApplyPage";
import AddJob from "../components/admin/pages/AddJob";
import Job from "../components/admin/pages/Job";
import JobApplication from "../components/admin/pages/JobApplication";

const Layout = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const user = localStorage.getItem("user");
    if (user) {
      setIsAdmin(true);
    }
    const consent = Cookies.get("cookieConsent"); // Check if user has already accepted/declined
    if (!consent) {
      setTimeout(() => {
        setShowPopup(true);
      }, 3000);
    }
  }, []);
 
  return (
    <>
      <BrowserRouter>
      <PageTracker />
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ServiceDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/apply/:title" element={<ApplyPage />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/admin-login"
            element={<AdminLogin setIsAdmin={setIsAdmin} />}
          />
          <Route
            path="/admin"
            element={
              isAdmin ? (
                <Admin />
              ) : (
                <RedirectPage title={"Admin"} router={"/admin-login"} />
              )
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="enquiry" element={<Enquiry />} />
            <Route path="application" element={<JobApplication />} />
            <Route path="user" element={<User />} />
            <Route path="job" element={<Job />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="add-job" element={<AddJob />} />
            <Route path="job/:id" element={<AddJob action={"edit"} />} />
            <Route path="user/:id" element={<AddUser action={"edit"} />} />
            <Route path="my-profile" element={<MyProfile />} />
          </Route>
        </Routes>
        {showPopup?<CookieConsent showPopup={showPopup} setShowPopup={setShowPopup}/>:null}
      </BrowserRouter>
    </>
  );
};

export default Layout;
