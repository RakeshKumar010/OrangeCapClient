import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
const baseUrl = import.meta.env.VITE_APP_URL;

const ApplyForm = () => {
  const { jobData } = useContext(MyContext);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission
  const { pathname } = useLocation();
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();
  let jobTitle = pathname.split("/").pop();
  jobTitle = decodeURIComponent(jobTitle);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: jobTitle,
    experience: "",
    linkedin: "",
    portfolio: "",
    currentLocation: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }

    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await fetch(baseUrl + "/add-application", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (result.ok) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: jobTitle,
        experience: "",
        linkedin: "",
        portfolio: "",
        currentLocation: "",
        resume: null,
        coverLetter: "",
      });
      setIsSubmitted(true);
    }

    setTimeout(() => {
      setIsSubmitted(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-5xl w-full">
        <h1 className="text-2xl font-bold text-center mb-4">
          Apply for a Position
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Fill in your details and submit your application.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                disabled={jobTitle}
                className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full  px-4 md:px-5 py-2  text-gray-700 placeholder:text-gray-400 border  border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300  bg-gray-100 rounded-[5px] border-none"
                required
              >
                <option value={jobTitle}>{jobTitle}</option>
                {jobData &&
                  jobData.map(({ title }) => {
                    return <option value={title}>{title}</option>;
                  })}
              </select>
            </div>
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full  px-4 md:px-5 py-2  text-gray-700 placeholder:text-gray-400 border  border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300  bg-gray-100 rounded-[5px] border-none"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full  px-4 md:px-5 py-2  text-gray-700 placeholder:text-gray-400 border  border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300  bg-gray-100 rounded-[5px] border-none"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full  px-4 md:px-5 py-2  text-gray-700 placeholder:text-gray-400 border  border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300  bg-gray-100 rounded-[5px] border-none"
                placeholder="Phone"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full  px-4 md:px-5 py-2  text-gray-700 placeholder:text-gray-400 border  border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300  bg-gray-100 rounded-[5px] border-none"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full  px-4 md:px-5 py-2  text-gray-700 placeholder:text-gray-400 border  border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300  bg-gray-100 rounded-[5px] border-none"
                placeholder="Years"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full  px-4 md:px-5 py-2  text-gray-700 placeholder:text-gray-400 border  border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300  bg-gray-100 rounded-[5px] border-none"
                placeholder="LinkedIn URL"
              />
            </div>
            <div>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full  px-4 md:px-5 py-2  text-gray-700 placeholder:text-gray-400 border  border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300  bg-gray-100 rounded-[5px] border-none"
                placeholder="Portfolio URL"
              />
            </div>
            <div>
              <input
                type="text"
                name="currentLocation"
                value={formData.currentLocation}
                onChange={handleChange}
                className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full  px-4 md:px-5 py-2  text-gray-700 placeholder:text-gray-400 border  border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300  bg-gray-100 rounded-[5px] border-none"
                placeholder="City, Country"
              />
            </div>
          </div>

          <div className="relative w-full">
            <label className="flex flex-col items-center justify-center min-h-[3.75rem] w-full px-5 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 transition-all duration-300">
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                className="hidden"
              />
              <span className="text-gray-600">
                {fileName ? `📄 ${fileName}` : "📁 Upload Resume (PDF, DOCX)"}
              </span>
            </label>
          </div>

          <div>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              className="flex items-center w-full  px-4 md:px-5 py-2  text-gray-700 placeholder:text-gray-400 border  border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 resize-none  bg-gray-100 rounded-[5px] border-none min-h-[140px] pt-4 md:min-h-[130px]"
              placeholder="Why we should hire you..."
            ></textarea>
          </div>
          <div className="relative">
            <div
              className={`text-logoColor absolute text-nowrap transition-all duration-500 right-1/2 translate-x-1/2  -top-8  text-lg font-bold ${
                isSubmitted ? "black" : "hidden"
              }`}
            >
              Enquiry Submitted Successfully!
            </div>
            <button
              type="submit"
              className="relative w-full  z-[2] text-white  overflow-hidden w-f text-base leading-[1.1] font-bold font-secondary tracking-wide uppercase [transition:all_0.3s_linear] inline-flex items-center justify-center gap-3 md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-7 py-2 md:py-3 transition-colors ease-in-out ring-offset-logoColor focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-logoColor after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:bg-white/[.1] after:-z-1 after:[transition:all_.3s_ease-in-out] hover:text-white hover:after:w-full hover:after:left-0 rounded-[5px] "
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
