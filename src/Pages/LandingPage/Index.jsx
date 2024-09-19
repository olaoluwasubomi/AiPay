import React from "react";
import Nav from "./Nav";
import Servicedata from "./Servicedata";
import Footer from "./Footer";
const Index = () =>{
    const service = Servicedata.map((item, i) => {
        return (
            <div 
            key={i}
            className={`${item.bgcolor}  py-16 px-10 rounded-xl mx-auto servicewidth`}
            >
                <img src={item.image} className="mx-auto" />
                <h3 className="mx-auto mt-3 text-center text-2xl font-bold">{item.head}</h3>
                <p className="text-center mt-4 w-full mx-auto font-medium">{item.text}</p>
                <a style={item.linkstyles}
                href="#" className="block bg-textcolor py-4 mx-auto text-white w-1/2 text-center rounded-xl">{item.link}</a>
            </div>
        )
    })
    return(
        <div>
            <Nav />

            {/* The header */}
            <div className="flex items-start justify-between w-full">
                <div className="pt-24 pb-36 px-20 bg-gradient-to-b from-firstsec to-white w-full">
                    <p className="w-5/12 py-5 bg-payment text-textcolor text-center rounded-xl font-bold">Easy payment, efficient services</p>
                    <h3 className="my-4 text-5xl font-bold">Secure <span className="text-paymentcolor">Payment Easily</span> <br /> Anytime And From <br />Anywhere</h3>
                    <p className="mt-8 font-bold text-xl text-landingtextcolor w-11/12">AiPay is a well secured online payment platform for indiviuals and organisations, ensuring no one ever gets stuck while waiting to verify payment.</p>
                    <div className="flex items-center justify-between w-7/12 mt-5">
                        <button className="block py-4 border-2 text-center bg-textcolor rounded-xl w-5/12 text-white font-bold text-sm">For Business</button>
                        <button className="block border-2 border-textcolor py-4 text-center rounded-xl text-textcolor font-bold w-5/12 text-sm">For Personal</button>
                    </div>
                </div>



                <div className="pt-24 pb-5 pl-10 bg-gradient-to-b from-secondsec to-white w-full relative">
                    <div className="flex items-center justify-center w-1/4 py-2 text-center rounded-xl bg-white absolute top-96 -left-1 z-10">
                        <img src="/images/globe.png" className="w-1/12" />
                        <p className="pl-3 text-textcolor">Free Online Store</p>
                    </div>
                    <div className="flex items-center flex-row-reverse justify-center w-1/4 py-2 text-center rounded-xl bg-white mt-10 absolute inset-x-2/3 top-48">
                        <img src="/images/navigation.png" className="w-1/12" />
                        <p className="pr-3 text-textcolor">Seamless transaction</p>
                    </div>
                    {/* Images */}
                    <div className="flex items-start justify-between w-full">
                        {/* First Image */}
                        <div className="w-1/2 relative">
                            <img src="/images/Soft Star.png" className="flex items-start justift-start relative z-10 -top-14" />
                            <img src="/images/Vector 8.png" className="absolute top-16" />
                            <div className="flex items-start justify-start w-full relative">
                                <img src="/images/Mask group.png" className="ml-16 -mt-16 w-full" />
                                <img src="/images/Group 18.png" className="absolute left-60 mt-14 w-1/2 mr-0"/>
                             </div>
                        </div>

                        {/* Second Image */}
                        <div className="w-1/2 ml-20">
                            <img src="/images/Rectangle 51.png" className="w-full" />
                            <img src="/images/Mask group (1).png" className="mt-8 w-full" />
                        </div>

                        {/* Third Image */}
                        <div className="w-1/2 flex items-end justify-end flex-col relative">
                            <img src="/images/arrow transition.png" className="w-2/3 absolute -top-20" />
                            <img src="/images/Mask group (2).png" className="w-2/3 mt-12" />
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* End of Header */}

            {/* Rating */}
            <div className="flex items-center justify-between w-full px-24 mt-44">
                <div className="w-1/5 py-5 mx-auto text-center rounded-xl border-2 border-black">
                    <p className="font-bold text-xl">4.9/5.0</p>
                    <div className="flex items-center justify-center mt-2">
                        <img src="/images/Star 9.png" className="px-1" />
                        <img src="/images/Star 9.png" className="px-1" />
                        <img src="/images/Star 9.png" className="px-1" />
                        <img src="/images/Star 9.png" className="px-1" />
                        <img src="/images/Star 9.png" className="px-1" />
                    </div>
                    <p className="mt-2">User rating</p>
                </div>
                <div  className="w-1/5 py-6 mx-auto text-center rounded-xl border-2 border-black">
                    <p className="text-3xl font-bold">20K+</p>
                    <p className="mt-5">Standard users</p>
                </div>
                <div  className="w-1/5 py-6 mx-auto text-center rounded-xl border-2 border-black">
                    <img src="/images/ic_outline-favorite.png" className="mx-auto" />
                    <p className="mt-5">Best in the  market</p>
                </div>
                <div  className="w-1/5 py-6 mx-auto text-center rounded-xl border-2 border-black">
                    <p className="text-3xl font-bold">20K+</p>
                    <p className="mt-5">Standard users</p>
                </div>
            </div>
            {/* End of Ratings */}

            {/* Difference Section */}
            <div className="flex flex-col-reverse absolute -inset-y-[calc(75%+20%)] right-0">
                <img src="/images/Ellipse 185.png" className="w-28 relative bottom-20"/>
                <img src="/images/Ellipse 184.png" className="w-28 relative" />
            </div>
            <div className="mt-24 px-24 flex items-center justify-betweena w-full relative">
                {/* First section */}
                <div className="w-1/2 relative">
                    <div className="flex relative">
                        <img src="/images/Rectangle 78.png" className="z-10" />
                        <img src="/images/Rectangle 79.png" className="z-0 absolute top-0 left-0 mt-10 ml-10"/>
                    </div>
                    
                    <div className="bg-textcolor w-1/4 py-3 text-center rounded-xl text-white flex items-center justify-between px-7 top-96 right-44 absolute z-10">
                        <h5 className="text-3xl font-bold">88%</h5>
                        <p>Revenue Growth</p>
                    </div>
                </div>

                {/* Second Section */}
                <div className="w-1/2">
                    <h4 className="text-4xl font-bold capitalize">Why are we different?</h4>
                    <ul className="custom-list">
                        <li className="my-5 list-disc">
                            <p className="text-2xl font-medium">Fast & Reliable Payment</p>
                            <p className="mt-3 w-1/2 text-fontcolor">Swift and Secure Transactions: Enjoy lightning-fast and worry-free payments with our cutting-edge system. Your financial security is our top priority</p>
                        </li>
                        <li className="my-5 list-disc">
                            <p className="text-2xl font-medium">Fast & Reliable Payment</p>
                            <p className="mt-3 w-1/2 text-fontcolor">Swift and Secure Transactions: Enjoy lightning-fast and worry-free payments with our cutting-edge system. Your financial security is our top priority</p>
                        </li>
                        <li className="my-5 list-disc">
                            <p className="text-2xl font-medium">Fast & Reliable Payment</p>
                            <p className="mt-3 w-1/2 text-fontcolor">Swift and Secure Transactions: Enjoy lightning-fast and worry-free payments with our cutting-edge system. Your financial security is our top priority</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Services */}
            <div className="services mt-32">
                <div className="text-center py-20">
                    <p className="text-servicetext text-xl font-bold">Services</p>
                    <h3 className="text-white text-5xl font-bold mt-3">Our crafted Solutions</h3>
                </div>
                <div className="flex items-center justify-between w-full px-36 pb-20">
                    {service}
                </div>
            </div>
            {/* End of Services */}

            {/* Pay On */}
            <div className="flex items-center justify-between w-full px-44 py-20">
                <div className="w-1/2 mx-auto flex items-center justify-center">
                    <img src="/images/Group 346.png" />
                </div>
                <div className="w-1/2 p-5">
                    <h2 className="text-5xl font-bold">Ready To Get Your <span className="block mt-3">Pay On?</span></h2>
                    <p className="text-landingtextcolor my-10 text-justify text-lg w-3/4">Get ready for your close-up realiable payment gateway for your business. Experience seamless transactions with our secure payment gateway at AiPay. Shop worry-free, knowing your payments are protected. Fast, reliable, and hassle-free transactions every time</p>
                    <a href="#" className="block bg-textcolor py-4 text-white text-center rounded-xl w-1/4">Register now</a>
                </div>
            </div>
            {/* End of Pay On */}

            {/* Get Started */}
            <div className="px-40 mb-10">
                <div className="bg-servicebg relative py-32 rounded-xl">
                    <div className="flex flex-col-reverse absolute top-1 right-0">
                        <img src="/images/Ellipse 187.png" className="w-16 relative bottom-14 z-10 left-14"/>
                        <img src="/images/Ellipse 186.png" className="w-30 right-0 relative" />
                    </div>
                    <div>
                        <h3 className="text-white text-center text-4xl font-bold w-1/2 mx-auto">What Are You Waiting For? Join The Excitement of Seamless Shopping & Experience Swift Payments</h3>
                        <a href="#" className="block bg-getstartedbg w-1/4 mx-auto mt-10 py-4 text-center text-white font-bold rounded-xl">Get started</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Index;