 import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { logout } from "../../store/authSlice.js";

import authService from "../../auth/auth.js";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux state
  const isLoggedIn = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get username if available
  const userName = userData?.name ? userData.name : "";
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0 w-full">
      <nav className="bg-orange-500 border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl h-16 px-4 sm:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="src/assets/images/logo1.webp"
              className="mr-3 h-12 rounded-full"
              alt="Logo"
            />
          </Link>

          {/* Profile Button (Laptop View) */}
          {/* Profile and Authentication */}
          <div
            className="relative lg:order-2"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <NavLink
              to={isLoggedIn ? "/profile" : "/login"}
              className="w-fit flex h-12 px-2 bg-gray-100 items-center hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 rounded-lg"
            >
              <CgProfile className="text-3xl" />
              <span className="text-gray-800 font-medium text-sm px-4 py-2.5">
                {isLoggedIn ? userName : "Login"}
              </span>
            </NavLink>

            {isOpen && (
              <div className="absolute group z-30">
                {/* Dropdown for Logged-In Users */}
                <div className="relative right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg group-hover:block">
                  <Link
                    to="/profile"
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex flex-row rounded-lg"
                  >
                    <CgProfile className="text-2xl mr-2" />
                    Profile
                  </Link>
                  <Link
                    onClick={handleLogout}
                    to="/"
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                  >
                    Logout
                  </Link>

                  <Link
                    to="/signup"
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex flex-row"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:space-x-8 w-auto justify-between items-center">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:mt-0 space-x-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-white" : "text-gray-700"
                    } hover:text-orange-700`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-700`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-700`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/donation"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-700`
                  }
                >
                  Mahadaan
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="text-gray-800 p-2 rounded-md lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-3/4 max-w-xs h-screen bg-white shadow-lg z-50 transform transition-transform duration-300">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <span className="text-xl font-bold text-gray-700">Menu</span>
            <button onClick={toggleMenu} className="text-gray-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="p-4">
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/"
                  onClick={toggleMenu}
                  className="block py-2 text-lg text-gray-800 hover:text-orange-500"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={toggleMenu}
                  className="block py-2 text-lg text-gray-800 hover:text-orange-500"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={toggleMenu}
                  className="block py-2 text-lg text-gray-800 hover:text-orange-500"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/donation"
                  onClick={toggleMenu}
                  className="block py-2 text-lg text-gray-800 hover:text-orange-500"
                >
                  Mahadaan
                </NavLink>
              </li>
            </ul>
            {isLoggedIn ? (
              <>
                <NavLink
                  to="/profile"
                  onClick={toggleMenu}
                  className="block mt-4 py-2 text-lg text-gray-800 hover:text-orange-500"
                >
                  Profile
                </NavLink>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="block mt-2 py-2 text-lg text-red-600 hover:text-red-800 w-full text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/signup"
                onClick={toggleMenu}
                className="block mt-4 py-2 text-lg text-gray-800 hover:text-orange-500"
              >
                Sign Up
              </NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
