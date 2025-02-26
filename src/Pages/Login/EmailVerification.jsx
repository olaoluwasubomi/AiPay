import React from "react";
import BackgroundImage from "./BackgroundImage";
import FormComponent from "./FormComponent";
import Backbutton from "./Backbutton";
import { Link } from "react-router-dom";
const EmailVerification = () =>{
    const EmailVerificationFields = [
        {label:"Verification Code", placeholder:"Enter Code", type:"number"}
    ]
    return(
        <div className="flex items-start justify-center w-full">
            <div className="2xl:w-1/2  xl:w-1/2 lg:w-1/2 md:w-1/2">
                <BackgroundImage />
            </div>
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full 2xl:px-20 xl:px-20 lg:px-5 md:px-2 sm:px-5 2xl:py-20 xl:py-0 lg:py-0 md:py-0 sm:py-12 h-screen">
                <Backbutton />
                <div className="mt-28">
                    <FormComponent 
                        heading="Email Verification"
                        text="Enter the 6 digits code sent to your mail just now. OTP will expire in 5 mins."
                        fields={EmailVerificationFields}
                        button="Verify Code"
                        // link="Resend Code"
                    />
                    <a href="#" className="flex items-center justify-end 2xl:w-2/3 xl:w-2/3 lg:-2/3 md:w-full sm:w-full mt-3 signup font-semibold text-base">Resend Code</a>
                    <Link className="my-28 loginbg p-3 2xl:w-2/3 xl:w-2/3 lg:-2/3 md:w-full sm:w-full rounded-xl text-white font-bold text-lg block text-center" to="/PasswordReset">Verify Code</Link>
                </div>
            </div>
        </div>
    )
}
export default EmailVerification;