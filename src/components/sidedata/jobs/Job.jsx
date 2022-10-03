import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoGlobe } from "react-icons/go";

const Job = () => {
  return (
    <>
      <div className="px-10 py-4">
        <a href="#" className="text-blue-400">
          Front End Developer with Angular
        </a>
        <p>WalletHub</p>
        <div>
          <div className="flex items-center">
            <IoLocationOutline />
            <p className="ml-2">Washington, DC</p>
          </div>
          <div className="flex items-center">
            <GoGlobe />
            <p className="ml-2">Remote</p>
          </div>
        </div>
        <div>
          <a className="mr-4 border my-1 px-2 rounded-3xl">angular js</a>
          <a className="mr-4 border my-1 px-2 rounded-3xl">cordova</a>
        </div>
        <hr className="mt-8" />
      </div>
    </>
  );
};

export default Job;
