import React from "react";
import Network from "./Network";
import { IoIosArrowForward } from "react-icons/io";

const AllNetworks = () => {
  return (
    <>
      <div className="mt-10">
        <div className="relative mb-10">
          <h1 className="text-7xl font-semibold text-gray-200">hot</h1>
          <p className="absolute top-8  text-gray-500 text-xl ">
            Network Questions
          </p>
        </div>
        <Network />
        <Network />
        <Network />
        <a href="#" className="text-blue-400 flex items-center mx-10 text-sm">
          VIEW ALL JOBS <IoIosArrowForward className="ml-1 " />
        </a>
      </div>
    </>
  );
};

export default AllNetworks;
