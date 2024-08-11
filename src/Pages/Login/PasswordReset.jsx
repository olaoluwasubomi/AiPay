import React from "react";
import BackgroundImage from "./BackgroundImage";
import FormComponent from "./FormComponent";
import Backbutton from "./Backbutton";
import { IoEye } from "react-icons/io5";
const PasswordReset = () =>{
    const PasswordResetFields = [
        {label:"New Password",type:"password", placeholder:"Enter Password", icon:<IoEye />},
        {label:"Confirm Password", type:"password", placeholder:"Enter Password", icon:<IoEye />}
    ]
    return(
        <div className="flex items-start justify-center w-full">
            <div className="w-1/2">
                <BackgroundImage />
            </div>
            <div className="w-1/2 px-20 py-20">
                <Backbutton />
                <div className="mt-28">
                    <FormComponent 
                        heading="Password Reset"
                        text="Create new password to secure your account "
                        fields={PasswordResetFields}
                        button="Verify Code"
                    />
                </div>
                <button className="my-28 loginbg p-3 w-2/3 rounded-xl text-white font-bold text-lg block text-center">Reset</button>
            </div>
        </div>
    )
}
export default PasswordReset;