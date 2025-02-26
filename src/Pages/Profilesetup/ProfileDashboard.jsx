import React from "react";
import Nav from "../Profilesetup/Nav";
import { Link } from "react-router-dom";
const ProfileDashboard = () =>{
    return(
        <div>
            <Nav />
            <h4 className="2xl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-1/2 sm:w-[95%]  mx-auto 2xl:mt-16 xl:mt-16 lg:mt-16 md:mt-10 sm:mt-32 text-textcolor font-bold text-2xl">Getting Started</h4>
            <div className="bg-bankbg 2xl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-1/2 sm:w-[95%] 2xl:py-44 xl:py-44 lg:py-36 md:py-20 sm:py-20 mx-auto 2xl:mt-2 xl:mt-2 lg:mt-5 md:mt-5 sm:mt-32 rounded-lg">
            <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-[90%] mx-auto my-auto">
                <img src="/images/icon-park-outline_success (1).png" className="mx-auto" />
                <p className="text-2xl font-bold text-center mt-4">Congratulations</p>
                <p className="text-justify text-lg">Hello Ade, we have received your payment and as such, proceeded with the review of your account. We will let you know when you are set to continue.</p>
                <Link className="block w-2/5 loginbg py-4 text-center text-white rounded-xl mt-5 mx-auto font-bold" to="/AccountReview">Go to Dashboard</Link>
            </div>
                
            </div>
        </div>
    )
}
export default ProfileDashboard;