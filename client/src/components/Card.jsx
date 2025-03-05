 
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ id,icon, title, description, index }) => {
  return (
    <Link
      to={'/'+id}
      data-aos="fade-up"
      data-aos-delay={"200" * (index + 1)}
      className="flex items-center justify-between group  relative flex-col bg-gray-700  transition-all duration-500"
    >
      <div className=" text-white  relative   p-6 rounded-lg shadow-md ">
        <div className="flex items-center gap-5 mb-4">
          <img
            src={icon}
            alt={title}
            className="group-hover:scale-90 transition-all md:w-[60px] w-[30px] duration-500 fill-white group-hover:fill-logoColor"
          />
          <h3 className="md:text-xl text-lg font-bold mb-2">{title}</h3>
        </div>
        <p className="text-gray-400 mb-4 leading-[30px]">{description}</p>
        <button className="flex font-semibold   items-center justify-between gap-2   text-white px-7 py-4 rounded-md hover:text-logoColor transition-all duration-500">
          READ MORE <FaPlus className="text-logoColor" />
        </button>
      </div>

      <div className="absolute bottom-0 w-0 group-hover:w-full  transition-all duration-500 h-[2px] bg-logoColor"></div>
    </Link>
  );
};

export default Card;
