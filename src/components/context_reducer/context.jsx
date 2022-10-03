import { createContext, useEffect, useState } from "react";

const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [view, setView] = useState(false);
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
    <dataContext.Provider value={{ data, view, setView }}>
      {children}
    </dataContext.Provider>
  );
};

export default dataContext;
