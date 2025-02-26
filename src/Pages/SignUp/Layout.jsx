import React from "react";
import BackgroundImage from "../Login/BackgroundImage";
const Layout = ({children}) =>{
    return(
        <div>
            <div className="flex items-center justify-start w-full">
                <div className="2xl:w-1/2  xl:w-1/2 lg:w-1/2 md:w-1/2">
                    <BackgroundImage />
                </div>
                <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full 2xl:px-20 xl:px-20 lg:px-5 md:px-2 sm:px-5 2xl:py-20 xl:py-0 lg:py-0 md:py-0 sm:py-12 h-screen">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Layout;