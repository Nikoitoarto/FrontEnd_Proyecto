import React, { createContext, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => 
{
  const appName = 'Gestor Semestral Docente';

  return (
    <AppContext.Provider value={{ appName }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};