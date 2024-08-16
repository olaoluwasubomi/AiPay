import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
const Nav = () =>{
    return(
        <div className="bg-white px-20 flex items-center  justify-between w-full py-5">
            <div className="w-1/5">
                <button className="logobtn px-6 py-2  text-white rounded-lg text-sm">Logo</button>
            </div>
            <div className="w-3/5  flex items-center justify-center py-5">
                <Link className="block px-12">Services</Link>
                <Link className="px-12 flex items-center justify-center">Products <IoMdArrowDropdown /></Link>
                <Link className="block px-12">About Us</Link>
            </div>
            <div className="w-1/5  flex items-center justify-between">
                <Link className="block py-3 rounded-xl loginbg text-white w-5/12 text-center">Get Started</Link>
                <Link className="block py-3 rounded-xl border-2 text-textcolor w-5/12 text-center">Login</Link>
            </div>
        </div>
    )
}
export default Nav;