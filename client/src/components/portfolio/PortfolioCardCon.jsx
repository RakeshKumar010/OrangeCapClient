import PortfolioCard from "./PortfolioCard";

 

const PortfolioCardCon = () => {
  return (
    <section className="xl:py-[7.5rem] md:py-[6.25rem] py-[1.75rem]  px-3   bg-white overflow-hidden">
      <div className="mx-auto max-w-[1762px] ">
        <div className="mx-auto max-w-[630px] b text-center mb-10 md:mb-[3.75rem]">
          <span className="mb-2 block font-secondary text-[28px] md:text-[40px] font-bold uppercase leading-[1.5] tracking-[4px] text-logoColor  ">
            Latest Portfolio
          </span>
          <h2 className="font-secondary md:text-[30px] text-[20px] font-[700] md:leading-[60px]   text-gray-700  ">
            Where Innovation Meets IT Excellence
          </h2>
        </div>

        <div className="grid gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <PortfolioCard project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioCardCon;
