import React from "react";
import Nav from "../LandingPage/Nav"
const Index = () =>{
    return(
        <div>
            <Nav />

            {/* The header */}
            <div className="flex items-start justify-between w-full">
                <div className="py-20 px-20 bg-firstsec w-full">
                    <p className="w-5/12 py-5 bg-payment text-textcolor text-center rounded-xl font-bold">Easy payment, efficient services</p>
                    <h3 className="my-4 text-5xl font-bold">Secure <span className="text-paymentcolor">Payment Easily</span> <br /> Anytime And From <br />Anywhere</h3>
                    <p>AiPay is a well secured online payment platform for indiviuals and organisations, ensuring no one ever gets stuck while waiting to verify payment.</p>
                    <div>
                        <button>For Business</button>
                        <button>For Personal</button>
                    </div>
                </div>



                <div className="py-10 px-20 bg-secondsec w-full">
                    <div>
                        <img src="/images/globe.png" />
                        <p>Free Online Store</p>
                    </div>
                    <div>
                        <img src="/images/navigation.png" />
                        <p>Seamless transaction</p>
                    </div>
                    {/* Images */}
                    <div>
                        {/* First Image */}
                        <div>
                            <img src="public/images/Soft Star.png" />
                            <img src="public/images/Vector 8.png" />
                            <div>
                                <img src="public/images/Mask group.png" />
                                <img src="public/images/Group 18.png" />
                             </div>
                        </div>

                        {/* Second Image */}
                        <div>
                            <img src="public/images/Rectangle 51.png" />
                            <img src="public/images/Mask group (1).png" />
                        </div>

                        {/* Third Image */}
                        <div>
                            <img src="public/images/arrow transition.png" />
                            <img src="public/images/Mask group (2).png" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Index;