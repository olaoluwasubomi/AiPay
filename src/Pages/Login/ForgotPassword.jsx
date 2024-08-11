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
            <div className="w-1/2">
                <BackgroundImage />
            </div>
            <div className="w-1/2 px-20 py-24">
                <Backbutton />
                <div className="mt-28">
                    <FormComponent 
                    heading="Forgot Password?"
                    text="Enter your username or email address or phone number of registration. A reset link will be sent to your inbox. Follow the  link to set up a new password."
                    fields={PasswordFields}
                    />
                </div>
                <Link className="my-28 loginbg p-3 w-2/3 rounded-xl text-white font-bold text-lg block text-center" to="/EmailVerification">Send</Link>
                {/* <button className="my-28 loginbg p-3 w-2/3 rounded-xl text-white font-bold text-lg">Send</button> */}
            </div>
            
            
        </div>
    )
}
export default ForgotPassword;