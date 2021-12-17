import React, { createContext, useReducer } from "react";
import authReducer from "./Reducers/AuthReducer";
import homeReducer from "./Reducers/HomeReducer";
import authInitialState from "./InitialStates/AuthStates";
import homeInitialState from "./InitialStates/HomeInitialState";
import languageReducer from "./Reducers/LanguageReducer";
import languageInitialStates from "./InitialStates/LanguageInitialState";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [homeState, homeDispatch] = useReducer(homeReducer, homeInitialState);
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [languageState, languageDispatch] = useReducer(
    languageReducer,
    languageInitialStates
  );
  return (
    <GlobalContext.Provider
      value={{
        homeState,
        homeDispatch,
        authState,
        authDispatch,
        languageState,
        languageDispatch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
