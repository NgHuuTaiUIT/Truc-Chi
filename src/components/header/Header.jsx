import { Input } from "antd";
import React, { useContext } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/icon/logo.svg";
import { ReactComponent as LogoMenu } from "../../assets/icon/menu.svg";
import { ReactComponent as LogoSearch } from "../../assets/icon/search.svg";
import { CoverBackGroundContext } from "../../context/CoverBackgroundContext";
import { MenuContext } from "../../context/MenuContext";
import "./Header.style.scss";

const Header = () => {
  const { setShow: setShowMenu } = useContext(MenuContext);
  const { setShow } = useContext(CoverBackGroundContext);

  const router = useHistory();
  
  return (
    <div className="fixed w-full mx-auto header z-[10]">
      <div className="flex items-center justify-between md:w-[85%] w-[100%] px-[10px] md:px-0 mx-auto mt-8">
        <div className="logo-icon">
          <LogoIcon className="md:w-auto w-[80%]" onClick={() => router.push('./')}/>
        </div>
        <div className="flex items-center md:justify-center justify-end md:gap-[30px] relative">
          <div className="input-container w-[100%] relative md:flex hidden items-center">
            <LogoSearch className="absolute right-[20px] " />
            <Input
              // placeholder="Basic usage"
              className="py-[16px] pl-[15px] pr-[60px] border-0 text-textCl hover:border-r-0 input-search"
            ></Input>
            <div className="absolute bottom-2 w-[80%] h-[2px]  bg-[#ffffff] border-footer"></div>
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
