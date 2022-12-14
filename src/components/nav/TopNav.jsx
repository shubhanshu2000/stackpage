import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { FiGlobe } from "react-icons/fi";
import { GrMonitor } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import r from "../../assets/react.svg";
import AllQuestions from "../questions/AllQuestions";
import dataContext from "../context_reducer/context";
import Sidedata from "../sidedata/sidedata";
import { ACTIONS } from "../context_reducer/ACTIONS";

const TopNav = () => {
  const {
    state: { view },
    dispatch,
  } = useContext(dataContext);

  return (
    <>
      <div className={` ${view ? "w-5/6" : "w-full"}`}>
        <nav className="flex justify-between items-center p-6 ">
          <GiHamburgerMenu
            onClick={() => dispatch({ type: ACTIONS.VIEW, payload: !view })}
          />
          <div className="flex w-3/4 items-center">
            <BiSearch />
            <input
              className="w-full ml-2 outline-none"
              type="text"
              placeholder="Search"
              onChange={(e) =>
                dispatch({ type: ACTIONS.INPUT_VAL, payload: e.target.value })
              }
            />
          </div>
          <div className="flex items-center">
            <FiGlobe />
            <p className="ml-1">Help</p>
          </div>
          <div className="flex items-center">
            <GrMonitor />
            <p className="ml-1">Tour</p>
          </div>
          <div className="flex items-center">
            <img src={r} alt="" className="mr-2 h-8 w-8 rounded-2xl border" />
            <IoIosArrowDown />
          </div>
        </nav>
        <hr />
        <div className="flex">
          <AllQuestions />
          <div className={`w-1/3`}>
            <Sidedata />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
