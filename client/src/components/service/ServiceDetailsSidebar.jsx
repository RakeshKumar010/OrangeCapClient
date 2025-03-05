import { Link } from "react-router-dom";
import Bgimg from "../../assets/image/service/sidebarimg.webp";
import { ServiceData } from "../../lib/data";
import { useEffect, useState } from "react";

const ServiceDetailsSidebar = () => {
    const [searchValue, setSearchValue] = useState("");

    const filteredServices = searchValue
      ? ServiceData.filter((value) =>
          value.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      : [];

  return (
    <div  onClick={()=>{
        setSearchValue('')
    }} className="grid gap-10  2xl:gap-[60px]">
      <div className="grid gap-6 rounded-[5px]  px-10 py-[30px]  bg-gray-700">
        <h3 className="md:text-[22px] font-[700] md:leading-[30px] text-lg  text-white">
          Our Service
        </h3>
        <ul className="grid gap-3 text-gray-300" aria-label="service list">
          {ServiceData.map((value) => {
            return (
              <li key={value.id}>
                <Link
                  target="_self"
                  className="flex items-center justify-between gap-4 transition-colors duration-300 hover:text-logoColor"
                  to={"/" + value.id}
                >
                  <span className="flex-1">{value.title}</span>
                  <svg
                    width="22"
                    height="7"
                    viewBox="0 0 22 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="4.37114e-08"
                      y1="3.5"
                      x2="20"
                      y2="3.5"
                      stroke="currentColor"
                    ></line>
                    <path
                      d="M19.5 1.68487L21.2965 3.5L19.5 5.31513L19.5 1.68487Z"
                      fill="white"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="relative grid md:min-h-[410px] min-h-[350px] place-items-center overflow-hidden rounded-[5px]   p-10  bg-gray-700 after:absolute after:inset-0 after:z-1 after:bg-gray-700/95 before:absolute before:inset-0 before:z-[2] before:[background:linear-gradient(180deg,rgba(185,18,2,0.00)_0%,rgba(185,18,2,0.22)_100%)]">
        <img
          src={Bgimg}
          alt="sidebar-phone-number-box-bg"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: "0px",
            color: "transparent",
          }}
        />
        <div className="relative z-10 text-center text-white">
          <span className="inline-grid h-[68px] w-[68px] place-items-center rounded-full bg-logoColor   text-lg/[1] text-white">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
            </svg>
          </span>
          <p className="mb-1 mt-6">Need help? contact our experts</p>
          <Link
            className="font-secondary text-md font-bold transition-colors duration-300"
            to="tel:+917030209000"
          >
            +91 7030209000
          </Link>
        </div>
      </div>
      <div className="  p-10 bg-gray-700">
        <h3 className="text-[22px] font-[700] leading-[30px]  text-white">
          Search Service
        </h3>
        <span className="mb-7 mt-6 block h-0.5 w-[45px] bg-logoColor text-logoColor"></span>
        <div className="flex relative  items-center gap-4">
          <div className="relative w-full">
            <input
              placeholder="Search..."
              className="flex items-center min-h-[2.25rem] md:min-h-[2.55rem] w-full rounded-[5px] px-4 md:px-5 py-2 bg-transparent  text-white placeholder:text-body border border-solid  border-opacity-20 border-gray-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300   "
              name="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <button className="relative z-[2] text-white  overflow-hidden text-sm leading-[1.1] md:font-bold font-secondary tracking-wide uppercase [transition:all_0.3s_linear] inline-flex items-center justify-center gap-3 md:min-h-[2.55rem] min-h-[2.25rem] px-6 md:px-7 py-2 md:py-3 transition-colors ease-in-out ring-offset-logoColor focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-logoColor after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:bg-black/[.15] after:-z-1 after:[transition:all_.3s_ease-in-out] hover:text-white hover:after:w-full hover:after:left-0 rounded-[5px]">
            <span className="relative z-1" >SEARCH</span>
          </button>
          {searchValue && (
            <div className="space-y-2 absolute px-5 pb-5 top-16 w-full bg-gray-700">
              {filteredServices.length > 0 ? (
                filteredServices.map((value) => (
                  <Link
                    target="_self"
                    className="flex items-center justify-between gap-4 text-logoColor"
                    to={"/" + value.id}
                    key={value.id}
                     
                  >
                    {value.title}
                  </Link>
                ))
              ) : (
                <p className="text-gray-300">No results found</p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="relative z-1  p-10 bg-gray-700 text-gray-300">
        <p>
          At Orange Cap Media, we unlock these digital success factors for
          businesses across industries, ensuring they stay ahead in an
          ever-evolving market.
        </p>
        <span className="absolute bottom-5 right-5 -z-1">
          <svg
            width="115"
            height="82"
            viewBox="0 0 115 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[115px]"
          >
            <path
              d="M98.6016 49.1471L99.6016 49.1471L99.6016 48.1471L98.6016 48.1471L98.6016 49.1471ZM33.237 49.1471L34.237 49.1471L34.237 48.1471L33.237 48.1471L33.237 49.1471ZM113.943 51.1898C113.943 67.7392 100.608 80.8294 84.3031 80.8294L84.3031 82.8294C101.702 82.8294 115.943 68.8546 115.943 51.1898L113.943 51.1898ZM84.3031 80.8294L82.2604 80.8294L82.2604 82.8294L84.3031 82.8294L84.3031 80.8294ZM82.2604 80.8294C78.2167 80.8294 75.0898 77.7025 75.0898 73.6589L73.0898 73.6589C73.0898 78.8071 77.1122 82.8294 82.2604 82.8294L82.2604 80.8294ZM75.0898 73.6589C75.0898 69.8501 78.2369 66.4883 82.2604 66.4883L82.2604 64.4883C77.092 64.4883 73.0898 68.7863 73.0898 73.6589L75.0898 73.6589ZM82.2604 66.4883L84.3031 66.4883L84.3031 64.4883L82.2604 64.4883L82.2604 66.4883ZM84.3031 66.4883C92.5037 66.4883 99.6016 59.6688 99.6016 51.1898L97.6016 51.1898C97.6016 58.5412 91.4223 64.4883 84.3031 64.4883L84.3031 66.4883ZM99.6016 51.1898L99.6016 49.1471L97.6016 49.1471L97.6016 51.1898L99.6016 51.1898ZM98.6016 48.1471L82.2604 48.1471L82.2604 50.1471L98.6016 50.1471L98.6016 48.1471ZM82.2604 48.1471C73.6208 48.1471 66.9193 41.4456 66.9193 32.806L64.9193 32.806C64.9193 42.5502 72.5162 50.1471 82.2604 50.1471L82.2604 48.1471ZM66.9193 32.806L66.9193 16.4648L64.9193 16.4648L64.9193 32.806L66.9193 32.806ZM66.9193 16.4648C66.9193 8.07034 73.631 1.1237 82.2604 1.1237L82.2604 -0.876302C72.5061 -0.876303 64.9193 6.98621 64.9193 16.4648L66.9193 16.4648ZM82.2604 1.1237L98.6016 1.1237L98.6016 -0.876299L82.2604 -0.876302L82.2604 1.1237ZM98.6016 1.1237C106.986 1.1237 113.943 8.08057 113.943 16.4649L115.943 16.4649C115.943 6.976 108.09 -0.876297 98.6016 -0.876299L98.6016 1.1237ZM113.943 16.4649L113.943 24.6354L115.943 24.6354L115.943 16.4649L113.943 16.4649ZM113.943 24.6354L113.943 32.806L115.943 32.806L115.943 24.6354L113.943 24.6354ZM113.943 32.806L113.943 51.1898L115.943 51.1898L115.943 32.806L113.943 32.806ZM48.5781 51.1898C48.5781 67.7392 35.2434 80.8294 18.9385 80.8294L18.9385 82.8294C36.3371 82.8294 50.5781 68.8546 50.5781 51.1898L48.5781 51.1898ZM18.9385 80.8294L16.8958 80.8294L16.8958 82.8294L18.9385 82.8294L18.9385 80.8294ZM16.8958 80.8294C12.8522 80.8294 9.72524 77.7025 9.72524 73.6589L7.72524 73.6589C7.72524 78.8071 11.7476 82.8294 16.8958 82.8294L16.8958 80.8294ZM9.72524 73.6589C9.72525 69.8501 12.8723 66.4883 16.8958 66.4883L16.8958 64.4883C11.7274 64.4883 7.72525 68.7863 7.72524 73.6589L9.72524 73.6589ZM16.8958 66.4883L18.9385 66.4883L18.9385 64.4883L16.8958 64.4883L16.8958 66.4883ZM18.9385 66.4883C27.1391 66.4883 34.237 59.6688 34.237 51.1898L32.237 51.1898C32.237 58.5412 26.0577 64.4883 18.9385 64.4883L18.9385 66.4883ZM34.237 51.1898L34.237 49.1471L32.237 49.1471L32.237 51.1898L34.237 51.1898ZM33.237 48.1471L16.8958 48.1471L16.8958 50.1471L33.237 50.1471L33.237 48.1471ZM16.8958 48.1471C8.25621 48.1471 1.55468 41.4456 1.55468 32.806L-0.445323 32.806C-0.445324 42.5502 7.15164 50.1471 16.8958 50.1471L16.8958 48.1471ZM1.55468 32.806L1.55468 16.4648L-0.44532 16.4648L-0.445323 32.806L1.55468 32.806ZM1.55468 16.4648C1.55468 8.07033 8.26638 1.12369 16.8958 1.12369L16.8958 -0.876313C7.14149 -0.876315 -0.445318 6.9862 -0.44532 16.4648L1.55468 16.4648ZM16.8958 1.12369L33.237 1.12369L33.237 -0.87631L16.8958 -0.876313L16.8958 1.12369ZM33.237 1.12369C41.6213 1.12369 48.5781 8.08056 48.5781 16.4648L50.5781 16.4648C50.5781 6.97599 42.7258 -0.876309 33.237 -0.87631L33.237 1.12369ZM48.5781 16.4648L48.5781 24.6354L50.5781 24.6354L50.5781 16.4648L48.5781 16.4648ZM48.5781 24.6354L48.5781 32.806L50.5781 32.806L50.5781 24.6354L48.5781 24.6354ZM48.5781 32.806L48.5781 51.1898L50.5781 51.1898L50.5781 32.806L48.5781 32.806Z"
              className=" opacity-20 fill-white"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default ServiceDetailsSidebar;
