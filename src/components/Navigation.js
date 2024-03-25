import React from "react";
import CartModal from "./CartModal";

const Navigation = ({ onClick, activeLink, badge, onClickCart, show, deleteProduct}) => {
  const navTab = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <nav className="h-[100px] border-b flex items-center justify-between">
      <div className="flex h-full items-center">
        <h1 className="font-bold text-3xl text-black">sneakers</h1>
        <ul className="flex h-full items-center ml-12 gap-7">
          {navTab.map((item, index) => {
            return (
              <li
                key={index}
                className={`flex h-full items-center ${
                  activeLink === item ? " border-b-[3px] border-[#FF6E00]" : ""
                }`}
              >
                {" "}
                <a
                  href=""
                  onClick={(e) => onClick(e, item)}
                  className={`${activeLink === item ? "text-black" : ""}`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="relative">
        <div className="flex items-center gap-10">
          <div className="relative" onClick={e=>onClickCart(e)}>
            <img
              src="../../images/icon-cart.svg"
              className="hover:cursor-pointer"
            ></img>
            <span className="absolute top-[-8px] right-[-6px] z-10 bg-[#FF6E00] rounded-full w-5 h-4 text-xs flex justify-center items-center text-white">
              {badge}
            </span>
          </div>
          <img
            src="../../images/image-avatar.png"
            className="w-12 hover:cursor-pointer border-2 border-[#FF6E00] rounded-full"
          ></img>
        </div>
        <CartModal CartContent={badge} show={show} deleteProduct={deleteProduct}/>
      </div>
    </nav>
  );
};

export default Navigation;
