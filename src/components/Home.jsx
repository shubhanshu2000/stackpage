import React from "react";
import TopNav from "./nav/TopNav";
import SideNav from "./nav/SideNav";
import AllJobs from "./sidedata/jobs/allJobs";

const Home = () => {
  return (
    <>
      <div className="flex">
        <SideNav />
        <TopNav />
      </div>
    </>
  );
};

export default Home;
