import React from "react";
import Job from "./Job";
import { IoIosArrowForward } from "react-icons/io";

const AllJobs = () => {
  return (
    <>
      <div>
        <div className="relative mb-10">
          <h1 className="text-7xl font-semibold text-gray-200">jobs</h1>
          <p className="absolute top-8  text-gray-500 text-xl ">
            Looking out for...
          </p>
        </div>
        <Job />
        <Job />
        <Job />
        <a href="#" className="text-blue-400 flex items-center mx-10 text-sm">
          VIEW ALL JOBS <IoIosArrowForward className="ml-1 " />
        </a>
      </div>
    </>
  );
};

export default AllJobs;
