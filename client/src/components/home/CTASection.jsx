import { useState } from "react";
import BgImg from "../../assets/image/home/patterncta.png";
const baseUrl = import.meta.env.VITE_APP_URL;

const CTASection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission
  const [formData, setFormData] = useState({
    email: "",
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
        email: "",
      });
      setIsSubmitted(true);
      
    }

    setTimeout(() => {
      setIsSubmitted(false);
    }, 1000);
  };
  return (
    <section className="py-14  px-3  lg:px-5 2xl:px-32 bg-white ">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-lg px-6 py-14 bg-gray-700">
          {/* Content Box */}
          <div className="relative z-[1] mx-auto max-w-[630px] text-center">
            <h2 className="mx-auto max-w-[490px] font-secondary  capitalize leading-[1.25] text-white  md:text-[48px] text-[29px] font-[700] md:leading-[60px]">
              Have a question? Feel Free To Ask
            </h2>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col items-center justify-center gap-2 md:mt-8 md:flex-row"
            >
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex items-center w-full min-h-[3.5rem] md:min-h-[3.75rem] rounded-lg px-4 md:px-5 py-2 bg-transparent border border-solid transition-all duration-300 border-white border-opacity-60 text-white placeholder:text-white focus:border-white focus:ring-0 focus-visible:outline-0"
                />
              </div>
              <button
                type="submit"
                className="relative md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-14 py-2 md:py-3 z-[2] text-white overflow-hidden bg-logoColor text-base leading-[1.1] font-bold font-secondary tracking-wide uppercase [transition:all_0.3s_linear] inline-flex items-center justify-center gap-3   transition-colors ease-in-out   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:-z-1 after:[transition:all_.3s_ease-in-out] hover:text-black hover:after:w-full hover:after:left-0 rounded-[5px]     after:bg-white"
              >
                <span className="relative z-[1]">Subscribe</span>
              </button>
              <div
                  className={`text-logoColor absolute text-nowrap transition-all duration-500 left-0 translate-x-1/2 -bottom-10  text-lg font-bold ${
                    isSubmitted ? "black" : "hidden"
                  }`}
                >
                  Enquiry Submitted Successfully!
                </div>
            </form>
          </div>

          {/* Background Image */}
          <img
            src={BgImg}
            alt="CTA section background pattern"
            className="pointer-events-none w-[520px] h-[316px]  absolute -right-8 bottom-0 z-1  object-cover opacity-60 animate-float-bob-x"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
