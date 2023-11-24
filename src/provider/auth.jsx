import { createContext, useState } from "react";

export const AuthContex = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContex.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContex.Provider>
  );
};
