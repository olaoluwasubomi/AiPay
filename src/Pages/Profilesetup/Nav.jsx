import React from "react";
import { Link } from "react-router-dom";
const Navigation = () =>{
    return(
        <div className="bg-white px-20 flex items-center  justify-between w-full py-5">
            <div className="w-1/5">
                <button className="bg-profilelogobg px-6 py-2  text-white rounded-lg text-sm">Logo</button>
            </div>
            <div className="w-3/5  flex items-center justify-center py-5">
                <Link className="block px-12">Dashboard</Link>
                <Link className="block px-12">About Us</Link>
                <Link className="block px-12">Settings</Link>
                <Link className="block px-12">FAQs</Link>
            </div>
            <div className="w-1/5  flex items-center justify-between">
                <Link className="block py-3 rounded-xl w-5/12 text-center" to="">Account</Link>
                <Link className="block py-3 rounded-xl border border-textcolor text-textcolor w-5/12 text-center" to="/Login">Log-out</Link>
            </div>
    </div>
    )
}
export default Navigation;