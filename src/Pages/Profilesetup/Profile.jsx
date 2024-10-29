import React , {useState, useEffect} from "react";
import Nav from "../Profilesetup/Nav";
import ProfileForm from "../Profilesetup/ProfileForm";
import Backbutton from "../Login/Backbutton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
const Profile = () => {
    const [savebutton, setsavebutton] = useState(false);
    const [proceedbtn, setproceedbtn] = useState(false);
    const [confirmbtn, setconfirmbtn] = useState(false);
    const[success, setsuccess] = useState(false);
    // const [cancelbutton, setcancelbutton] = useState(false);

    const handleSaveButton = () => {
        setsavebutton(true);
    };
    const handleCancelClick = () =>{
        setsavebutton(false);
        setconfirmbtn(false);
    };
    const handleconfirmbtn = () =>{
        setconfirmbtn(true);
        setproceedbtn(false);
    }
    const handleProceedbtn = () =>{
        setsavebutton(false);
        setproceedbtn(true);
    }
    const handlesuccess = () =>{
        setsuccess(true);
        setconfirmbtn(false);
    }

    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
    let timer;
    let redirectTimeout;
        if (success) {
            timer = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);

            redirectTimeout = setTimeout(() => {
                navigate("/ProfileDashboard"); // Redirect to Profile Dashboard
            }, 5000); // 10 seconds after success modal appears
        }
        // Cleanup the intervals and timeouts when the component unmounts or when success changes
        return () => {
            clearInterval(timer);
            clearTimeout(redirectTimeout);
        };
    }, [navigate, success]); // Dependency on success
    return(
        <div className="">
            <Nav />
            <div className="px-44 py-20">
                <h4 className="text-textcolor text-4xl font-bold">Profile Set Up</h4>
                <p className="mt-2 text-profiletext text-sm">NB: Note that you will be required to pay a token fee for your business to be verified.
                    <span className="ml-2 text-textcolor text-sm underline font-bold">Learn More</span>
                </p>
                <div className="flex items-start justify-between">
                    <div className="w-4/5">
                        <h3 className="uppercase mt-2 font-bold">user details</h3>
                        <ProfileForm />
                    </div>
                    <div className="w-1/5 bg-white shadow-lg mt-11 ml-7 px-5 pt-5 pb-80 rounded-xl">
                        <h3 className="uppercase text-formheadcolor font-bold">Logo</h3>
                        <div className="mt-10 border border-dashed px-3">
                            <img src="/images/Frame 233.png" className="mx-auto mt-16" />
                            <span className="mx-auto block text-sm mt-3 text-center text-fontcolor">JPG or PNG smaller than 10MB</span>
                            <p className="mt-16 font-bold text-sm text-center">Drag or drop  your image here</p>
                            <button className="block my-10 bg-textcolor w-11/12 mx-auto py-5 font-semibold text-white rounded-xl">Choose file</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end w-full px-44 pb-16">
                <button className="w-52 block py-5 rounded-xl border border-textcolor text-textcolor">Cancel</button>
                <button className="w-52 block py-5 ml-5 rounded-xl bg-textcolor text-white" onClick={handleSaveButton}>Save</button>
            </div>



            {savebutton && (
               <div className="fixed  inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white px-10 pt-24 pb-12 w-4/12 shadow-lg relative rounded-xl">
                        {/* Cancel (X) button */}
                        <button
                            className="absolute top-3 right-3 text-black text-xl font-bold rounded-full border-2 p-2 px-3 border-black"
                            onClick={handleCancelClick}
                        >
                            &#x2715; {/* Unicode character for "X" */}
                        </button>

                        <img src="/images/Frame 740.png" className="mx-auto" />
                        <h2 className="text-2xl text-center text-textcolor font-bold mb-4 mt-10">Pay for Account Organization Review</h2>
                        <p className="text-center text-xl text-profiletext mt-5">Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</p>
                        <p className="text-center text-xl text-profiletext mt-5">
                        Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</p>
                        <p className="text-center text-xl text-profiletext mt-5">
                        Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</p>
                        <p className="mt-10 text-lg font-bold text-fontcolor text-center">You will be required to pay a sum of <span className="block uppercase text-3xl mt-3 text-textcolor">ngn 10,000</span></p>
                        <Link className="block w-4/5 loginbg py-4 text-center text-white rounded-xl mt-5 mx-auto font-bold" to="" onClick={handleProceedbtn}>Proceed</Link>
                    </div>
                </div>
            )}

            {proceedbtn && handleCancelClick && (
                <div className="fixed  inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white px-10 pt-10 pb-12 w-4/12 shadow-lg relative rounded-xl">
                        <Backbutton />
                        <h3 className="text-xl font-bold mt-10">Transfer</h3>
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-normal">Ensure your send the exact amount indicated</p>
                            <p className="text-3xl text-textcolor font-bold flex items-center justify-center"><span className="mb-3 block text-sm">NGN</span>10,000</p>
                        </div>
                        <hr className="block border mt-3 w-11/12 mx-auto" />
                        <h3 className="mx-auto w-11/12 text-xl text-center font-normal">Transfer <span className="text-2xl font-bold">NGN 6,000</span> from your bank to <span className="text-2xl font-bold">Rehohub</span></h3>
                        {/* Main div */}
                        <div className="bg-bankbg w-11/12 mx-auto my-5 rounded-md p-5">
                            {/* First section */}
                            <div className="flex items-center justify-between w-full mb-2">
                                <div>
                                    <p className="text-lg font-semiboldl">Bank</p>
                                    <h4 className="text-formheadcolor text-2xl font-bold">GT Bank</h4>
                                </div>
                                <img src="/images/GUARANTY Trust Bank - jpeg.png"/>
                            </div>
                            {/* Second section */}
                            <div className="flex items-center justify-between w-full mb-2">
                                <div>
                                    <p className="text-lg font-semiboldl">Account Number</p>
                                    <h4 className="text-formheadcolor text-2xl font-bold">07019082222</h4>
                                </div>
                                <div className="flex items-center justify-center">
                                    <img src="/images/solar_copy-linear.png" />
                                    <p className="ml-1">Copy</p>
                                </div>
                            </div>
                            {/* Third section */}
                            <div className="flex items-center justify-between w-full  mb-2">
                                <div>
                                    <p className="text-lg font-semiboldl">Account Number</p>
                                    <h4 className="text-formheadcolor text-2xl font-bold">07019082222</h4>
                                </div>
                                <div className="flex items-center justify-center">
                                    <img src="/images/solar_copy-linear.png" />
                                    <p className="ml-1">Copy</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-xl font-normal w-11/12 mx-auto text-center">By continuing, you agree to our <span className="text-textcolor font-bold">Terms & Condition</span> and <span className="text-textcolor font-bold">Privacy Policy</span></p>
                        <Link className="block w-full loginbg py-4 text-center text-white rounded-xl mt-5 mb-5 mx-auto font-bold" to="" onClick={handleconfirmbtn}>I have Paid</Link>
                        <hr className="block border mt-3 w-11/12 mx-auto" />
                        <div className="flex items-center justify-center w-2/5 mx-auto mt-5 border p-2">
                            <img src="/images/Rectangle 83.png" />
                            <p className="ml-2 text-sm">Secured by <span className="text-textcolor font-extrabold">AiPay</span></p>
                        </div>
                    </div>
                </div>
            )}

            {confirmbtn && handleCancelClick && (
                <div className="fixed  inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white px-10 pt-24 pb-12 w-4/12 shadow-lg relative rounded-xl">
                     {/* Cancel (X) button */}
                        <button
                            className="absolute top-3 right-3 text-black text-xl font-bold rounded-full border-2 p-2 px-3 border-black"
                            onClick={handleCancelClick}
                        >
                            &#x2715; {/* Unicode character for "X" */}
                        </button>

                        <div>
                           <img src="/images/Frame 741.png" className="mx-auto" />
                           <h3 className="text-2xl font-semibold mt-5 text-textcolor mx-auto text-center">Confirm Payment</h3>
                           <p className="mt-10 text-center font-semibold text-base">Enter your details as we confirm your payment</p>

                           <form className="mt-10 px-16">
                            <label className="block font-semibold text-lg mt-5">Name of account</label>
                            <input type="text" className="block w-full outline-none rounded-lg bg-inputbg py-4 px-3" placeholder="Enter name of account used" required />
                            <label className="block font-semibold text-lg mt-5">Bank</label>
                            <input type="text" className="block w-full outline-none rounded-lg bg-inputbg py-4 px-3" placeholder="Enter the bank name" />
                            <label className="block font-semibold text-lg mt-5">Amount</label>
                            <input type="text" className="block w-full outline-none rounded-lg bg-inputbg py-4 px-3" placeholder="Enter amount paid" />
                           </form>
                           <div className="px-16">
                           <Link className="block w-full loginbg py-4 text-center text-white rounded-xl mt-10 mb-5 mx-auto font-bold" to="" onClick={handlesuccess}>Proceed</Link>
                           </div>
                         
                        </div>
                    </div>
                </div>
            )}

            {success && handleCancelClick && countdown && (
                <div className="fixed  inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white px-10 pt-24 pb-24 w-4/12 shadow-lg relative rounded-xl loader-container">
                    <div className="mx-auto flex items-center justify-center">
                        <ThreeCircles
                        className="mx-auto"
                        visible={true}
                        height="100"
                        width="100"
                        color="#1760BA"
                        ariaLabel="three-circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        />
                    </div>
                    
                        {/* <img src="/images/Group 58.png" className="mx-auto" /> */}
                        <p className="text-formheadcolor text-2xl font-semibold text-center mt-10">We are confirming your payment</p>
                        <p className="text-center w-3/4 mx-auto mt-5">Hello Ade, we are currently awaiting the confirmation of your payment. Please hold on. We will let you know when you are set to continue.</p>
                    </div>
           
                </div>
            )}
        </div>
    )
}
export default Profile;