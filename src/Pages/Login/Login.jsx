// import React from "react";
// import { IoEye } from "react-icons/io5";
// import BackgroundImage from "./BackgroundImage";
// const Login = () =>{
//     return(
//         <div className="flex items-start justify-between w-full h-screen">
//             <BackgroundImage />
//             {/* The form Container */}
//             <div className="w-1/2 px-20 py-20 my-auto">
//                 {/* Heading */}
//                 <span className="w-full flex items-center justify-end text-sm logocolor">Don't have an account? <a href="#" className="signup font-bold text-base">Sign up</a></span>
//                 <div className="my-5">
//                     <h3 className="text-2xl font-bold signup">Login</h3>
//                     <p className="mt-2 textcolor text-base">Login to continue using Aipay</p>
//                 </div>
//                 {/* End of the Heading */}

//                 {/* The form */}
//                 <form>
//                     <label className="mt-5 block" htmlFor="Email Address">Email Address</label>
//                     <input className="block outline-none w-2/3 p-3 inputbg textcolor rounded-xl py-3 px-5" type="email" placeholder="Enter your email" />
//                     <label className="mt-5 block" htmlFor="Password">Password</label>
//                     <div className="flex items-center  inputbg justify-between w-2/3 py-3 px-5 rounded-xl">
//                         <input className="block outline-none bg-transparent textcolor " type="password" placeholder="Enter Password" />
//                         <IoEye className="text-2xl" />
//                     </div>
//                 </form>
//                 <a href="#password" className="flex items-center justify-end w-2/3 mt-5 signup font-semibold text-base ">Forgot Password?</a>
//                 <button className="my-10 loginbg p-3 w-2/3 rounded-xl text-white font-bold text-lg">Login</button>
//                 {/* End of the form */}

                
//                 <div className="flex items-center justify-between w-2/3">
//                     <hr className="border-2 w-2/3 textcolor" />
//                     <span className="text-xl px-3">or</span>
//                     <hr className="border-2 w-2/3 textcolor" />
//                 </div>
                
//                 {/* Buttons */}
//                 <div className="flex items-center justify-between w-2/3 flex-wrap">
//                     <button className="flex items-center justify-start bg-red-900 mt-2 py-4 buttonwidth inputbg rounded-xl px-6 font-bold text-sm "><img src="/images/logos_facebook.png" className="pr-2" />Log in with Facebook</button>
//                     <button className="flex items-center justify-start bg-red-900 mt-2 py-4 buttonwidth inputbg rounded-xl px-6 font-bold text-sm"><img src="/images/flat-color-icons_google.png" className="pr-2" />Log  in with Google</button>
//                     <button className="flex items-center justify-start bg-red-900 mt-6 py-4 belowbutton inputbg rounded-xl px-6 font-bold text-sm mx-auto"><img src="/images/streamline_web-solid.png" className="pr-2" />Log in with the Company Domain Name</button>
//                 </div>
//                 {/* End of the Buttons */}
//             </div>
//         </div>
//     )
// }
// export default Login;

import React from "react";
import FormComponent from "./FormComponent";
import BackgroundImage from "./BackgroundImage";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
const  Login = () =>{
    const LoginFields = [
        {label:"Email address", type:"email", placeholder:"Enter your email"},
        {label:"Password", type:"password", placeholder:"Enter Password", icon:<IoEye />}
    ]
    return(
        <div className="flex items-center justify-between w-full h-screen">
            <div className="w-1/2">
                <BackgroundImage  />
            </div>
            <div className="w-1/2 px-20">
                <p className="logocolor w-full flex items-center justify-end text-sm">Don't have an account?
                    <Link to="/SignUp">Sign Up</Link> 
                </p>
                <FormComponent 
                    heading="Login"
                    text="Login to continue using AiPay"
                    fields={LoginFields}
                    button="Login"
                    link="Forgot Psssword?"
                />
                <Link className="flex items-center justify-end w-2/3 mt-3 signup font-semibold text-base" to="/ForgotPassword">Forgot Password?</Link>
                {/* <button className="my-14 loginbg p-3 w-2/3 rounded-xl text-white font-bold text-lg">Login</button> */}
                <Link className="my-14 loginbg p-3 w-2/3 rounded-xl text-white font-bold text-lg block text-center" to="/Profile">Login</Link>
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
            </div>
        </div>
        
    )
}
export default Login;