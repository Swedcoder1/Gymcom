import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = (props) => {
  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);
  const [navMenu, setNavMenu] = useState(false);
  const { totalAmount } = props;

  const handleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  const handleResize = () => {
    setWindowsWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center bg-gray-300 py-4 shadow-md">
        <div>
          <h1 className="font-medium text-2xl ml-4">Gymcom</h1>
        </div>

        {windowsWidth < 769 ? (
          <>
            <div>
              {navMenu ? (
                <IoMdClose
                  onClick={handleNavMenu}
                  className="text-3xl cursor-pointer mr-4"
                />
              ) : (
                <IoMdMenu
                  onClick={handleNavMenu}
                  className="text-3xl cursor-pointer mr-4"
                />
              )}
            </div>
            {/* device */}
            <div
              className={
                navMenu
                  ? "flex flex-col absolute items-center top-16 right-0 w-full bg-gray-300 z-50 ease-in-out duration-300 h-full"
                  : "hidden"
              }
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-400 no-underline text-white w-full text-xl py-3 pl-3"
                    : "no-underline text-black w-full text-xl py-3 pl-3 ease-in-out duration-200 hover:bg-gray-400 hover:text-white"
                }
                onClick={handleNavMenu}
              >
                Homepage
              </NavLink>
              <NavLink
                to="products"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-400 no-underline text-white w-full text-xl py-3 pl-3"
                    : "no-underline text-black w-full text-xl py-3 pl-3 ease-in-out duration-200 hover:bg-gray-400 hover:text-white"
                }
                onClick={handleNavMenu}
              >
                Products
              </NavLink>

              <div className="w-full pt-2 flex items-center">
                <Link
                  to="cart"
                  onClick={handleNavMenu}
                  className="text-3xl cursor-pointer pl-2 w-full flex hover:text-4xl"
                >
                  <BiShoppingBag />
                  <p className="text-xl">({totalAmount})</p>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Laptop*/}
            <div className="flex justify-between w-2/12">
              <NavLink
                to="/"
                // className="no-underline text-black text-lg"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-black text-black text-lg"
                    : "no-underline text-black text-lg"
                }
              >
                Homepage
              </NavLink>
              <NavLink
                to="products"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-black text-black text-lg"
                    : "no-underline text-black text-lg"
                }
              >
                Products
              </NavLink>
            </div>
            <div className="flex items-center mr-4">
              <Link to="cart" className="text-3xl cursor-pointer">
                <BiShoppingBag />
              </Link>
              <p>({totalAmount})</p>
            </div>
          </>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
