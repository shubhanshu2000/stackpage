import React from "react";
import AllJobs from "./jobs/allJobs";
import AllNetworks from "./network/allNetworks";

const Sidedata = () => {
  return (
    <>
      <div className="bg-gray-100 h-full px-10 ">
        <AllJobs />
        <AllNetworks />
      </div>
    </>
  );
};

export default Sidedata;
