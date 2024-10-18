import React, { createContext, useContext, useState } from 'react';
import useAxiosInterceptors from 'hooks/useAxiosInterceptors';

const AppContext = createContext();

export const AppProvider = ({ children }) => 
{
  const appName = 'Gestor Semestral Docente';
  const [isLoading, setIsLoading] = useState(false);
  useAxiosInterceptors(setIsLoading);

  return (
    <AppContext.Provider 
      value={{ 
        appName, 
        isLoading, 
        setIsLoading 
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};