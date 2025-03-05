import { Link } from "react-router-dom";
import HeaderImg from "../../assets/image/headerHero.webp";

const Header = ({ title }) => {
  return (
    <section className=" py-14 mb-10  px-3  lg:px-5 2xl:px-32 relative flex min-h-[450px] items-center">
      <img
        src={HeaderImg}
        alt="header bg"
        className="w-full h-full inset-0 text-transparent absolute object-cover pointer-events-none"
      />
      <span className="absolute inset-0 bg-gradient-to-b from-black/0 to-white"></span>
      <div className=" w-full">
        <div className="relative z-[4] flex flex-wrap items-center justify-between gap-x-24 gap-y-8  lg:pt-[137px]">
          <h1 className="font-secondary text-[32px] font-[700] leading-[60px] lg:w-1/2">
            {title}
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="inline-flex items-center text-lg lg:text-[24px] font-[700] lg:leading-[30px] gap-5">
              <li className=" font-secondary">
                <Link
                  target="_self"
                  className="transition-colors hover:text-logoColor"
                  to="/"
                >
                  Home
                </Link>
                <span className="ml-5">/</span>
              </li>
              <li className="h3 font-secondary " aria-current="page">
                {title}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Header;
