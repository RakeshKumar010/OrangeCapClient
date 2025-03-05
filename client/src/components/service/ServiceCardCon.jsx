 
import { ServiceData } from "../../lib/data";
import Card from "../Card"; 

const ServiceCardCon = () => {
  return (
    <div className=" flex justify-center items-center bg-white  px-3 lg:px-5 2xl:px-32   py-10   lg:py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ServiceData.map((item, index) => (
          <Card
            key={item.id}
            id={item.id}
            index={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCardCon;
