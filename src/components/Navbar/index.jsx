import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Logo from "/public/logo.png";
import { navigationLinkItems } from "../../constants";
import { userLogout } from "../../services";

const Navbar = ({ isLoggedIn,setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);

  const handleToggle = (link = "") => {
    setToggle(!toggle);
    navigate(link);
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {!isLoggedIn && (
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setToggle(!toggle)}
              >
                <span className="absolute -inset-0.5"></span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div
              className={`flex flex-shrink-0 items-center w-full gap-x-4 ${
                isLoggedIn
                  ? "lg:w-auto md:w-auto"
                  : "justify-end pr-4 lg:w-auto md:w-auto"
              }`}
            >
              <img
                className="h-8 bg-white w-auto cursor-pointer"
                src={Logo}
                alt="Your Company"
                onClick={() => navigate(isLoggedIn ? "/home" : "/signin")}
              />
              <span className="text-white  xl:hidden md:hidden lg:hidden">
                Provision STORE
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <span
                  onClick={() => navigate(isLoggedIn ? "/home" : "/signin")}
                  className=" cursor-pointer text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Provision STORE
                </span>
              </div>
            </div>
          </div>

          {isLoggedIn && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-x-4 lg:gap-x-8 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="border border-orange-500 px-2 py-1 rounded-md hover:opacity-80">
                <Link to="/about">
                  <span className="text-white font-sm">About</span>
                </Link>
              </div>
              <div className={`relative ml-3`}>
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setToggle(!toggle)}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>

                <div
                  className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                    toggle ? "hidden" : ""
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <div
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                    onClick={() => setToggle(!toggle)}
                  >
                    Your Profile
                  </div>
                  <span
                    className="block cursor-pointer px-4 py-2 text-sm text-gray-700"
                    id="user-menu-item-2"
                    onClick={() => {
                      setToggle(!toggle);
                      userLogout();
                      setIsLoggedIn(false);
                    }}
                  >
                    Sign out
                  </span>
                </div>
              </div>
              <div className="relative p-1 rounded-full h-[2.2rem] w-[2.2rem] flex items-center justify-center">
                <span className="absolute -top-1.5 -right-1 text-white bg-red-600  w-[1.2rem] h-[1.2rem] flex items-center justify-center rounded-full text-sm font-medium">
                  12
                </span>
                <button>
                  <FiShoppingCart className="text-xl lg:text-2xl text-white" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {!isLoggedIn && (
        <div className="sm:hidden" id="mobile-menu">
          <div className={`space-y-1 px-2 pb-3 pt-2 ${toggle ? "hidden" : ""}`}>
            {navigationLinkItems.map((item) => (
              <div
                onClick={() => handleToggle(item.url)}
                className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
                key={item.label}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
