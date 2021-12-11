import React, { createContext, useReducer } from "react";
import authReducer from "./Reducers/AuthReducer";
import homeReducer from "./Reducers/HomeReducer";
import authInitialState from "./InitialStates/AuthStates";
import homeInitialState from "./InitialStates/HomeInitialState";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [homeState, homeDispatch] = useReducer(homeReducer, homeInitialState);
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
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
