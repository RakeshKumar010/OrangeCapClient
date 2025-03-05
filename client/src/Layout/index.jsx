import AOS from "aos";
import "aos/dist/aos.css";

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

const Layout = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const user = localStorage.getItem("user");
    if (user) {
      setIsAdmin(true);
    }
  }, []);
 
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ServiceDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
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
            <Route path="user" element={<User />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="user/:id" element={<AddUser action={"edit"} />} />
            <Route path="my-profile" element={<MyProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Layout;
