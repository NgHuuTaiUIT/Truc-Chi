import { createContext, useState } from "react";

export const CoverBackGroundContext = createContext({});

export const CoverBackGroundProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <CoverBackGroundContext.Provider
      value={{
        show,
        setShow
      }}>
      {children}
    </CoverBackGroundContext.Provider>
  );
};
