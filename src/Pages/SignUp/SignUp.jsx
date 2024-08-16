import React from "react";
import Layout from "../SignUp/Layout"
import { Link } from "react-router-dom";
const SignUp = () =>{
    return(
        <div id="#signup">
            <Layout>
                <p className="text-end">Already have an account? <Link to="/LogIn">Sign In</Link></p>
                <div className="py-5">
                    <h5 className="font-bold text-3xl text-textcolor">Join AiPay Today</h5>
                    <p className="my-2 text-custom-gray w-1/2 font-medium leading-5">Secure payment easily anytime from anywhere, create an e-store in just simple steps, buy high quality products, all on AiPay.</p>
                    <div className="my-20">
                        <p className="font-bold text-custom-gray text-xl">You want to? <span className="block text-sm font-light">Please select at least one option</span></p>
                        <div className="my-5 flex items-start justify-between flex-wrap w-9/12">
                            <button className="w-5/12 font-bold  text-white loginbg py-4 rounded-full">Create a store</button>
                            <button className="w-6/12 font-bold text-black bg-classic  py-4 rounded-full">Buy high class products</button>
                            <button className="w-6/12 font-bold text-white loginbg py-4 mt-6 rounded-full">Request a payment system</button>
                        </div>
                    </div>
                    <Link className="loginbg p-3 w-9/12 rounded-xl text-white font-bold text-lg block text-center" to="/Form">Continue</Link>
                    {/* <Link className="w-full rounded-xl font-bold loginbg py-4 text-center text-white" to="/Form">Continue</Link> */}
                    {/* <button className="w-9/12 rounded-xl font-bold loginbg py-4 text-center text-white">Continue</button> */}

                    
                </div>
            </Layout>
        </div>
    )
}
export default SignUp;