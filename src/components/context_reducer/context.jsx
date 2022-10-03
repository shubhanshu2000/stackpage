import { createContext, useEffect, useReducer } from "react";
import { ACTIONS } from "./ACTIONS";
import { dataReducer } from "./reducers";

const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, {
    data: [],
    view: false,
    inputVal: "",
  });

  const url =
    "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow";

  const getData = async () => {
    const getD = await fetch(url);
    const resD = await getD.json();

    dispatch({ type: ACTIONS.DATA, payload: resD.items });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <dataContext.Provider value={{ state, dispatch }}>
      {children}
    </dataContext.Provider>
  );
};

export default dataContext;
