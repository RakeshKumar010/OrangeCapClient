import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const baseUrl = import.meta.env.VITE_APP_URL;
const JobForm = ({ action }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const id = pathname.split("/").pop();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    workMode: [],
    jobType: [],
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl =
      action === "edit" ? `${baseUrl}/edit-job/${id}` : `${baseUrl}/add-job`;

    const method = action === "edit" ? "PUT" : "POST";

    try {
      const response = await fetch(apiUrl, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: `${
            action === "edit" ? "job updated" : "job added"
          } successfully!`,
          confirmButtonColor: "#000",
          icon: "success",
          customClass: {
            confirmButton:
              "bg-black shadow-gray-600 hover:shadow-lg transition-all duration-200 py-2 px-10 mt-4 text-white rounded-md hover:scale-110",
          },
          buttonsStyling: false,
        }).then(() => {
          setFormData({
            title: "",
            description: "",
            workMode: [],
            jobType: [],
          });
          navigate("/admin/job");
        });
      } else {
        const errorData = await response.json();

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Failed to ${action === "edit" ? "update" : "add"} job: ${
            errorData.message
          }`,
          confirmButtonColor: "#000",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred",
        confirmButtonColor: "#000",
      });
    }
  };

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value] // Add value if checked
        : prev[field].filter((item) => item !== value), // Remove if unchecked
    }));
  };

  const getData = async () => {
    try {
      const response = await fetch(`${baseUrl}/single-job/${id}`);
      if (response.ok) {
        const data = await response.json();
        setFormData(data);
      } else {
        console.error("Error fetching data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (action === "edit") {
      getData();
    }
  }, [action]);
  return (
    <div className="w-full rounded-lg bg-white">
      <div className="p-8 md:mt-10">
        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            {/* Title & Description */}

            <div className="flex flex-col gap-2">
              <label
                htmlFor="title"
                className="text-[14px] font-semibold leading-[26px]"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                className="border-[1px] px-2 rounded-lg h-14 border-gray-300 text-sm py-3"
              />
            </div>

           

            {/* workMode */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-semibold leading-[26px]">
                Work Mode
              </label>
              <div className="border-[1px] rounded-lg border-gray-300 p-3 flex flex-wrap gap-10 md:h-14">
                {["Remote", "On-site", "Hybrid"].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={option}
                      checked={formData.workMode.includes(option)}
                      onChange={(e) => handleCheckboxChange(e, "workMode")}
                      className="w-5 h-5 accent-black"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Job Type */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-semibold leading-[26px]">
                Job Type
              </label>
              <div className="border-[1px] rounded-lg border-gray-300 p-3 flex flex-wrap gap-10 md:h-14">
                {[
                  "Full-time",
                  "Part-time",
                  "Contract",
                  "Freelance",
                  "Internship",
                ].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={option}
                      checked={formData.jobType.includes(option)}
                      onChange={(e) => handleCheckboxChange(e, "jobType")}
                      className="w-5 h-5 accent-black"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* Description */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="description"
                className="text-[14px] font-semibold leading-[26px]"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="border-[1px] px-2 rounded-lg min-h-20 border-gray-300 text-sm py-3"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-[15px] px-2 md:px-5 py-4 flex mt-7 items-center bg-black rounded-lg text-white"
            >
              {action === "edit" ? "Edit Job" : "Add Job"}
              <GoArrowUpRight className="text-xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
