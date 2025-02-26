import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "./BackgroundImage";
import FormComponent from "./FormComponent";
import Backbutton from "./Backbutton";
import { IoEye } from "react-icons/io5";
const PasswordReset = () =>{

    const[isModalVisible, setIsModalVisible] = useState(false);

    const handleRResetButton = () => {
        setIsModalVisible(true);
    }
    const PasswordResetFields = [
        {label:"New Password",type:"password", placeholder:"Enter Password", icon:<IoEye />},
        {label:"Confirm Password", type:"password", placeholder:"Enter Password", icon:<IoEye />}
    ]

    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        const redirectTimeout = setTimeout(() => {
            navigate("/Login"); // Redirect to the login page
        }, 5000); // 5 seconds

        // Cleanup the intervals and timeouts when the component unmounts
        return () => {
            clearInterval(timer);
            clearTimeout(redirectTimeout);
        };
    }, [navigate]);

    return(
        <div className="flex items-start justify-center w-full">
            <div className="2xl:w-1/2  xl:w-1/2 lg:w-1/2 md:w-1/2">
                <BackgroundImage />
            </div>
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full 2xl:px-20 xl:px-20 lg:px-5 md:px-2 sm:px-5 2xl:py-20 xl:py-0 lg:py-0 md:py-0 sm:py-12 h-screen">
                <Backbutton />
                <div className="mt-28">
                    <FormComponent 
                        heading="Password Reset"
                        text="Create new password to secure your account "
                        fields={PasswordResetFields}
                        button="Verify Code"
                    />
                </div>
                <button className="my-28 loginbg p-3 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-full sm:w-full rounded-xl text-white font-bold text-lg block text-center" onClick={handleRResetButton}>Reset</button>
            </div>


            {isModalVisible  && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-10 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-full shadow-lg relative rounded-xl">
                        <img src="/images/icon-park-outline_success.png" className="items-center justify-center block text-center mx-auto w-16" />
                        <h5 className="font-bold  text-lg text-custom-gray text-center mt-6">Password Reset Successful</h5>
                        <p className="text-center mt-3 w-4/5 mx-auto font-medium text-sm">Your password reset was successful. Log in to your account.</p>
                        <button className="block w-1/2 loginbg py-4 text-center text-white rounded-xl mt-5 mx-auto font-bold mb-10" onClick={() => navigate("/Login")}>Redirecting in 5 secs</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default PasswordReset;