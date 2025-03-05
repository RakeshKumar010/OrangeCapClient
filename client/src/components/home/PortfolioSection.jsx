import { Link } from "react-router-dom";
import { projects } from "../../lib/data";

const PortfolioSection = () => {
  return (
    <section className=" xl:py-[7.5rem] md:py-[6.25rem] py-[3.75rem]  px-3   bg-white overflow-hidden">
      <div className="mx-auto max-w-[1762px] ">
        <div className="mx-auto max-w-[630px] b text-center mb-10 md:mb-[3.75rem]">
          <span className="mb-2 block font-secondary text-[28px] md:text-[40px] font-bold uppercase leading-[1.5] tracking-[4px] text-logoColor  ">
            Portfolio
          </span>
          <h2 className="font-secondary md:text-[30px] text-[20px] font-[700] md:leading-[60px]   text-gray-700  ">
            Where Innovation Meets IT Excellence
          </h2>
        </div>

        <div className="grid gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
          {projects.slice(0, 4).map((project, index) => (
            <div
              key={project.id}
              data-aos={index % 2 == 0 ? "fade-up" : "fade-down"}
              data-aos-delay={project.delay}
              className="aos-init aos-animate"
            >
              <Link
                target="_self"
                className={`group relative z-1 bg-bgblackColor block aspect-[640/916] overflow-hidden rounded-lg   ${
                  index % 2 == 0 ? "md:mt-[70px]" : "md:mt-[0px]"
                }`}
                to={project.href}
              >
                <span
                  className="absolute inset-0 z-[2] bg-gradient-to-b from-logoColor/0 to-logoColor transition-all duration-700 md:[transform:perspective(400px)_rotateX(90deg)_scaleY(1.0)] group-hover:md:[transform:perspective(400px)_rotateX(0deg)_scaleY(1.0)] [transform:perspective(400px)_rotateX(0deg)_scaleY(1.0)]"
                  style={{ transform: "" }}
                ></span>
                <img
                  alt={project.title}
                  src={project.imageUrl}
                  className="pointer-events-none grayscale transform scale-105 transition-all duration-700 ease group-hover:scale-100 w-full h-full object-cover"
                />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mt-auto divide-y md:opacity-0 md:transition md:duration-700 md:group-hover:opacity-100">
                    <h3 className="overflow-hidden text-md font-bold leading-[1.25] text-white md:text-lg">
                      <span className="block transition-all duration-700 ease md:transform md:-translate-y-full md:group-hover:translate-y-0">
                        {project.title}
                      </span>
                    </h3>
                    <p className="mt-[13px] overflow-hidden pt-[11px] text-white">
                      <span className="block transition-all duration-700 ease md:transform md:translate-y-full md:group-hover:translate-y-0">
                        {project.description}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
