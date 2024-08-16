import React from "react";
import BackgroundImage from "../Login/BackgroundImage";
const Layout = ({children}) =>{
    return(
        <div>
            <div className="flex items-center justify-start w-full">
                <div className="w-1/2">
                    <BackgroundImage />
                </div>
                <div className="w-1/2 px-20 py-5">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Layout;