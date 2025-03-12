import { Link } from "react-router-dom";
import Logo from "../../assets/image/dark-logo.png";

const NavSideBar = ({ setIsNavOpen, isNavOpen }) => {
  return (
    <div
      className={`lg:hidden  `}
      onClick={() => {
        setIsNavOpen(false);
      }}
    >
      <div
        className={`fixed inset-0 ${
          isNavOpen ? "-translate-x-0" : "-translate-x-full"
        } z-[111]  bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`}
      ></div>
      <div
        className={`fixed gap-4 shadow-lg transition-all duration-500  ${
          isNavOpen ? "-translate-x-0" : "-translate-x-full"
        } ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm z-[444] !max-w-[300px] border-none   p-0  bg-black`}
      >
        <div
          className="relative w-full overflow-hidden"
          style={{
            position: "relative",
            "--radix-scroll-area-corner-width": "0px",
            "--radix-scroll-area-corner-height": "0px",
          }}
        >
          <style>
            {`
        [data-radix-scroll-area-viewport] {
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }
        [data-radix-scroll-area-viewport]::-webkit-scrollbar {
          display: none;
        }
      `}
          </style>
          <div
            data-radix-scroll-area-viewport
            className="w-full rounded-[inherit] h-[100vh]"
            style={{ overflow: "hidden scroll" }}
          >
            <div style={{ minWidth: "100%", display: "table" }}>
              <div className="grid gap-8">
                <div className="sticky top-0 z-10 flex items-center justify-between  px-5 py-3 shadow-sm backdrop-blur-sm bg-black/90">
                  <Link target="_self" to="/">
                    <img src={Logo} className="w-32" alt="sidebar-logo" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setIsNavOpen(false);
                    }}
                    className="data-[state=open]:bg-secondary rounded-sm ring-offset-0 transition-colors  focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:pointer-events-none text-white hover:text-logoColor"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                    <span className="sr-only">Close</span>
                  </button>
                </div>
                <div className="grid w-full" data-orientation="vertical">
                  {/* Navigation Links */}
                  <div
                    data-state="closed"
                    data-orientation="vertical"
                    className=" "
                  >
                    <Link
                      to={"/"}
                      className="flex-1 justify-between transition-all min-h-[3rem] inline-flex items-center border-gray-200/50 w-full gap-4 rounded-none border-b-0 px-5 text-left text-base 
                      text-white font-bold no-underline hover:no-underline border-t focus:text-logoColor active:text-logoColor [&[data-state='open']_.accordion-icon]:-rotate-180   [&[data-state='open']]:text-white [&[data-state='open']]:bg-logoColor"
                    >
                      Home
                    </Link>
                    <Link
                      to={"/about"}
                      className="flex-1 justify-between transition-all min-h-[3rem] inline-flex items-center border-gray-200/50 w-full gap-4 rounded-none border-b-0 px-5 text-left text-base 
                      text-white font-bold no-underline hover:no-underline border-t focus:text-logoColor active:text-logoColor [&[data-state='open']_.accordion-icon]:-rotate-180   [&[data-state='open']]:text-white [&[data-state='open']]:bg-logoColor"
                    >
                      About
                    </Link>
                    <Link
                      to={"/services"}
                      className="flex-1 justify-between transition-all min-h-[3rem] inline-flex items-center border-gray-200/50 w-full gap-4 rounded-none border-b-0 px-5 text-left text-base 
                      text-white font-bold no-underline hover:no-underline border-t focus:text-logoColor active:text-logoColor [&[data-state='open']_.accordion-icon]:-rotate-180   [&[data-state='open']]:text-white [&[data-state='open']]:bg-logoColor"
                    >
                      Service
                    </Link>
                    <Link
                      to={"/projects"}
                      className="flex-1 justify-between transition-all min-h-[3rem] inline-flex items-center border-gray-200/50 w-full gap-4 rounded-none border-b-0 px-5 text-left text-base 
                      text-white font-bold no-underline hover:no-underline border-t focus:text-logoColor active:text-logoColor [&[data-state='open']_.accordion-icon]:-rotate-180   [&[data-state='open']]:text-white [&[data-state='open']]:bg-logoColor"
                    >
                      Project
                    </Link>
                    <Link
                      to={"/career"}
                      className="flex-1 justify-between transition-all min-h-[3rem] inline-flex items-center border-gray-200/50 w-full gap-4 rounded-none border-b-0 px-5 text-left text-base 
                      text-white font-bold no-underline hover:no-underline border-t focus:text-logoColor active:text-logoColor [&[data-state='open']_.accordion-icon]:-rotate-180   [&[data-state='open']]:text-white [&[data-state='open']]:bg-logoColor"
                    >
                      Career
                    </Link>
                    <Link
                      to={"/contact"}
                      className="flex-1 justify-between transition-all min-h-[3rem] inline-flex items-center border-gray-200/50 w-full gap-4 rounded-none border-b-0 px-5 text-left text-base 
                      text-white font-bold no-underline hover:no-underline border-t focus:text-logoColor active:text-logoColor [&[data-state='open']_.accordion-icon]:-rotate-180   [&[data-state='open']]:text-white [&[data-state='open']]:bg-logoColor"
                    >
                      Contact
                    </Link>

                    <div
                      data-state="closed"
                      id="radix-:r1:"
                      hidden
                      role="region"
                      aria-labelledby="radix-:r0:"
                      data-orientation="vertical"
                      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                      style={{
                        "--radix-accordion-content-height":
                          "var(--radix-collapsible-content-height)",
                        "--radix-accordion-content-width":
                          "var(--radix-collapsible-content-width)",
                      }}
                    ></div>
                  </div>
                  {/* Repeat similar structure for other navigation links like About, Service, Project, Blog, Pages, Contact */}
                </div>
                <div className="px-5">
                  <h3 className="relative mb-[30px] pb-[0px] font-secondary text-[1.25rem] font-bold uppercase text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[32px] after:bg-white">
                    CONTACT INFO
                  </h3>
                  <ul aria-label="addresses" className="grid gap-2">
                    <li className="flex gap-5">
                      <span className="text-logoColor flex-none leading-none self-start relative top-2">
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
                      <Link
                        to="tel:+917030209000"
                        className="transition-colors text-white duration-300 hover:text-logoColor"
                      >
                        +91 7030209000
                      </Link>
                    </li>
                    <li className="flex gap-5">
                      <span className="text-logoColor flex-none leading-none self-start relative top-2">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                        </svg>
                      </span>
                      <Link
                        to="mailto:info@orangecap.media"
                        className="transition-colors text-white duration-300 hover:text-logoColor/10"
                      >
                        info@orangecap.media
                      </Link>
                    </li>
                    <li className="flex gap-5">
                      <span className="text-logoColor flex-none leading-none self-start relative top-2">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 384 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                        </svg>
                      </span>
                      <address className="transition-colors text-white duration-300 hover:text-logoColor/10 not-italic">
                        G1 & G2, Solus Complex, Marunji, Pune, 411057
                      </address>
                    </li>
                  </ul>
                  <nav aria-label="social links">
                    <ul className="mt-8 inline-flex items-center gap-2.5 pb-10">
                      <li>
                        <Link
                          target="_blank"
                          className="text-base/[1] transition-all duration-350 hover:-translate-y-1 w-[36px] h-[36px] rounded-full grid place-items-center bg-accent-700 hover:bg-logoColor text-white"
                          to="https://www.facebook.com/"
                        >
                          <span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 320 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                            </svg>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          className="text-base/[1] transition-all duration-350 hover:-translate-y-1 w-[36px] h-[36px] rounded-full grid place-items-center bg-accent-700 hover:bg-logoColor text-white"
                          to="https://www.linkedin.com/"
                        >
                          <span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 448 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                            </svg>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          className="text-base/[1] transition-all duration-350 hover:-translate-y-1 w-[36px] h-[36px] rounded-full grid place-items-center bg-accent-700 hover:bg-logoColor text-white"
                          to="https://www.linkedin.com/"
                        >
                          <span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                            </svg>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          className="text-base/[1] transition-all duration-350 hover:-translate-y-1 w-[36px] h-[36px] rounded-full grid place-items-center bg-accent-700 hover:bg-logoColor text-white"
                          to="https://www.linkedin.com/"
                        >
                          <span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 448 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                            </svg>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSideBar;
