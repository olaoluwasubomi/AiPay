import React, {useState} from "react";
import Layout from "./Layout";
import FormComponent from "../Login/FormComponent";
import Backbutton from "../Login/Backbutton";
import { Link } from "react-router-dom";
const BusinessDetails = () =>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const BusinessFields = [
        {label:"Business name",placeholder:"Enter Business name", type:"text"},
        {label:"Industry", placeholder:"Select Industry", type:"select"},
        {label:"About Business",placeholder:"Describe your business", type:"textarea"}
    ];

    const handleContinueClick = () =>{
        setIsModalVisible(true);
    };

    const handleCancelClick = () =>{
        setIsModalVisible(false);
    }
    return(
        <div>
            <Layout >
            <div>
                <Backbutton />
                <p className="text-end">Already have an account? <Link to="/">Sign In</Link></p>
            </div>
            <FormComponent 
                heading="Sign Up"
                text="Provide your business details"
                fields={BusinessFields}
            />
            <Link className="loginbg p-3 w-2/3 rounded-xl text-white font-bold text-lg block text-center mt-10" onClick={handleContinueClick}>Continue</Link>
            </Layout>



            {isModalVisible && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                <div className="bg-white p-10 w-1/3 shadow-lg relative rounded-xl">
                    {/* Cancel (X) button */}
                    <button
                        className="absolute top-3 right-3 text-black text-xl font-bold rounded-full border-2 p-2 px-3 border-black"
                        onClick={handleCancelClick}
                        >
                        &#x2715; {/* Unicode character for "X" */}
                    </button>

                    <h2 className="text-3xl text-center text-textcolor font-bold mb-4 mt-10">Terms & Conditions</h2>
                    <p className="text-center text-custom-gray font-medium text-sm">Please carefully read through our terms of agreement before you proceed</p>
                    <p className="my-5 text-center leading-6">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    <span className="block mt-5">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.
                    </span>
                    <span className="block mt-5">
                    Tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.
                    </span>
                    </p>
                    <button className="mx-auto block bg-agree text-custom-gray py-4 text-center rounded-xl w-4/5 font-bold">
                    I agree with the terms and conditions
                    </button>
                    {/* <button className="block w-4/5 loginbg py-4 text-center text-white rounded-xl mt-5 mx-auto font-bold">
                    Proceed
                    </button> */}
                    <Link className="block w-4/5 loginbg py-4 text-center text-white rounded-xl mt-5 mx-auto font-bold" to="/Login">Proceed</Link>
                    {/* Remove the existing Cancel button in the footer */}
                </div>
            </div>
            )}
        </div>
    )
}
export default BusinessDetails;