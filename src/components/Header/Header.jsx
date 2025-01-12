import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="shadow sticky z-50 top-0 w-full bg-orange-500">
      <nav className="flex justify-between items-center h-16 px-4 sm:px-6 max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://raw.githubusercontent.com/praveen378/everything-ok/refs/heads/main/src/assets/images/logo1.webp"
            alt="Logo"
            className="mr-3 h-12 rounded-full"
          />
        </Link>

        {/* Profile */}
        <div className="flex items-center space-x-4">
          <NavLink
            to="/login"
            className="hidden md:flex items-center px-3 py-2 bg-gray-100 hover:bg-gray-300 rounded-lg"
          >
            <CgProfile className="text-2xl mr-1" />
            <span className="text-sm font-medium text-gray-800">Login</span>
          </NavLink>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="flex md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white p-2 rounded-lg"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white hover:text-orange-300 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-white hover:text-orange-300 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-white hover:text-orange-300 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/donation"
            className={({ isActive }) =>
              `text-white hover:text-orange-300 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            Mahadaan
          </NavLink>
        </div>

        {/* Mobile Navigation (Toggle Menu) */}
        <div
          className={`fixed top-0 right-0 h-screen w-64 bg-orange-600 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col space-y-6 p-6 text-white">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-orange-300 block"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-orange-300 block"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-orange-300 block"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donation"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-orange-300 block"
              >
                Mahadaan
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-orange-300 block"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
