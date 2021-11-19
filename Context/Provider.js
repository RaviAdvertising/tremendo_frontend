import React, { createContext, useReducer, Children } from "react";
import homeReducer from "./Reducers/HomeReducer";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [homeState, homeDispatch] = useReducer(homeReducer);

  return (
    <GlobalContext.Provider
      value={{
        homeState,
        homeDispatch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
