import React from "react";
import ProfileFormComponent from "./ProfileFormComponent";
// import ProfileFields from "./Profilefields"
import { ProfileFields } from "./Profilefields";
import { ProfileFields2 } from "./Profilefields";
import { ProfileFields3 } from "./Profilefields";
import { ProfileFields4 } from "./Profilefields";
// import ProfileFields, { ProfileFields3, ProfileFields4 } from "./ProfileFields";
// import { ProfileFields2 } from "./ProfileFields";
const ProfileForm = () =>{
    return(
        <div className="flex items-start flex-wrap justify-between w-full bg-white rounded-xl shadow-xl px-5 py-5 mt-3">
            <div className="formwidth mb-10">
                <ProfileFormComponent 
                head = "General Information"
                fields={ProfileFields}
                />
            </div>
            <div className="formwidth mb-10">
                <ProfileFormComponent
                head = "Location"
                fields={ProfileFields2}
                />
            </div>
            
            <div className="formwidth">
                <ProfileFormComponent 
                head ="Financial Information"
                fields = {ProfileFields3}
                />
            </div>
            <div className="formwidth">
                <ProfileFormComponent
                head="About Business"
                fields = {ProfileFields4} 
                />
            </div>
           
        </div>
    )
}
export default ProfileForm;