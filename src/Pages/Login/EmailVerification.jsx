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
            <div className="w-1/2">
                <BackgroundImage />
            </div>
            <div className="w-1/2 px-20 py-24">
                <Backbutton />
                <div className="mt-28">
                    <FormComponent 
                        heading="Email Verification"
                        text="Enter the 6 digits code sent to your mail just now. OTP will expire in 5 mins."
                        fields={EmailVerificationFields}
                        button="Verify Code"
                        // link="Resend Code"
                    />
                    <a href="#" className="flex items-center justify-end w-2/3 mt-3 signup font-semibold text-base">Resend Code</a>
                    <Link className="my-28 loginbg p-3 w-2/3 rounded-xl text-white font-bold text-lg block text-center" to="/PasswordReset">Verify Code</Link>
                </div>
            </div>
        </div>
    )
}
export default EmailVerification;