import React from "react";
import Layout from "../SignUp/Layout"
import { Link } from "react-router-dom";
const SignUp = () =>{
    return(
        <div id="#signup">
            <Layout>
                <p className="text-end">Already have an account? <Link to="/Login">Sign In</Link></p>
                <div className="py-5">
                    <h5 className="font-bold text-3xl text-textcolor">Join AiPay Today</h5>
                    <p className="my-2 text-custom-gray 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-full font-medium leading-5">Secure payment easily anytime from anywhere, create an e-store in just simple steps, buy high quality products, all on AiPay.</p>
                    <div className="2xl:my-20 xl:my-20 lg:my-20 md:my-10 sm:py-5">
                        <p className="font-bold text-custom-gray text-xl">You want to? <span className="block text-sm font-light">Please select at least one option</span></p>
                        <div className="my-5 flex items-start justify-between flex-wrap 2xl:w-9/12 xl:w-9/12 lg:w-9/12 md:w-full sm:w-full">
                            <button className="2xl:w-5/12 xl:w-5/12 lg:w-5/12 md:w-1/2 sm:w-1/3 font-bold  text-white loginbg py-4 rounded-full">Create a store</button>
                            <button className="2xl:w-6/12 xl:w-6/12 lg:w-6/12 md:w-1/2 sm:w-2/3 font-bold text-black bg-classic  py-4 rounded-full">Buy high class products</button>
                            <button className="2xl:w-6/12 xl:w-6/12 lg:w-6/12 md:w-1/2 sm:w-full font-bold text-white loginbg py-4 mt-6 rounded-full">Request a payment system</button>
                        </div>
                    </div>
                    <Link className="loginbg p-3 2xl:w-9/12 xl:w-9/12 lg:w-9/12 md:w-full sm:w-full rounded-xl text-white font-bold text-lg block text-center" to="/Form">Continue</Link>
                    {/* <Link className="w-full rounded-xl font-bold loginbg py-4 text-center text-white" to="/Form">Continue</Link> */}
                    {/* <button className="w-9/12 rounded-xl font-bold loginbg py-4 text-center text-white">Continue</button> */}

                    
                </div>
            </Layout>
        </div>
    )
}
export default SignUp;