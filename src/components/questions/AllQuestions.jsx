import React, { useEffect, useState } from "react";
import Question from "./Question";

const AllQuestions = () => {
  const [data, setData] = useState([]);
  const url =
    "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow";

  const getData = async () => {
    const getD = await fetch(url);
    const resD = await getD.json();
    setData(resD.items);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="w-2/3 ml-10">
        {data?.slice(0, 10).map((d) => {
          return (
            <>
              <Question d={d} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default AllQuestions;
