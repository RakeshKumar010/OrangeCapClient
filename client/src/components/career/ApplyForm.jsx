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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                disabled={jobTitle}
                className="flex items-center min-h-[3rem] md:min-h-[3.5rem] w-full px-4 py-2 text-gray-700 placeholder:text-gray-400 border border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 bg-gray-100 rounded-md"
                required
              >
                <option value={jobTitle}>{jobTitle}</option>
                {jobData &&
                  jobData.map(({ title }) => (
                    <option value={title}>{title}</option>
                  ))}
              </select>
            </div>
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="flex items-center min-h-[3rem] md:min-h-[3.5rem] w-full px-4 py-2 text-gray-700 placeholder:text-gray-400 border border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 bg-gray-100 rounded-md"
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
                className="flex items-center min-h-[3rem] md:min-h-[3.5rem] w-full px-4 py-2 text-gray-700 placeholder:text-gray-400 border border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 bg-gray-100 rounded-md"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex items-center min-h-[3rem] md:min-h-[3.5rem] w-full px-4 py-2 text-gray-700 placeholder:text-gray-400 border border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 bg-gray-100 rounded-md"
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
                className="flex items-center min-h-[3rem] md:min-h-[3.5rem] w-full px-4 py-2 text-gray-700 placeholder:text-gray-400 border border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 bg-gray-100 rounded-md"
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
                className="flex items-center min-h-[3rem] md:min-h-[3.5rem] w-full px-4 py-2 text-gray-700 placeholder:text-gray-400 border border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 bg-gray-100 rounded-md"
                placeholder="Years"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="flex items-center min-h-[3rem] md:min-h-[3.5rem] w-full px-4 py-2 text-gray-700 placeholder:text-gray-400 border border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 bg-gray-100 rounded-md"
                placeholder="LinkedIn URL"
              />
            </div>
            <div>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                className="flex items-center min-h-[3rem] md:min-h-[3.5rem] w-full px-4 py-2 text-gray-700 placeholder:text-gray-400 border border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 bg-gray-100 rounded-md"
                placeholder="Portfolio URL"
              />
            </div>
            <div>
              <input
                type="text"
                name="currentLocation"
                value={formData.currentLocation}
                onChange={handleChange}
                className="flex items-center min-h-[3rem] md:min-h-[3.5rem] w-full px-4 py-2 text-gray-700 placeholder:text-gray-400 border border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 bg-gray-100 rounded-md"
                placeholder="City, Country"
              />
            </div>
          </div>
          <div className="relative w-full">
            <label className="flex flex-col items-center justify-center min-h-[3rem] md:min-h-[3.5rem] w-full px-5 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 transition-all duration-300">
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
              className="flex items-center w-full px-4 py-2 text-gray-700 placeholder:text-gray-400 border border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 bg-gray-100 rounded-md resize-none min-h-[120px]"
              placeholder="Why we should hire you..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-logoColor py-3 rounded-md font-bold hover:bg-opacity-90"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
