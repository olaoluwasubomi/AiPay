import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown, IoMdMenu, IoMdClose } from "react-icons/io";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white px-5 md:px-20 flex items-center justify-between w-full py-4">
      {/* Logo */}
      <div className="w-1/5">
        <button className="bg-profilelogobg px-4 py-2 text-white rounded-lg text-sm">
          Logo
        </button>
      </div>

      {/* Hamburger Menu (Mobile View) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex w-3/5 items-center justify-center">
        <Link className="block px-4 md:px-12 hover:text-blue-600" to="#">
          Dashboard
        </Link>
        <Link className="block px-4 md:px-12 hover:text-blue-600" to="#">
          About Us
        </Link>
        <Link className="block px-4 md:px-12 hover:text-blue-600" to="#">
          Settings
        </Link>
        <Link className="block px-4 md:px-12 hover:text-blue-600" to="#">
          FAQs
        </Link>
      </div>

      {/* Account and Logout */}
      <div className="hidden md:flex w-1/5 items-center justify-end space-x-4">
        <Link className="block py-2 rounded-xl text-center" to="#">
          Account
        </Link>
        <Link
          className="block py-2 w-1/3 rounded-xl border border-textcolor text-textcolor text-center"
          to="/Login"
        >
          Log-out
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-10 md:hidden">
          <div className="flex flex-col items-start px-5 py-5 space-y-4">
            <Link
              className="block px-4 hover:text-blue-600"
              to="#"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              className="block px-4 hover:text-blue-600"
              to="#"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              className="block px-4 hover:text-blue-600"
              to="#"
              onClick={() => setIsOpen(false)}
            >
              Settings
            </Link>
            <Link
              className="block px-4 hover:text-blue-600"
              to="#"
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </Link>
            <div className="w-full flex flex-col items-start space-y-4">
              <Link
                className="block w-3/4 py-2 rounded-xl text-start px-4"
                to="#"
                onClick={() => setIsOpen(false)}
              >
                Account
              </Link>
              <Link
                className="block w-3/4 py-2 rounded-xl border border-textcolor text-center text-textcolor"
                to="/Login"
                onClick={() => setIsOpen(false)}
              >
                Log-out
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
