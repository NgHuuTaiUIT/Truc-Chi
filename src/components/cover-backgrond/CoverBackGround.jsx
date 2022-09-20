import React, { useContext } from "react";
import { CoverBackGroundContext } from "../../context/CoverBackgroundContext";
import { MenuContext } from "../../context/MenuContext";

const CoverBackGround = () => {
  const { show, setShow } = useContext(CoverBackGroundContext);
  const { setShow: setShowMenu } = useContext(MenuContext);

  return (
    <>
      {show && (
        <div
          className="absolute inset-0 z-[99] h-full bg-cover bg-coverBg"
          onClick={() => {
            setShowMenu(false);
            setShow(false);
          }}
        />
      )}
    </>
  );
};

export default CoverBackGround;
