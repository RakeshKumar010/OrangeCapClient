 import AboutImg1 from "../../assets/image/home/aboutsec/about-1.webp";
import AboutImg2 from "../../assets/image/home/aboutsec/about-2.webp";
import AboutImg3 from "../../assets/image/home/aboutsec/about-3.webp";
import AboutImg4 from "../../assets/image/home/aboutsec/about-4.webp";
import PatternImg from "../../assets/image/home/aboutsec/pattern-1.png";

const AboutSecImgs = () => {
  return (
    <div className="mx-auto text-center lg:order-1 order-2">
        <div className="relative mx-auto grid max-w-[580px] grid-cols-2 gap-2.5 overflow-hidden">
          <div className="relative flex justify-end overflow-hidden">
            <div
              className="relative z-[2] mt-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="absolute -left-2.5 -top-2.5 -z-1 h-full w-full rounded-tl-[60px] bg-logoColor"></span>
              <div className="relative z-[4] overflow-hidden">
                <img
                  alt="about one"
                  loading="lazy"
                  width={195}
                  height={132}
                  className="rounded-tl-[60px] object-cover object-top"
                  src={AboutImg1}
                />
              </div>
            </div>
            <img
              alt="pattern-1"
              data-aos="zoom-in"
              data-aos-delay="250"
              loading="lazy"
              width={383}
              height={246}
              className="absolute bottom-[-55%] left-[42px] z-1 block object-cover"
              src={PatternImg}
            />
          </div>

          <div className="flex overflow-hidden">
            <img
              alt="about two"
              data-aos="fade-right"
              data-aos-delay="300"
              loading="lazy"
              width={312}
              height={304}
              className="rounded-[80px_10px] object-cover"
              src={AboutImg2}
            />
          </div>

          <div className="ml-auto flex max-w-[250px] justify-end overflow-hidden">
            <img
              alt="about three"
              data-aos="fade-left"
              data-aos-delay="350"
              loading="lazy"
              width={250}
              height={265}
              className="rounded-[50px_10px] object-cover"
              src={AboutImg3}
            />
          </div>

          <div className="overflow-hidden">
            <img
              alt="about four"
              data-aos="fade-right"
              data-aos-delay="400"
              loading="lazy"
              width={250}
              height={265}
              className="rounded-10 rounded-br-[80px] object-cover"
              src={AboutImg4}
            />
          </div>

          <div className="absolute left-1/2 top-1/2 z-[4] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <div data-aos="zoom-in" data-aos-delay="450">
              <span className="grid h-[100px] w-[100px] place-items-center rounded-full border-[12px] border-white bg-logoColor text-[30px] text-white">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 27 27"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M26.8125 13.8672C26.8125 14.9922 25.875 15.9297 24.8125 15.9297H15.8125V24.9297C15.8125 25.9922 14.875 26.8672 13.8125 26.8672C12.6875 26.8672 11.8125 25.9922 11.8125 24.9297V15.9297H2.8125C1.6875 15.9297 0.8125 14.9922 0.8125 13.8672C0.8125 12.8047 1.6875 11.9297 2.8125 11.9297H11.8125V2.92969C11.8125 1.80469 12.6875 0.867188 13.8125 0.867188C14.875 0.867188 15.8125 1.80469 15.8125 2.92969V11.9297H24.8125C25.875 11.8672 26.8125 12.8047 26.8125 13.8672Z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AboutSecImgs