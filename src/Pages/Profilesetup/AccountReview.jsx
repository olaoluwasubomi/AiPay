import React from "react";
import Nav from "../Profilesetup/Nav";
import { Link } from "react-router-dom";
const ProfileDashboard = () =>{
    return(
        <div>
            <Nav />
            <h4 className="w-4/5 mx-auto mt-16 text-textcolor font-bold text-2xl">Getting Started</h4>
            <div className="bg-bankbg w-4/5 py-44 mx-auto mt-2 rounded-lg">
            <div className="w-1/3 mx-auto my-auto">
                <img src="/images/icon-park-outline_success (2).png" className="mx-auto" />
                <p className="text-2xl font-bold text-center mt-4">Your account is under review</p>
                <p className="text-center text-lg">Hello Ade, your account is still under review. We will let you know when you are set to continue.</p>
                <Link className="block w-2/5 loginbg py-4 text-center text-white rounded-xl mt-5 mx-auto font-bold" to="">Go to Dashboard</Link>
            </div>
                
            </div>
        </div>
    )
}
export default ProfileDashboard;