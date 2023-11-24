import { createContext, useState } from "react";

export const IdUserContext = createContext();

export const IdUserProvider = ({ children }) => {
    const [id, setId] = useState('');
    return (
      <IdUserContext.Provider value={{ id, setId }}>
        {children}
      </IdUserContext.Provider>
    );
  };