import { createContext, useState, UseEffect } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ name: "kidus" }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
