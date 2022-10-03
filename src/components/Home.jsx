import React from "react";
import TopNav from "./nav/TopNav";
import SideNav from "./nav/SideNav";

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
