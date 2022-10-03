import React from "react";
import { BsStackOverflow } from "react-icons/bs";

const Network = () => {
  return (
    <>
      <div>
        <div className="flex my-4 items-center">
          <BsStackOverflow />
          <a href="#" className="text-blue-400 ml-2">
            Why does everybody typedef over standard C types
          </a>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Network;
