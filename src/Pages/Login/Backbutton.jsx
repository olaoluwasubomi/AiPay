import React from "react";
import { useNavigate } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";

export default function Backbutton({ className = "" }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className={
        "flex items-center gap-2 text-sm font-semibold text-[#1d56b3] hover:underline " +
        className
      }
    >
      <TiArrowBackOutline className="text-lg" />
      Back
    </button>
  );
}
