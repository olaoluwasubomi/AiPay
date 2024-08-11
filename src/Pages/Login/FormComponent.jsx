import React from "react";
import { Link} from "react-router-dom";
const FormComponent = ({heading,text,fields=[]}) =>{
    return(
        <div>
            <h3 className="text-3xl font-bold signup">{heading}</h3>
            <p className="mt-2 textcolor text-base w-2/3">{text}</p>

            <form>
                {fields.map((field, i) => {
                    return(
                        <div key={i}>
                            <label className="mt-10 block px-2 font-bold">{field.label}</label>
                            <div className="flex items-center mt-2  inputbg justify-between w-2/3  px-4 rounded-xl">
                                <input className="block outline-none w-2/3 py-4 inputbg textcolor rounded-xl placeholder-custom-gray" 
                                    type={field.type} 
                                    placeholder={field.placeholder}
                                    name={field.name}
                                    required
                                />

                                <p className="text-2xl">{field.icon}</p>
                            </div>
                            
                            
                        </div>
                        
                    )
                })}
            </form>
            {/* <a href="#" className="flex items-center justify-end w-2/3 mt-2 signup font-semibold text-base">{link}</a> */}
            
        </div>
    )
}
export default FormComponent;