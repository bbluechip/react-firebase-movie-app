import React, { createContext, useEffect, useState } from "react";
import { userObserver } from "../auth/firebase";

// creating context
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  console.log(currentUser);

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
