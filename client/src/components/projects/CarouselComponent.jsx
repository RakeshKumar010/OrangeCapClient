import { useEffect, useRef } from "react";
import Img1 from "../../assets/image/Certified/certificate1.jpg";
import Img2 from "../../assets/image/Certified/certificate2.jpg";
import Img3 from "../../assets/image/Certified/certificate3.jpg";
import Img4 from "../../assets/image/Certified/certificate4.jpg";
import Img5 from "../../assets/image/Certified/certificate5.jpg";
 

const images = [
  {
    src: Img1,
    alt: "Clensta-Web-300x149",
  },
  {
    src: Img2,
    alt: "1-300x150",
  },
  {
    src: Img3,
    alt: "3-300x150",
  },
  {
    src: Img4,
    alt: "4-300x150",
  },
  {
    src: Img5,
    alt: "2-300x150",
  },
];

const CarouselComponent = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 200;
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        ) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16  bg-white text-gray-700">
      <div className="container mx-auto text-center mb-8">
        <span className="mb-2 block font-secondary text-[28px] md:text-[40px] font-bold uppercase leading-[1.5] tracking-[4px] text-logoColor  ">
          Certificate
        </span>
        <h2 className="font-secondary md:text-[30px] text-[20px] font-[700] md:leading-[60px]   text-gray-700  ">
          We are certified by
        </h2>
      </div>
      <div className="overflow-hidden w-full  flex justify-center">
        <div className="flex gap-8 flex-wrap   justify-center overflow-x-auto no-scrollbar w-full p-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="md:w-[250px] w-full shadow-md shadow-gray-700 rounded-lg overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
