import AboutSecImgs from "./AboutSecImgs";
import AboutSecText from "./AboutSecText";

 

const AboutUsSection = () => {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-[.92fr_1fr] 2xl:gap-20 bg-white px-3 lg:px-5 2xl:px-32 py-6">
      <AboutSecImgs />
      <AboutSecText/>
    </div>
  );
};

export default AboutUsSection;
