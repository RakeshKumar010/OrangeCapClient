
import Img1 from "../../assets/image/service/service-img-1.webp";
import Img2 from "../../assets/image/service/service-img-2.webp";
import Img3 from "../../assets/image/service/service-img-3.webp";

const ServiceContant = ({ serviceDetails }) => {
  return (
    <div className="grid gap-6">
      <div className="relative mb-5 overflow-hidden rounded-[5px]">
        <img
          src={Img1}
          style={{ color: "transparent" }}
          className="md:w-[850px] w-full md:h-[512px]"
          alt="service image main"
        />
        <span className="absolute left-30px top-30px rounded-[0_8px_30px_8px] bg-white p-2.5 text-logoColor">
          <svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG Paths here */}
          </svg>
        </span>
      </div>
      
      <p  >{serviceDetails && serviceDetails.paragraphs}</p>

    
      <div className="my-10 grid items-center gap-8 md:grid-cols-2">
        <img
          src={Img2}
          alt="service image 2"
          className="md:w-[640px] h-full object-cover  "
          style={{ color: "transparent" }}
        />

        <div className="grid gap-4">
          {serviceDetails && serviceDetails.features.map((feature, index) => (
            <div key={index} className="grid gap-3 ">
              <div className="flex items-center gap-4">
                <span className="flex-none text-base/[1] text-logoColor">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                </span>
                <h3 className="flex-1 text-md font-bold text-gray-700">
                  {feature.title}
                </h3>
              </div>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <p>{serviceDetails && serviceDetails.description}</p>
      <div className="mt-2.5 grid grid-cols-1 md:grid-cols-[1fr_260px] gap-6">
      <div className="grid items-baseline gap-6 lg:gap-9">
          {serviceDetails && serviceDetails.additionalContent.map((detail, index) => (
            <div key={index}>
              <h3 className="text-md font-bold text-gray-700">{detail.title}</h3>
              <p>{detail.description}</p>
            </div>
          ))}
        </div>

        <img
          src={Img3}
          className="rounded-[5px] md:w-[640px] "
          alt="service image 2"
          style={{ color: "transparent" }}
        />
      </div>
    </div>
  );
};

export default ServiceContant;
