import CardContainer from "../dashboard/CardContainer";

 

const Dashboard = () => {
  return (
    <div className="bg-gray-100 text-black sm:px-8 px-3 2xl:px-16 mt-5 md:mt-36 w-full">
      <div className="space-y-1">
        <p className="text-[30px] font-semibold leading-[45px]">Howdy, Ali!</p>
        <p className="text-sm leading-[25.9px]">
          We are glad to see you again!
        </p>
      </div>
      <CardContainer />
    </div>
  );
};

export default Dashboard;
