import React, { createContext, useReducer, Children } from "react";
import authReducer from "./Reducers/AuthReducer";
import homeReducer from "./Reducers/HomeReducer";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [homeState, homeDispatch] = useReducer(homeReducer);
  const [authState, authDispatch] = useReducer(authReducer);
  return (
    <GlobalContext.Provider
      value={{
        homeState,
        homeDispatch,
        authState,
        authDispatch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
