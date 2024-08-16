import React from "react";
import Layout from "../SignUp/Layout";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import FormComponent from "../Login/FormComponent";
const Form = () =>{
    const Formfields = [
        {label:"Name", type:"text", placeholder:"Enter full name"},
        {label:"Email address", type:"email", placeholder:"Enter email address"},
        {label:"Phone Number", type:"password", placeholder:"Enter Phone Number"},
        {label:"Password", type:"Password", placeholder:"Enter password", icon:<IoEye />},
        {label:"Confirm Password", type:"Password", placeholder:"Confirm Password", icon:<IoEye />}
    ]
    return(
        <div>
            <Layout>
                <p className="text-end">Already have an account? <Link to="/">Sign In</Link></p>
                <FormComponent
                    heading="Sign Up"
                    text="Create an account to start using AiPAy"
                    fields={Formfields}
                    button="Sign Up"
                    link="Forgot Psssword?"
                 />
                   <Link className="loginbg p-3 w-2/3 rounded-xl text-white font-bold text-lg block text-center mt-3" to="/BusinessDetails">Sign Up</Link>
                  {/* <button className="my-14 loginbg p-3 w-2/3 rounded-xl text-white font-bold text-lg">Login</button> */}

                <div className="flex items-center justify-between w-2/3">
                    <hr className="border-1 w-2/3 textcolor" />
                    <span className="text-xl px-3">or</span>
                    <hr className="border-1 w-2/3 textcolor" />
                </div>
                <div className="flex items-center justify-between w-2/3 flex-wrap">
                    <button className="flex items-center justify-start bg-red-900 mt-2 py-4 buttonwidth inputbg rounded-xl px-6 font-bold text-sm "><img src="/images/logos_facebook.png" className="pr-2" />Log in with Facebook</button>
                    <button className="flex items-center justify-start bg-red-900 mt-2 py-4 buttonwidth inputbg rounded-xl px-6 font-bold text-sm"><img src="/images/flat-color-icons_google.png" className="pr-2" />Log  in with Google</button>
                    <button className="flex items-center justify-start bg-red-900 mt-6 py-4 belowbutton inputbg rounded-xl px-6 font-bold text-sm mx-auto"><img src="/images/streamline_web-solid.png" className="pr-2" />Log in with the Company Domain Name</button>
                </div>

            </Layout>
        </div>
    )
}
export default Form;