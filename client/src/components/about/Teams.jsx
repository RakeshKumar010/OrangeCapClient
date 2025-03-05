import { teamData } from "../../lib/data";

 

const Teams = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}

      <div class="mx-auto max-w-[630px] b text-center mb-10 md:mb-[3.75rem]">
        <span className="mb-2 block font-secondary text-[28px] md:text-[40px] font-bold uppercase leading-[1.5] tracking-[4px] text-logoColor  ">
          Our leadership
        </span>
        <h2 className="font-secondary md:text-[30px] text-[20px] font-[700] md:leading-[60px]   text-gray-700  ">
          Creative people
        </h2>
      </div>
      {/* End Title */}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2   gap-6">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl p-4 md:p-6  borderbg-neutral-900 bg-gray-700 border-neutral-700"
          >
            <div className="flex flex-col md:flex-row  items-center gap-4">
              <img
                className="rounded-xl size-full md:size-40"
                src={member.image}
                alt={member.name}
              />
              <div className="grow">
                <h3 className="text-white font-semibold">{member.name}</h3>
                <p className="text-xs uppercase text-logoColor">
                  {member.role}
                </p>
                <p className="mt-3 text-gray-300">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default Teams;
