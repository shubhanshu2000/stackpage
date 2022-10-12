import React from "react";
import TopNav from "./nav/TopNav";
import SideNav from "./nav/SideNav";
import AllJobs from "./sidedata/jobs/allJobs";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="flex">
        <SideNav />
        <TopNav />
      </div>
      <Footer />
    </>
  );
};

export default Home;
