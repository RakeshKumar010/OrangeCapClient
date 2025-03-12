import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
const baseUrl = import.meta.env.VITE_APP_URL;

export default function CareersPage() {
  const { jobData, setJobData } = useContext(MyContext);

  useEffect(() => {
    const getFun = async () => {
      try {
        let result = await fetch(baseUrl + "/job");

        if (result.ok) {
          result = await result.json();
          setJobData(result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getFun();
  }, []);

  return (
    <div className="min-h-screen px-3  lg:px-5 2xl:px-32 bg-gray-100 flex flex-col items-center p-6">
      <div className=" w-full text-center">
        <span className="bg-logoColor/10 text-gray-700 text-sm px-3 py-1 rounded-full">
          We're hiring!
        </span>
        <h1 className="text-3xl font-bold mt-4">Be part of our mission</h1>
        <p className="text-gray-600 mt-2">
          We're looking for passionate people to join us on our mission. We
          value flat hierarchies, clear communication, and full ownership and
          responsibility.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {jobData &&
            jobData.map(({ title }) => (
              <button
                key={title}
                className="bg-logoColor/5 px-4 py-2 rounded-full text-gray-700 text-sm"
              >
                {title}
              </button>
            ))}
        </div>
      </div>

      <div className="mt-8 w-full px-3  lg:px-5 2xl:px-32">
        {jobData &&
          jobData.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md mb-4 flex justify-between gap-10 items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{job.title}</h2>
                <p className="text-gray-600 text-sm mt-1">{job.description}</p>
                <div className="flex gap-2 mt-2">
                  {job.workMode.map((value) => {
                    return (
                      <span className="bg-logoColor/5 text-gray-700 text-xs px-3 py-1 rounded-full">
                        {value}
                      </span>
                    );
                  })}

                  {job.jobType.map((value) => {
                    return (
                      <span className="bg-logoColor/5 text-gray-700 text-xs px-3 py-1 rounded-full">
                        {value}
                      </span>
                    );
                  })}
                </div>
              </div>
              <Link
                to={"/apply/" + job.title}
                className="text-logoColor text-nowrap font-medium"
              >
                Apply →
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
