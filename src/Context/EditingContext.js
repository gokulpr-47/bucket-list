import { createContext, useState } from "react";

const EditingContext = createContext({});

export const EditingProvider = ({ children }) => {
  const [pathname, setPathname] = useState();

  return (
    <EditingContext.Provider
      value={{
        pathname,
        setPathname,
      }}
    >
      {children}
    </EditingContext.Provider>
  );
};

export { EditingContext };
