import React from "react";
import { BsPencilFill, BsEye, BsChatRight } from "react-icons/bs";
import { FaRegThumbsUp } from "react-icons/fa";

const Question = ({ d }) => {
  return (
    <>
      <div className=" flex items-center  py-4 justify-between">
        <div className=" w-4/5">
          <a href={d.link} target="_blank" className="text-blue-400">
            {d.title}
          </a>
          <div className="flex flex-wrap my-4 items-center">
            {d.tags.map((t) => {
              return (
                <>
                  <p className="mr-4 border my-1 px-2 rounded-3xl">{t}</p>
                </>
              );
            })}
          </div>
          <div className="flex items-center">
            <span>
              <BsPencilFill className="p-1 h-5 w-5 text-orange-500 border rounded-full " />
            </span>{" "}
            <p className="ml-4 text-sm">
              modified 1 min ago{" "}
              <a href={d.owner.link} target="_blank">
                <b>{d.owner.display_name}</b>
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-around   w-2/5 ">
          <div className="text-center hover:rounded-lg hover:shadow-xl p-4">
            <p>{d.score}</p>
            <p className="mb-2">votes</p>
            <FaRegThumbsUp className="mx-auto" />
          </div>
          <div
            style={{ color: d.is_answered && "green" }}
            className="text-center  hover:rounded-lg hover:shadow-xl p-4"
          >
            <p>{d.answer_count}</p>
            <p className="mb-2">answer</p>
            <BsChatRight className="mx-auto" />
          </div>
          <div className="text-center hover:shadow-xl hover:rounded-lg  p-4">
            <p>{d.view_count}</p>
            <p className="mb-2">views</p>
            <BsEye className="mx-auto" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Question;
