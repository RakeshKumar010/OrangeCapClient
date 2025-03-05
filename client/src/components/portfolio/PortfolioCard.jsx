import { Link } from "react-router-dom";

const PortfolioCard = ({ project }) => {
  return (
    <div className="aos-init aos-animate">
      <Link
        className={`group relative z-1 block aspect-[640/916] overflow-hidden rounded-lg  `}
        target={project.href ? "_blank" : ""}
        to={project.href}
      >
        <span
          className="absolute inset-0 z-[2] bg-gradient-to-b from-logoColor/0 to-logoColor transition-all duration-700 md:[transform:perspective(400px)_rotateX(90deg)_scaleY(1.0)] group-hover:md:[transform:perspective(400px)_rotateX(0deg)_scaleY(1.0)] [transform:perspective(400px)_rotateX(0deg)_scaleY(1.0)]"
          style={{ transform: "" }}
        ></span>
        <img
          alt={project.title}
          src={project.imageUrl}
          className="pointer-events-none object-cover h-full w-full  grayscale transform scale-105 transition-all duration-700 ease group-hover:scale-100"
        />
        <div className="relative z-10 flex h-full p-6 md:p-[1.875rem] flex-col">
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
  );
};

export default PortfolioCard;
