import React from "react";
import useInitialState from "../hooks/useInitialState";
import AppContext from "../context/AppContext";

const ProviderMock = ({ children }) => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  );
};

export default ProviderMock;
