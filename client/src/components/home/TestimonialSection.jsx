 
import { useState } from "react";
import { TestimonialData } from "../../lib/data";


const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index) => {
    setActiveIndex(index);
    // console.log(index);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const nextTestimonial = () => {
    if (TestimonialData.length / 2 == activeIndex + 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) =>
        prev < TestimonialData.length - 1 ? prev + 1 : prev
      );
    }
  };
  const nextTestimonialRes = () => {
    if (TestimonialData.length == activeIndex + 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) =>
        prev < TestimonialData.length - 1 ? prev + 1 : prev
      );
    }
  };
  return (
    <section className=" py-14  lg:px-5 px-4 2xl:px-32 bg-white text-gray-400">
      <div className="w-full">
        <div className="mb-10 mr-[30px] max-w-[680px] md:mb-[3.75rem] md:pr-[140px]">
          <div className="text-left">
            <span className="mb-2 block font-secondary text-[28px] md:text-[40px] font-bold uppercase leading-[1.5] tracking-[4px] text-logoColor  ">
              Testimonial
            </span>
            <h2 className="font-secondary md:text-[30px] text-[20px] font-[700] md:leading-[60px]   text-gray-700  ">
              Your IT Partner for a Dynamic Future
            </h2>
          </div>
        </div>
        <div className="relative">
          <div className="relative flex flex-col">
            <div
              className="flex justify-start w-full  gap-1 md:gap-7 transition-transform duration-500"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {TestimonialData.map(
                ({ name, role, image, rating, review }, index) => (
                  <div
                    key={index}
                    className="md:min-w-[40vw] lg:min-w-[590px] min-w-full  !overflow-visible cursor-pointer"
                    onClick={() => handleClick(index)}
                    // style={{ width: "603.4px"}}
                  >
                    <div className="h-full rounded-[5px] p-6 transition-transform duration-350 hover:[transform:translateY(-.5rem)] bg-gray-700 sm:p-[50px]">
                      <div className="flex flex-col gap-12 lg:flex-row md:gap-5">
                        <div className="relative md:max-w-max w-full flex-none">
                          <img
                            src={image}
                            alt={name}
                            className="md:w-[180px] w-full h-[180px] rounded-[5px] object-top object-cover mix-blend-luminosity"
                            style={{ color: "transparent" }}
                          />
                          <span className="absolute left-1/2 grid h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-logoColor/20 bg-logoColor text-lg/[1] text-white">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 448 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-md font-bold leading-[1.25] text-white md:text-lg">
                            {name}
                          </h3>
                          <p className="mt-1">{role}</p>
                          <div className="mt-2 min-h-[[30px]] text-logoColor">
                            <div className="flex gap-1">
                              {rating.map((value, i) => (
                                <span key={i}>{value}</span>
                              ))}
                            </div>
                          </div>
                          <p className="mt-5 text-gray-300  leading-[30px]">
                            {review}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="flex flex-wrap mt-2 gap-5 max-md:order-1 max-md:mb-8 md:absolute z-10 md:right-0 md:top-[-136px] justify-center">
              <div
                onClick={prevTestimonial}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full text-[1rem] transition-colors md:h-[60px] md:w-[60px] cursor-pointer opacity-90 bg-logoColor/10 text-logoColor hover:text-white hover:bg-logoColor"
              >
                ❮
              </div>
              <div
                onClick={nextTestimonial}
                className="md:inline-flex hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full text-[1rem] transition-colors md:h-[60px] md:w-[60px] bg-logoColor/10 text-logoColor hover:text-white hover:bg-logoColor"
              >
                ❯
              </div>
              <div
                onClick={nextTestimonialRes}
                className=" md:hidden inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-[1rem] transition-colors md:h-[60px] md:w-[60px] bg-logoColor/10 text-logoColor hover:text-white hover:bg-logoColor"
              >
                ❯
              </div>
            </div>
          </div>
          <div className="relative mt-10 h-1.5 md:max-w-[300px] max-w-full overflow-hidden rounded-[5px] bg-accent-700 md:mx-auto md:h-2.5 lg:mt-20">
            <span
              className="absolute block md:hidden inset-0 z-[1] origin-left rounded-[inherit] bg-logoColor transition-[width] duration-500"
              style={{
                width: `${((activeIndex + 1) / TestimonialData.length) * 100}%`,
              }}
            ></span>
            <span
              className="absolute md:block hidden inset-0 z-[1] origin-left rounded-[inherit] bg-logoColor transition-[width] duration-500"
              style={{
                width: `${
                  ((activeIndex + 1) / (TestimonialData.length / 2)) * 100
                }%`,
              }}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
