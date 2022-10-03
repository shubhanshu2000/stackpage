import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoGlobe } from "react-icons/go";

const Job = () => {
  return (
    <>
      <div>
        <h2>Front End Developer with Angular</h2>
        <p>WalletHub</p>
        <div>
          <div>
            <IoLocationOutline />
            <p>Washington, DC</p>
          </div>
          <div>
            <GoGlobe />
            <p>Remote</p>
          </div>
        </div>
        <div>
          <a>angular js</a>
          <a>cordova</a>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Job;
