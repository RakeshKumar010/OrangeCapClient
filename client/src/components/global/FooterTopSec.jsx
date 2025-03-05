 
import { Link } from 'react-router-dom';
import FooterTopImg from '../../assets/image/Innovation.svg'
const FooterTopSec = () => {
  return (
    <div className="bg-logoColor rounded-t-none z-10 overflow-hidden relative rounded-xl 2xl:px-[8vw] lg:px-[8vw] 2xl:py-[6vw] lg:py-[8vw] xl:px-[4vw] px-[10vw] sm:py-[9vh] py-[7vh] mx-5 -mb-56 text-white">
      <div className="lg:w-[40%]">
         
        <h2 className="font-secondary md:text-[30px] text-[29px] font-[700]     text-gray-100  ">
        Unlock Your Business Potential with Our Tailored Solutions
                </h2>
        <p className="text-[14px] text-gray-100 leading-[27.5px] mt-2 mb-5">
          Discover customized tools and strategies designed to solve your
          biggest challenges and drive growth for your business.
        </p>
        <Link
          to={"/contact"}
          className="flex relative w-fit items-center group overflow-hidden hover:shadow-md gap-2 text-[15px] font-semibold bg-gray-800 text-white py-4 px-6 rounded-lg"
        >
          <span className="z-10">Contact us</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="z-10"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path>
          </svg>
          <div className="absolute -right-4 -left-4 top-0 bottom-0 -translate-x-full translate-y-full hidden md:block skew-x-[30deg] transition-all duration-500 group-hover:translate-y-0 group-hover:translate-x-0 bg-logoColor"></div>
        </Link>
      </div>
      <img
        src={FooterTopImg}
        alt="Home Loan Image"
        width={600} // ✅ Add width
        height={600} // ✅ Add height
        className="absolute lg:block hidden w-[600px] h-full   right-0 bottom-0"
      />
    </div>
  );
};

export default FooterTopSec;
