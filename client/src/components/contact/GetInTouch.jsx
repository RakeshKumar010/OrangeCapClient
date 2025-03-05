import { Link } from "react-router-dom";

 

const GetInTouch = () => {
  return (
    <div className="md:w-1/2 lg:w-2/6 text-gray-600">
      <div className="mb-[30px]">
        <div className="text-left">
          <h2 className="font-secondary text-[2rem]  leading-[1.25] text-gray-700 md:text-[40px] md:leading-[60px] font-[700]">
            Get in touch
          </h2>
          <p className="mt-5 whitespace-pre-line">
            It’s time to choose wehit and make a wise choice for your brand. We are here to cater to everything that your brand needs. We look forward to hearing from you.
          </p>
        </div>
      </div>
      <ul aria-label="addresses" className="grid gap-5">
        <li className="flex gap-[30px]">
          <span className="w-[50px] h-[50px] relative top-1 text-md/[1] rounded-full inline-grid place-items-center text-gray-100 bg-logoColor flex-none">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
            </svg>
          </span>
          <div>
            <h3 className="text-md font-bold leading-[1.5] mb-1.5 text-gray-700">Address</h3>
            <address className="not-italic">G1 & G2, Solus Complex, Marunji, Pune, 411057</address>
          </div>
        </li>
        <li className="flex gap-[30px]">
          <span className="w-[50px] h-[50px] relative top-1 text-md/[1] rounded-full inline-grid place-items-center text-gray-100 bg-logoColor flex-none">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          </span>
          <div>
            <h3 className="text-md font-bold leading-[1.5] mb-1.5 text-gray-700">Email Address</h3>
            <Link to="mailto:info@orangecap.media">info@orangecap.media</Link>
          </div>
        </li>
        <li className="flex gap-[30px]">
          <span className="w-[50px] h-[50px] relative top-1 text-md/[1] rounded-full inline-grid place-items-center text-gray-100 bg-logoColor flex-none">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
          </span>
          <div>
            <h3 className="text-md font-bold leading-[1.5] mb-1.5 text-gray-700">Phone number</h3>
            <Link to="tel:+91 7030209000 ">+91 7030209000 </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default GetInTouch;
