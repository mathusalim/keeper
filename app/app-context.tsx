"use client";
import { createContext, useContext } from "react";

const defaultState = {
  month: "test",
};
const AppContext = createContext(defaultState);

export const AppProvider = (props: {
  children: React.ReactNode;
  date: string;
}) => {
  const contextValues = {
    month: props.date,
  };
  return (
    <AppContext.Provider value={contextValues}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined || context === null) {
    throw new Error(`useUserContext must be called within UserProvider`);
  }
  return context;
};
