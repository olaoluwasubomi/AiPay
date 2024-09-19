import React from "react";
const Footer = () =>{
    return(
        <div className="bg-footerbg px-40 py-10 flex items-start justify-between w-full">
           <div className="w-1/5">
                <button className="logobtn px-6 py-2  text-white rounded-lg text-sm">Logo</button>
                <p className="mt-8 text-agree font-bold w-full text-sm">AiPay is a well secured online payment platform for indiviuals and organisations, ensuring no one ever gets stuck while waiting to verify payment.</p>
            </div>
            <div className="w-1/5">
                <h4 className="text-agree font-bold text-xl capitalize">Company</h4>
                <a href="#" className="block mb-2 font-semibold text-agree">About Us</a>
                <a href="#" className="block mb-2 font-semibold text-agree">Contact</a>
            </div>
            <div className="w-1/5">
                <h4 className="text-agree font-bold text-xl capitalize">Our Services</h4>
                <a href="#" className="block mb-2 font-semibold text-agree">Payment Integration</a>
                <a href="#" className="block mb-2 font-semibold text-agree">E-store</a>
                <a href="#" className="block mb-2 font-semibold text-agree">Classic Products</a>
            </div>
            <div className="w-1/5">
                <h4 className="text-agree font-bold text-xl capitalize">What Can I Sell on AiPay?</h4>
                <a href="#" className="block mb-2 font-semibold text-agree">Accessories</a>
                <a href="#" className="block mb-2 font-semibold text-agree">Fashion & Cloths</a>
                <a href="#" className="block mb-2 font-semibold text-agree">Kitchen Utensils</a>
                <a href="#" className="block mb-2 font-semibold text-agree">Automobile</a>
                <a href="#" className="block mb-2 font-semibold text-agree">Phones & Computers</a>
                <a href="#" className="block mb-2 font-semibold text-agree">Books</a>
                <a href="#" className="block mb-2 font-semibold text-agree">And lots more</a>
            </div>
        </div>
    )
}
export default Footer;