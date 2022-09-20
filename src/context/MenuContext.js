import { createContext, useEffect, useState } from "react";

export const MenuContext = createContext({});

export const MenuContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log(show)
  }, [show]);
  return (
    <MenuContext.Provider
      value={{
        show,
        setShow
      }}>
      {children}
    </MenuContext.Provider>
  );
};
