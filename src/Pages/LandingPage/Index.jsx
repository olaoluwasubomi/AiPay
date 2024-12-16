import React from "react";
import Nav from "./Nav";
import Servicedata from "./Servicedata";
import Footer from "./Footer";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
const Index = () =>{
    const service = Servicedata.map((item, i) =>{
        return(
            <div key={i} className={`${item.bgcolor}  py-16 px-10 rounded-xl mx-auto 2xl:w-[32%] xl:w-[32%] lg:[25%] md:w-full sm:w-full 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-4 sm:mt-4`}>
                <img src={item.image} className="mx-auto" />
                <h3 className="mx-auto mt-3 text-center text-2xl font-bold">{item.head}</h3>
                <p className="text-center mt-4 w-full mx-auto font-medium">{item.text}</p>
                <a style={item.linkstyles} href="#" className="block bg-textcolor py-4 mx-auto text-white w-1/2 text-center rounded-xl">{item.link}</a>
            </div>
        )
    })
    return(
        <div className="overflow-hidden">
            <Nav />

            {/* The header */}
            <div className="flex sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row items-start justify-between w-full">
                <div className="2xl:pt-24 xl:pt-24 lg:pt-20 md:pt-16 sm:pt-10 2xl:pb-36 xl:pb-36 lg:pb-20 md:pb-0 sm:pb-0 2xl:px-20 xl:px-20 lg:px-10 md:px-5 sm:px-5 bg-gradient-to-b from-firstsec to-white w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
                    <p className="2xl:w-5/12 xl:w-5/12 lg:w-6/12 md:w-2/3 md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 sm:w-full py-5 bg-payment text-textcolor text-center rounded-xl font-bold">Easy payment, efficient services</p>
                    <h3 className="my-4 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-3xl font-bold">
                        <div className="flex items-start justify-start mb-5">
                            <TextGenerateEffect words="Secure" className="text-black inline" duration={1.5} />
                            <TextGenerateEffect words="Payment Easily" className="text-paymentcolor inline ml-2" duration={1.5} />
                        </div>
                        Anytime And From
                        <TextGenerateEffect words="Anywhere" className="text-black mt-5" duration={1.5} />
                    </h3>
                    <p className="mt-8 font-bold text-xl text-landingtextcolor 2xl:w-11/12 xl:w-11/12 lg:w-full md:w-2/3 sm:w-full">AiPay is a well secured online payment platform for indiviuals and organisations, ensuring no one ever gets stuck while waiting to verify payment.</p>
                    <div className="flex items-center justify-between 2xl:w-7/12 xl:w-7/12 lg:w-8/12 md:w-8/12 sm:w-full my-5">
                        <button className="block py-4 border-2 text-center bg-textcolor rounded-xl w-5/12 text-white font-bold text-sm">For Business</button>
                        <button className="block border-2 border-textcolor py-4 text-center rounded-xl text-textcolor font-bold w-5/12 text-sm">For Personal</button>
                    </div>
                </div>



                <div className="pt-24 pb-5 2xl:pl-10 xl:pl-10 lg:pl-10 md:pl-0 sm:pl-0 bg-gradient-to-b from-secondsec to-white w-full relative">
                    <div className="flex items-center justify-center 2xl:w-1/4  xl:w-1/4 lg:w-1/2 md:w-1/2 sm:w-1/2 py-2 text-center rounded-xl bg-white absolute 2xl:top-96 xl:top-96 lg:top-96 md:top-96 sm:top-40 -left-1 z-10">
                        <img src="/images/globe.png" className="w-1/12" />
                        <p className="pl-3 text-textcolor" data-aos="fade-right" data-aos-duration="2000">Free Online Store</p>
                    </div>
                    <div className="flex items-center flex-row-reverse justify-center 2xl:w-1/4  xl:w-1/4 lg:w-1/2 md:w-1/2 sm:w-1/2 py-2 text-center rounded-xl bg-white mt-10 absolute inset-x-2/3 2xl:top-48 xl:top-48 lg:top-48 md:top-48 sm:top-5">
                        <img src="/images/navigation.png" className="w-1/12" />
                        <p className="pr-3 text-textcolor z-10" data-aos="fade-down" data-aos-duration="2000">Seamless transaction</p>
                    </div>
                    {/* Images */}
                    <div className="flex items-start justify-between w-full">
                        {/* First Image */}
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full relative">
                            <img src="/images/Soft Star.png" className="flex items-start justift-start relative z-10 -top-14 2xl:block xl:block lg:block md:hidden sm:hidden" />
                            <img src="/images/Vector 8.png" className="absolute top-16 2xl:block xl:block lg:block md:hidden sm:hidden" />
                            <div className="flex items-start justify-start w-full relative">
                                <img src="/images/Mask group.png" className="2xl:ml-16 xl:ml-16 lg:ml-16 md:ml-4 sm:ml-5 2xl:-mt-16 xl:-mt-16 lg:-mt-10 md:-mt-0 sm:-mt-7 w-full" />
                                <img src="/images/Group 18.png" className="absolute left-60 mt-14 w-1/2 mr-0"/>
                             </div>
                        </div>

                        {/* Second Image */}
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full 2xl:ml-20 xl:ml-20 lg:ml-10 md:ml-10 sm:ml-7">
                            <img src="/images/Rectangle 51.png" className="w-full" />
                            <img src="/images/Mask group (1).png" className="2xl:mt-8 xl:mt-8 lg:mt-8 md:mt-5 sm:mt-1 w-full" />
                        </div>

                        {/* Third Image */}
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full flex items-end justify-end flex-col relative">
                            <img src="/images/arrow transition.png" className="w-2/3 absolute -top-20 2xl:block xl:block lg:block md:hidden sm:hidden" />
                            <img src="/images/Mask group (2).png" className="2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-full sm:w-full 2xl:mt-12 xl:mt-12 lg:mt-10 md:mt-0 sm:mt-0" />
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* End of Header */}

            {/* Rating */}
            <div className="flex items-center justify-between w-full 2xl:px-24 xl:px-24 lg:px-10 md:px-10 sm:px-5 2xl:mt-44 xl:mt-44 lg:mt-44 md:mt-10 sm:mt-10 flex-wrap">
                <div className="2xl:w-1/5 xl:w-1/5 lg:w-1/5 md:w-1/4 sm:w-[45%] py-5 mx-auto text-center rounded-xl border-2 border-black">
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
                <div  className="2xl:w-1/5 xl:w-1/5 lg:w-1/5 md:w-1/4 sm:w-[45%] py-6 mx-auto text-center rounded-xl border-2 border-black">
                    <p className="text-3xl font-bold">20K+</p>
                    <p className="mt-5">Standard users</p>
                </div>
                <div  className="2xl:w-1/5 xl:w-1/5 lg:w-1/5 md:w-1/4 sm:w-[45%] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-4 sm:mt-4 py-6 mx-auto text-center rounded-xl border-2 border-black">
                    <img src="/images/ic_outline-favorite.png" className="mx-auto" />
                    <p className="mt-5">Best in the  market</p>
                </div>
                <div  className="2xl:w-1/5 xl:w-1/5 lg:w-1/5 md:w-1/4 sm:w-[45%] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-4 sm:mt-4 py-6 mx-auto text-center rounded-xl border-2 border-black">
                    <p className="text-3xl font-bold">20K+</p>
                    <p className="mt-5">Standard users</p>
                </div>
            </div>
            {/* End of Ratings */}

            {/* Difference Section */}
            {/* <div className="flex flex-col-reverse absolute -inset-y-[calc(75%+20%)] right-0 2xl:block xl:block lg:block md:hidden sm:hidden">
                <img src="/images/Ellipse 185.png" className="w-full relative bottom-20"/>
                <img src="/images/Ellipse 184.png" className="w-full relative" />
            </div> */}
            <div className="flex flex-col-reverse absolute right-0 2xl:block xl:block lg:block md:hidden sm:hidden">
                <img src="/images/Ellipse 185.png" className="w-28 relative bottom-20 2xl:-bottom-32 xl:-bottom-28 lg:-bottom-24" />
                <img src="/images/Ellipse 184.png" className="w-28 relative" />
            </div>

            <div className="mt-24 2xl:px-24 xl:px-24 lg:px-24 md:px-10 sm:px-5 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse items-center justify-between w-full relative">
                {/* First section */}
                <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full relative">
                    <div className="flex relative">
                        <img src="/images/Rectangle 78.png" className="z-10" />
                        <img src="/images/Rectangle 79.png" className="z-0 absolute top-0 left-0 mt-10 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-6 sm:ml-3"/>
                    </div>
                    
                    <div className="bg-textcolor 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-full sm:w-1/2 py-3 text-center rounded-xl text-white flex items-center justify-between px-7 2xl:top-96 xl:top-96 lg:top-96 md:top-80 sm:top-80 2xl:right-44 xl:right-44 lg:right-44 md:right-20 sm:right-1 absolute z-10">
                        <h5 className="text-3xl font-bold">88%</h5>
                        <p>Revenue Growth</p>
                    </div>
                </div>

                {/* Second Section */}
                <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full sm:px-5 md:px-5 lg:px-0 xl:px-0 2xl:px-0">
                    <h4 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl font-bold capitalize">Why are we different?</h4>
                    <ul className="custom-list">
                        <li className="my-5 list-disc">
                            <p className="text-2xl font-bold">Fast & Reliable Payment</p>
                            <p className="mt-3 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full text-fontcolor">Swift and Secure Transactions: Enjoy lightning-fast and worry-free payments with our cutting-edge system. Your financial security is our top priority</p>
                        </li>
                        <li className="my-5 list-disc">
                            <p className="text-2xl font-bold">Fast & Reliable Payment</p>
                            <p className="mt-3 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full text-fontcolor">Swift and Secure Transactions: Enjoy lightning-fast and worry-free payments with our cutting-edge system. Your financial security is our top priority</p>
                        </li>
                        <li className="my-5 list-disc">
                            <p className="text-2xl font-bold">Fast & Reliable Payment</p>
                            <p className="mt-3 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full text-fontcolor">Swift and Secure Transactions: Enjoy lightning-fast and worry-free payments with our cutting-edge system. Your financial security is our top priority</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Services */}
            <div className="services mt-32">
                <div className="text-center 2xl:py-20 xl:py-20 lg:py-20 md:py-10 sm:py-10">
                    <p className="text-servicetext text-xl font-bold">Services</p>
                    <h3 className="text-white text-5xl font-bold mt-3">Our crafted Solutions</h3>
                </div>
                <div className="flex items-center justify-between  py-10 2xl:px-20 xl:px-20 lg:px-10 md:px-5 sm:px-3 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col">
                    {service}
                </div>
            </div>
            {/* End of Services */}

            {/* Pay On */}
            <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col  items-center justify-between w-full 2xl:px-44 xl:px-44 lg:px-32 md:px-5 sm:px-5 py-20">
                <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full mx-auto flex items-center justify-center">
                    <img src="/images/Group 346.png" />
                </div>
                <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full p-5">
                    <h2 className="2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl font-bold">Ready To Get Your <span className="block mt-3">Pay On?</span></h2>
                    <p className="text-landingtextcolor my-10 text-justify text-lg 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-full sm:w-full">Get ready for your close-up realiable payment gateway for your business. Experience seamless transactions with our secure payment gateway at AiPay. Shop worry-free, knowing your payments are protected. Fast, reliable, and hassle-free transactions every time</p>
                    <a href="#" className="block bg-textcolor py-4 text-white text-center rounded-xl 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-full sm:w-full">Register now</a>
                </div>
            </div>
            {/* End of Pay On */}

            {/* Get Started */}
            <div className="2xl:px-40 xl:px-40 lg:px-20 md:px-5 sm:px-5 mb-10">
                <div className="bg-servicebg relative 2xl:py-32 xl:py-32 lg:py-20 md:py-10 sm:py-10 rounded-xl">
                    <div className="flex flex-col-reverse absolute top-1 right-0">
                        <img src="/images/Ellipse 187.png" className="w-16 relative bottom-14 z-10 left-14"/>
                        <img src="/images/Ellipse 186.png" className="w-30 right-0 relative" />
                    </div>
                    <div>
                        <h3 className="text-white text-center 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl font-bold 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full mx-auto">What Are You Waiting For? Join The Excitement of Seamless Shopping & Experience Swift Payments</h3>
                        <a href="#" className="block bg-getstartedbg 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-2/3 sm:w-2/3 mx-auto mt-10 py-4 text-center text-white font-bold rounded-xl">Get started</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Index;