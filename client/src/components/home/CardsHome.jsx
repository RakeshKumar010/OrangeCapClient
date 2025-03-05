import React from "react";  
import Card from "../Card";
import { ServiceData } from "../../lib/data";
// import Card from "../Card";

const CardsPage = () => {
  return (
    <div className=" flex justify-center items-center bg-white/95 px-3 lg:px-5 2xl:px-32 py-10 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ServiceData.slice(0,3).map((item,index) => (
          <Card key={item.id}  id={item.id} index={index} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
