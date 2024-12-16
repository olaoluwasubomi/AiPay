import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown, IoMdMenu, IoMdClose } from "react-icons/io";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-white px-4 md:px-20 flex items-center justify-between w-full py-5">
            <div className="w-1/5">
                <button className="logobtn px-6 py-2 text-white rounded-lg text-sm">Logo</button>
            </div>
            <div className="hidden md:flex w-3/5 items-center justify-center py-5">
                <Link className="block px-12">Services</Link>
                <Link className="px-12 flex items-center justify-center">Products <IoMdArrowDropdown /></Link>
                <Link className="block px-12">About Us</Link>
            </div>
            <div className="w-1/5 flex items-center justify-between">
                <Link className="block py-3 rounded-xl loginbg text-white w-5/12 text-center" to="/SignUp">Get Started</Link>
                <Link className="block py-3 rounded-xl border-2 text-textcolor w-5/12 text-center" to="/Login">Login</Link>
            </div>
            {/* Hamburger Icon */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu}>
                    {isOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                </button>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-10 md:hidden">
                    <div className="flex flex-col items-center py-5">
                        <Link className="block py-2" onClick={toggleMenu} to="/">Services</Link>
                        <Link className="block py-2 flex items-center justify-center" onClick={toggleMenu} to="/">Products <IoMdArrowDropdown /></Link>
                        <Link className="block py-2" onClick={toggleMenu} to="/">About Us</Link>
                        <Link className="block py-3 rounded-xl loginbg text-white w-5/12 text-center" onClick={toggleMenu} to="/SignUp">Get Started</Link>
                        <Link className="block py-3 rounded-xl border-2 text-textcolor w-5/12 text-center" onClick={toggleMenu} to="/Login">Login</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Nav;