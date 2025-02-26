import React from "react"
import Navigation from "../Dashboard/Navigation"

const Layout = ({children}) =>{
    return(
        <div className="h-screen bg-bankbg flex justify-between items-start">
            {/* Navigation */}
            <Navigation />
            {/* Main Content */}
            <main className="w-4/5">{children}</main>
        </div>
    )
}
export default Layout;