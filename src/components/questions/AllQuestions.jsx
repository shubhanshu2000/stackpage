import React, { useContext } from "react";
import dataContext from "../context_reducer/context";
import Question from "./Question";

const AllQuestions = () => {
  const {
    state: { data, inputVal },
    dispatch,
  } = useContext(dataContext);
  function implementFilter() {
    let sortProducts = data;

    if (inputVal) {
      sortProducts = sortProducts.filter((d) =>
        d.title.toLowerCase().includes(inputVal)
      );
    }

    return sortProducts;
  }

  return (
    <>
      <div className="w-2/3">
        <div className=" ml-10 py-4">
          <div className="relative mb-10">
            <h1 className="text-7xl font-semibold text-gray-200">top</h1>
            <p className="absolute top-8  text-gray-500 text-xl ">Question</p>
          </div>
          <div>
            <ul className="flex justify-between w-2/3 items-center">
              <li>
                <a
                  href="#"
                  className="focus:bg-orange-500 focus:border-none focus:text-white  border my-1 px-4 rounded-3xl"
                >
                  intersting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="focus:bg-orange-500 focus:text-white focus:border-none border my-1 px-4  rounded-3xl"
                >
                  featured
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="focus:bg-orange-500 focus:border-none focus:text-white  border my-1 px-4 rounded-3xl"
                >
                  hot
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="focus:bg-orange-500 focus:text-white  border my-1 px-4 rounded-3xl focus:border-none"
                >
                  week
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="focus:bg-orange-500 focus:text-white focus:border-none  border my-1 px-4 rounded-3xl"
                >
                  month
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className=" mx-8">
          {implementFilter().length === 0 ? (
            <>
              <p>No results found</p>
            </>
          ) : (
            implementFilter()
              ?.slice(0, 10)
              .map((d) => {
                return (
                  <>
                    <Question d={d} />
                  </>
                );
              })
          )}
        </div>

        <div className="py-14 flex flex-col items-center ">
          <img
            src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png"
            alt=""
            className="w-[400px]  mt-6 p-4 items-center  "
          />
          <div className="mt-2 flex  items-center flex-col">
            <h1 className="text-2xl text-gray-600">Looking for more?</h1>
            <p className="text-sm text-gray-500">
              Browse the
              <span className="text-[#348FD3] cursor-pointer">
                {" "}
                complete list of questions
              </span>
              , or
              <span className="text-[#348FD3] cursor-pointer">
                {" "}
                popular tags
              </span>
              . Help us answer
            </p>
            <p className="text-sm text-gray-500">unanswer questions.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllQuestions;
