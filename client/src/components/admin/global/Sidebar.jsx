import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiCompass } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { LuUserRoundPlus } from "react-icons/lu";
import {
  MdAddChart,
  MdOutlineAdminPanelSettings,
  MdOutlineMarkUnreadChatAlt,
  MdWorkOutline,
} from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";

import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/image/dark-logo.png";
const baseUrl = import.meta.env.VITE_APP_URL;

const Sidebar = () => {
  const navigate = useNavigate();
  const [isAdminNav, setIsAdminNav] = useState(false);

  const sections = [
    {
      title: "Main",
      items: [
        { icon: <FiCompass />, label: "Dashboard", link: "/" },
        {
          icon: <MdOutlineMarkUnreadChatAlt />,
          label: "Enquiries",
          link: "/enquiry",
        },
        {
          icon: <MdOutlineAdminPanelSettings />,
          label: "Users",
          link: "/user",
        },
      ],
    },
    {
      title: "Job Opening",
      items: [
        { icon: <MdWorkOutline />, label: "Jobs", link: "/job" },
        { icon: <FaRegFileAlt />, label: "Applications", link: "/application" },
      ],
    },

    {
      title: "Account",
      items: [
        { icon: <LuUserRoundPlus />, label: "Add User", link: "/add-user" },
        { icon: <MdAddChart />, label: "Add Job", link: "/add-job" },
        { icon: <CgProfile />, label: "My Profile", link: "/my-profile" },
      ],
    },
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user || !user._id) return alert("User not found in localStorage.");
        const response = await fetch(`${baseUrl}/single-user/${user._id}`);
        if (response.ok) {
          const result = await response.json();
          if (result.password !== user.password) {
            localStorage.removeItem("user");
            navigate("/");
          }
        } else {
          alert("Failed to fetch user data.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("An error occurred. Please try again.");
      }
    };
    fetchUserData();
  }, [navigate]);

  return (
    <>
      <div className="thin-scrollbar hidden lg:block w-96 min-h-screen bg-white text-black overflow-auto shadow-lg">
        <div className="p-7">
          <img src={Logo} alt="logo" className="w-40 mb-5" />
          {sections.map((section, index) => (
            <div key={index} className="pb-6">
              <p className="text-gray-900  uppercase mb-3">{section.title}</p>
              <div className="space-y-1">
                {section.items.map((item, idx) => (
                  <Link
                    to={"/admin" + item.link}
                    key={idx}
                    className="flex items-center py-4 px-6 rounded-lg font-medium  hover:bg-black hover:text-white transition duration-500 gap-3"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
                {index === sections.length - 1 && (
                  <button
                    onClick={() => {
                      localStorage.removeItem("user");
                      navigate("/");
                    }}
                    className="flex items-center py-4 px-6 rounded-lg font-medium  hover:bg-black hover:text-white transition duration-500 gap-3"
                  >
                    <RiLogoutCircleLine /> Logout
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="block lg:hidden mt-10 sm:mx-8 mx-3 md:mx-16">
        <button
          onClick={() => setIsAdminNav(!isAdminNav)}
          className="flex w-full items-center mb-5 gap-2 bg-white shadow-md p-5 rounded-lg  cursor-pointer"
        >
          <IoMenu className="text-lg" /> Dashboard Navigation
        </button>
        {isAdminNav && (
          <div className="bg-white shadow-md p-5 rounded-lg">
            {sections.map((section, index) => (
              <div key={index} className="pb-6">
                <p className="text-gray-500  uppercase mb-3">{section.title}</p>
                <div className="space-y-1">
                  {section.items.map((item, idx) => (
                    <Link
                      to={"/admin" + item.link}
                      key={idx}
                      className="flex items-center py-4 px-6 rounded-lg  hover:bg-black hover:text-white transition duration-500 gap-3"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                  {index === sections.length - 1 && (
                    <button
                      onClick={() => {
                        localStorage.removeItem("user");
                        navigate("/");
                      }}
                      className="flex w-full items-center py-4 px-6  rounded-lg  hover:bg-black hover:text-white transition duration-500 gap-3"
                    >
                      <RiLogoutCircleLine /> Logout
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
