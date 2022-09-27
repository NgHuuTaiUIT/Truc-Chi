import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../../context/MenuContext";

const MenuRight = props => {
  const { show: showMenu } = useContext(MenuContext);
  const menu = [
    { title: "Trang chủ", path: "/" },
    { title: "Về chúng tôi", path: "/about" },
    { title: "Hành trình", path: "/journey" },
    { title: "Sản phẩm", path: "/products" },
    { title: "Tin tức", path: "/news" },
    { title: "Liên hệ", path: "/contact" }
  ];
  return (
    <div
      className="fixed h-[100vh] bg-menuBg md:w-[461px] w-[70%] top-0 transition-all z-[100] flex flex-col justify-center items-center"
      style={{
        right: showMenu ? 0 : "-500px"
      }}>
      {menu.map(mn => (
        <Link to={mn.path} className="py-[28px] w-full hover:bg-menuHover cursor-pointer transition-colors">
          <h4>
            {mn.title}
          </h4>
        </Link>
      ))}
    </div>
  );
};
export default MenuRight;
