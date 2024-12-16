import React, {useEffect} from "react"
import { useNavigate } from "react-router-dom";
import Navigation from "../Dashboard/Navigation"
import Heading from "./Heading";
import { Link } from "react-router-dom";
const DashboardEmpty = () =>{
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/DashboardLive");
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigate]);
    return(
        <div className="h-screen bg-bankbg flex justify-between items-start">
            <Navigation />
            {/* Body Context */}
            <div className="w-4/5">
            <Heading
                header="Welcome Ade"
                text="Look at what is happening with your business"
             />
             <div className="w-11/12 mx-auto my-10 mb-12 py-48 bg-white">
                <img src="/images/empty_state 1.png" className="w-1/6 mx-auto" />
                <h4 className="mx-auto text-center font-bold text-2xl">Your account is under review</h4>
                <p className="mx-auto text-center w-1/4 mt-1 text-sm">Hello Ade, your account is still under review. Please hold on while  we set up your store.</p>
                <Link className="block w-1/6 loginbg py-4 text-center text-white rounded-xl mt-5 mx-auto font-bold" to="">View Profile</Link>
             </div>
            </div>
        </div>
    )
}
export default DashboardEmpty;