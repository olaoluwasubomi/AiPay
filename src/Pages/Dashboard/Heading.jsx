import React from "react";
const Heading = (prop) =>{
    return(
        <div className="flex items-center justify-between bg-white w-full px-7 py-2">
            <div className="w-1/2">
                <h5 className="text-2xl font-bold">{prop.header}</h5>
                <p className="mt-1">{prop.text}</p>
            </div>
            <div className="flex items-center justify-end w-1/4">
                <img src="/images/Frame 632.png" />
                <img src="/images/Frame 631.png" className="ml-2" />
            </div>
        </div>
    )
}
export default Heading;