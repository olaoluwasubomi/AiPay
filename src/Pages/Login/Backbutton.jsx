import React from "react";
import { TiArrowBackOutline } from "react-icons/ti";

const Backbutton = () =>{
    return(
        <div>
            <a href ="" className="flex items-center justify-start w-1/3 text-xl text-white gap-x-2 signup font-bold"><TiArrowBackOutline className="font-bold text-3xl"  />Back</a>
        </div>
    )
}
export default Backbutton;