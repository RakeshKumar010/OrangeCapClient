import { useEffect } from "react";

const AboutSecText = () => {
  return (
    <div
      className="order-1 lg:order-2"
      data-aos="fade-left"
      data-aos-delay="200"
    >
      <div className="text-left">
        <span className="mb-2 block font-secondary text-[28px] md:text-[40px] font-bold uppercase leading-[1.5] tracking-[4px] text-logoColor  ">
          About us
        </span>
        <h2 className="font-secondary md:text-[30px] text-[20px] font-[700] md:leading-[60px]   text-gray-700  ">
          The Digital Key to Business Success
        </h2>
        <p className="mt-5 leading-[30px] text-gray-700">
          In today’s digital-first world, Orange Cap Media Private Limited is
          redefining how brands establish their online presence. By utilizing
          the latest technology, we craft impactful web experiences and enhance
          visibility where it matters most.
        </p>
      </div>
      <ul
        aria-label="about us point"
        className="mt-10 grid max-w-[560px] gap-1 gap-x-20 sm:grid-cols-2 md:gap-2"
      >
        {[
          "A Strong Digital Identity",
          "Brand Visibility & Awareness",
          "Engaging Content & Storytelling",
          "Engaging Content & Storytelling",
          "Data-Driven Decision Making",
          "Consistent Online Reputation",
          "Scalable Marketing Strategies",
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-3 lg:gap-4">
            <span className="text-lg text-logoColor">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
              </svg>
            </span>
            <span className="block font-secondary text-md font-bold leading-[1.5] text-gray-700">
              {item}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-5 leading-[30px] text-gray-700">
        At Orange Cap Media, we unlock these digital success factors for
        businesses across industries, ensuring they stay ahead in an
        ever-evolving market.
      </p>
    </div>
  );
};

export default AboutSecText;
