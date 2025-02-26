import React from "react";
import BackgroundImage from "./BackgroundImage";
import FormComponent from "./FormComponent";
import Backbutton from "./Backbutton";
import { Link } from "react-router-dom";
const ForgotPassword = () =>{
    const PasswordFields = [
        {label:"Email address or Phone Number", type:"varchar",placeholder:"Enter your email"}
    ]
    return(
        <div className="flex items-start justify-between w-full h-screen" id="password">
            <div className="2xl:w-1/2  xl:w-1/2 lg:w-1/2 md:w-1/2">
                <BackgroundImage />
            </div>
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full 2xl:px-20 xl:px-20 lg:px-5 md:px-2 sm:px-5 2xl:py-20 xl:py-0 lg:py-0 md:py-0 sm:py-12 h-screen">
                <Backbutton />
                <div className="mt-28">
                    <FormComponent 
                    heading="Forgot Password?"
                    text="Enter your username or email address or phone number of registration. A reset link will be sent to your inbox. Follow the  link to set up a new password."
                    fields={PasswordFields}
                    />
                </div>
                <Link className="my-28 loginbg p-3 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-full sm:w-full rounded-xl text-white font-bold text-lg block text-center" to="/EmailVerification">Send</Link>
                {/* <button className="my-28 loginbg p-3 w-2/3 rounded-xl text-white font-bold text-lg">Send</button> */}
            </div>
            
            
        </div>
    )
}
export default ForgotPassword;