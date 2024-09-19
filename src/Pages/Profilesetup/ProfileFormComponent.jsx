import React from "react";
const ProfileFormComponent = ({head, fields=[]}) =>{
    return(
        <div className="">
            <h3 className="text-xl text-formheadcolor">{head}</h3>
            <form>
                {fields.map((field, i)=> {
                    return (
                        <div key={i} className="flex flex-wrap items-center justify-between mt-3">
                            <label className="text-formheadcolor">{field.label}</label>
                            {field.type === 'textarea' ? (
                                    <textarea
                                        className="block outline-none w-full px-4 py-4 inputbg textcolor rounded-xl placeholder-custom-gray bg-inputbg resize-none h-40"
                                        placeholder={field.placeholder}
                                        name={field.name}
                                        required
                                    />
                                ) : field.type === 'select' ? (
                                    <select
                                        className="block outline-none w-2/3 px-4 py-4 inputbg textcolor rounded-xl bg-inputbg placeholder-custom-gray"
                                        name={field.name}
                                        required
                                    >
                                        <option value="">{field.placeholder}</option>
                                        {field.options.map((option, idx) => (
                                            <option key={idx} value={option}>{option}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        className="block outline-none w-2/3 px-4 py-4 inputbg textcolor rounded-xl bg-inputbg placeholder-custom-gray"
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
        </div>
    )
}
export default ProfileFormComponent;