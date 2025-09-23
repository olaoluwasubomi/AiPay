import React from "react";
import ProfileFormComponent from "./ProfileFormComponent";
import { ProfileFields, ProfileFields2, ProfileFields3, ProfileFields4 } from "./Profilefields";

const ProfileForm = ({ profile, onChange }) => {
  return (
    <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col items-start flex-wrap justify-between w-full bg-white rounded-xl shadow-xl px-5 py-5 mt-3">
      <div className="2xl:w-[49%] xl:w-[49%] lg:w-[49%] md:w-full sm:w-full mb-10">
        <ProfileFormComponent head="General Information" group="general" fields={ProfileFields} values={profile.general} onChange={onChange} />
      </div>
      <div className="2xl:w-[49%] xl:w-[49%] lg:w-[49%] md:w-full sm:w-full mb-10">
        <ProfileFormComponent head="Location" group="location" fields={ProfileFields2} values={profile.location} onChange={onChange} />
      </div>
      <div className="2xl:w-[49%] xl:w-[49%] lg:w-[49%] md:w-full sm:w-full">
        <ProfileFormComponent head="Financial Information" group="financial" fields={ProfileFields3} values={profile.financial} onChange={onChange} />
      </div>
      <div className="2xl:w-[49%] xl:w-[49%] lg:w-[49%] md:w-full sm:w-full">
        <ProfileFormComponent head="About Business" group="business" fields={ProfileFields4} values={profile.business} onChange={onChange} />
      </div>
    </div>
  );
};
export default ProfileForm;
