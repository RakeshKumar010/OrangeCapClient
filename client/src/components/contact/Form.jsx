import { useState } from "react";
const baseUrl = import.meta.env.VITE_APP_URL;

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await fetch(baseUrl + "/add-enquiry", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (result.ok) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitted(true); 
    }

    setTimeout(() => {
      setIsSubmitted(false);
    }, 1000);
  };

  return (
    <div className="md:w-1/2 lg:w-2/3">
      <div className="mb-[30px]">
        <div className="text-left">
          <h2 className="font-secondary text-[2rem] font-[60px] md:leading-[60px] text-gray-700 md:text-[40px]">
            Feel free to message
          </h2>
        </div>
      </div>
      <form
        className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-[30px]"
        onSubmit={handleSubmit}
      >
        {["name", "email", "phone", "subject"].map((field, index) => (
          <div key={index}>
            <div className="relative w-full">
              <input
                placeholder={`Your ${
                  field.charAt(0).toUpperCase() + field.slice(1)
                }`}
                className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full  px-4 md:px-5 py-2  text-gray-700 placeholder:text-gray-400 border  border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300  bg-gray-100 rounded-[5px] border-none"
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
              />
            </div>
          </div>
        ))}
        <div className="lg:col-span-2">
          <div className="relative w-full">
            <textarea
              placeholder="Message"
              name="message"
              className="flex items-center w-full  px-4 md:px-5 py-2  text-gray-700 placeholder:text-gray-400 border  border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 resize-none  bg-gray-100 rounded-[5px] border-none min-h-[140px] pt-4 md:min-h-[200px]"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="relative">
        <div
              className={`text-logoColor absolute text-nowrap transition-all duration-500 left-0  -top-8  text-lg font-bold ${
                isSubmitted ? "black" : "hidden"
              }`}
            >
              Enquiry Submitted Successfully!
            </div>
          <button
            className="relative z-[2] text-gray-700 overflow-hidden text-base leading-[1.1] font-bold font-secondary tracking-wide uppercase [transition:all_0.3s_linear] inline-flex items-center justify-center gap-3 md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-7 py-2 md:py-3 transition-colors ease-in-out ring-offset-logoColor focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-logoColor after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:bg-black/[.15] after:-z-1 after:[transition:all_.3s_ease-in-out] hover:hover:text-gray-700 hover:after:w-full hover:after:left-0 rounded-[5px]"
            type="submit"
          >
           
            <span className="relative z-1 text-white">SEND A MESSAGE</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
