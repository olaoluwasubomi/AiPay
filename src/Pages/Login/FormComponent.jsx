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
                            <label className="mt-5 block px-2 font-bold">{field.label}</label>
                            {field.type === 'textarea' ? (
                                    <textarea
                                        className="block outline-none w-2/3 px-4 py-4 inputbg textcolor rounded-xl placeholder-custom-gray resize-none h-40"
                                        placeholder={field.placeholder}
                                        name={field.name}
                                        required
                                    />
                                ) : field.type === 'select' ? (
                                    <select
                                        className="block outline-none w-2/3 px-4 py-4 inputbg textcolor rounded-xl placeholder-custom-gray"
                                        name={field.name}
                                        required
                                    >
                                        <option value="">{field.placeholder}</option>
                                        {/* Add select options here */}
                                        <option value="industry1">Industry 1</option>
                                        <option value="industry2">Industry 2</option>
                                    </select>
                                ) : (
                                    <input
                                        className="block outline-none w-2/3 px-4 py-4 inputbg textcolor rounded-xl placeholder-custom-gray"
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        name={field.name}
                                        required
                                    />
                                )}
                            
                            
                        </div>
                        
                    )
                })}
            </form>
            {/* <a href="#" className="flex items-center justify-end w-2/3 mt-2 signup font-semibold text-base">{link}</a> */}
            
        </div>
    )
}
export default FormComponent;