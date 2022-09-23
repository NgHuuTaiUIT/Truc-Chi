import { Input } from "antd";
import React, { useContext } from "react";
import { ReactComponent as LogoIcon } from "../../assets/icon/logo.svg";
import { ReactComponent as LogoMenu } from "../../assets/icon/menu.svg";
import { ReactComponent as LogoSearch } from "../../assets/icon/search.svg";
import { CoverBackGroundContext } from "../../context/CoverBackgroundContext";
import { MenuContext } from "../../context/MenuContext";
import "./Header.style.scss";

const Header = () => {
  const { setShow: setShowMenu } = useContext(MenuContext);
  const { setShow } = useContext(CoverBackGroundContext);

  return (
    <div className="fixed w-full mx-auto header z-[10]">
      <div className="flex items-center justify-between md:w-[85%] w-[95%] mx-auto mt-8">
        <div className="logo-icon">
          <LogoIcon className="md:w-auto w-[80%]" />
        </div>
        <div className="flex items-center justify-center gap-[30px] relative">
          <div className="input-container w-[100%] relative md:flex hidden items-center ">
            <LogoSearch className="absolute right-[36px] " />
            <Input
              // placeholder="Basic usage"
              className="py-[16px] px-[36px] border-0 border-b-2 border-b-text-cl text-textCl hover:border-r-0 input-search"
            />
          </div>
          <LogoMenu
            className="md:w-auto w-[80%] cursor-pointer"
            onClick={() => {
              setShowMenu(true);
              setShow(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
