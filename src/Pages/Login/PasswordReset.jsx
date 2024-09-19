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
                <button className="my-28 loginbg p-3 w-2/3 rounded-xl text-white font-bold text-lg block text-center" onClick={handleRResetButton}>Reset</button>
            </div>


            {isModalVisible  && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-10 w-1/4 shadow-lg relative rounded-xl">
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