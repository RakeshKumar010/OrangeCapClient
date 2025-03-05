 
import { OurWorkProcess } from "../../lib/data";
import WorkProcessCard from "./WorkProcessCard";

const OurWorking = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14    bg-white overflow-hidden">
      <div className="mx-auto max-w-[1762px] ">
        <div className="mx-auto max-w-[630px] b text-center mb-10 md:mb-[3.75rem]">
          <span className="mb-2 block font-secondary text-[28px] md:text-[40px] font-bold uppercase leading-[1.5] tracking-[4px] text-logoColor  ">
            Process
          </span>
          <h2 className="font-secondary md:text-[30px] text-[20px] font-[700] md:leading-[60px]   text-gray-700  ">
            Our Working Process
          </h2>
        </div>

        <div className="grid gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
          {OurWorkProcess &&
            OurWorkProcess.map((value, index) => {
              return <WorkProcessCard key={index} value={value} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default OurWorking;
