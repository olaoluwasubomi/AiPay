import React, { useState, useEffect } from "react";
import Nav from "../Profilesetup/Nav";
import ProfileForm from "../Profilesetup/ProfileForm";
import Backbutton from "../Login/Backbutton";
import { Link, useNavigate } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import useProfileSetup from "../profileSetup/useProfileSetup";

const Profile = () => {
  const [savebutton, setsavebutton] = useState(false);
  const [proceedbtn, setproceedbtn] = useState(false);
  const [confirmbtn, setconfirmbtn] = useState(false);
  const [success, setsuccess] = useState(false);

  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  const {
    loading, profile, status, bankInfo, logoUploading,
    updateField, saveProfileNow, uploadLogoFile,
    startManualPayment, confirmManual, pollStatus,
    reloadStatus, submitNow,
  } = useProfileSetup();

  // Save -> open payment modal if unpaid; else submit & go to Under Review
  const handleSaveButton = async () => {
    await saveProfileNow();
    const s = await reloadStatus();
    if (!s?.payment?.paid) {
      setsavebutton(true);             // show "Pay for Account Organisation Review" modal
    } else {
      await submitNow();               
      navigate("/ProfileDashboard");   
    }
  };

  const handleCancelClick = () => {
    setsavebutton(false);
    setconfirmbtn(false);
  };

  const handleProceedbtn = async () => {
    setsavebutton(false);
    await startManualPayment();
    setproceedbtn(true);
  };
  const handleconfirmbtn = () => {
    setconfirmbtn(true);
    setproceedbtn(false);
  };

  const handlesuccess = async () => {
    const payerAccountName = document.querySelector("input[placeholder='Enter name of account used']")?.value || "";
    const bank = document.querySelector("input[placeholder='Enter the bank name']")?.value || "";
    const amount = Number(
      document.querySelector("input[placeholder='Enter amount paid']")?.value ||
      status?.payment?.amount || 0
    );

    await confirmManual({ payerAccountName, bank, amount });
    setsuccess(true);
    setconfirmbtn(false);
    pollStatus(5000);
  };

  useEffect(() => {
    let timer, redirectTimeout;
    if (success) {
      timer = setInterval(() => setCountdown((c) => c - 1), 1000);
      redirectTimeout = setTimeout(() => navigate("/ProfileDashboard"), 5000);
    }
    return () => { clearInterval(timer); clearTimeout(redirectTimeout); };
  }, [navigate, success]);

  const onLogoPicked = async (file) => { await uploadLogoFile(file); };

  return (
    <div>
      <Nav />
      <div className="2xl:px-44 xl:px-40 lg:px-20 md:px-10 sm:px-3 2xl:py-20 xl:py-20 lg:py-20 md:py-10 sm:py-5">
        <h4 className="text-textcolor text-4xl font-bold">Profile Set Up</h4>
        <p className="mt-2 text-profiletext text-sm">
          NB: Note that you will be required to pay a token fee for your business to be verified.
          <span className="ml-2 text-textcolor text-sm underline font-bold">Learn More</span>
        </p>

        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col items-start justify-between">
          <div className="2xl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-full sm:w-full">
            <h3 className="uppercase mt-2 font-bold">user details</h3>
            <ProfileForm profile={profile} onChange={updateField} />
          </div>

          {/* Logo box */}
          <div className="2xl:w-1/5 xl:w-1/5 lg:w-1/5 md:w-full sm:w-full bg-white shadow-lg mt-11 2xl:ml-7 xl:ml-7 lg:ml-7 md:ml-0 sm:ml-0 px-5 pt-5 pb-80 rounded-xl relative">
            <h3 className="uppercase text-formheadcolor font-bold">Logo</h3>

            {logoUploading && (
              <div className="absolute inset-0 bg-white/60 flex items-center justify-center rounded-xl">
                <span className="text-sm">Uploading...</span>
              </div>
            )}

            <div className={`mt-10 border border-dashed px-3 ${logoUploading ? "opacity-60" : ""}`}>
              {profile.logoUrl ? (
                <img
                  src={profile.logoUrl}
                  className="mx-auto mt-6 max-h-24 object-contain"
                  alt="logo"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/images/Frame 233.png"; }}
                />
              ) : (
                <img src="/images/Frame 233.png" className="mx-auto mt-16" alt="placeholder" />
              )}

              <span className="mx-auto block text-sm mt-3 text-center text-fontcolor">
                JPG or PNG smaller than 10MB
              </span>
              <p className="mt-16 font-bold text-sm text-center">Drag or drop your image here</p>

              <label className={`block my-10 bg-textcolor w-11/12 mx-auto py-5 font-semibold text-white rounded-xl text-center cursor-pointer ${logoUploading ? "pointer-events-none opacity-70" : ""}`}>
                {logoUploading ? "Uploading..." : "Choose file"}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  disabled={logoUploading}
                  onChange={(e) => e.target.files?.[0] && onLogoPicked(e.target.files[0])}
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end w-full 2xl:px-44 xl:px-44 lg:px-20 md:px-10 sm:px-5 pb-16">
        <button className="w-52 block py-5 rounded-xl border border-textcolor text-textcolor">Cancel</button>
        <button className="w-52 block py-5 ml-5 rounded-xl bg-textcolor text-white" onClick={handleSaveButton} disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </button>
      </div>

      {/* Payment explainer modal */}
      {savebutton && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white 2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-5 pt-24 pb-12 2xl:w-4/12 xl:w-4/12 lg:w-1/3 md:w-1/2 sm:w-[95%] shadow-lg relative rounded-xl">
            <button className="absolute top-3 right-3 text-black text-xl font-bold rounded-full border-2 p-2 px-3 border-black" onClick={handleCancelClick}>&#x2715;</button>
            <img src="/images/Frame 740.png" className="mx-auto" />
            <h2 className="text-2xl text-center text-textcolor font-bold mb-4 mt-10">Pay for Account Organization Review</h2>
            <p className="text-justify text-xl text-profiletext mt-5">...</p>
            <p className="mt-10 text-lg font-bold text-fontcolor text-center">
              You will be required to pay a sum of
              <span className="block uppercase text-3xl mt-3 text-textcolor">NGN {status?.payment?.amount ?? 10000}</span>
            </p>
            <Link className="block w-4/5 loginbg py-4 text-center text-white rounded-xl mt-5 mx-auto font-bold" to="" onClick={handleProceedbtn}>Proceed</Link>
          </div>
        </div>
      )}

      {/* Transfer info modal */}
      {proceedbtn && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white px-10 pt-10 pb-12 2xl:w-4/12 xl:w-4/12 lg:w-1/3 md:w-1/2 sm:w-[95%] shadow-lg relative rounded-xl">
            <Backbutton />
            <h3 className="text-xl font-bold mt-10">Transfer</h3>
            <div className="flex items-center justify-between">
              <p className="text-sm font-normal">Ensure you send the exact amount indicated</p>
              <p className="text-3xl text-textcolor font-bold flex items-center justify-center">
                <span className="mb-3 block text-sm">NGN</span>{status?.payment?.amount ?? 10000}
              </p>
            </div>
            <hr className="block border mt-3 w-11/12 mx-auto" />
            <h3 className="mx-auto w-11/12 text-xl text-center font-normal">
              Transfer <span className="text-2xl font-bold">NGN {status?.payment?.amount ?? 10000}</span> from your bank to <span className="text-2xl font-bold">{bankInfo?.accountName || "Rehohub"}</span>
            </h3>

            <div className="bg-bankbg 2xl:w-11/12 xl:w-11/12 lg:w-11/12 md:w-1/2 sm:w-full mx-auto my-5 rounded-md p-5">
              <div className="flex items-center justify-between w-full mb-2">
                <div>
                  <p className="text-lg font-semiboldl">Bank</p>
                  <h4 className="text-formheadcolor text-2xl font-bold">{bankInfo?.bankName || "GT Bank"}</h4>
                </div>
                <img src="/images/GUARANTY Trust Bank - jpeg.png"/>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <div>
                  <p className="text-lg font-semiboldl">Account Number</p>
                  <h4 className="text-formheadcolor text-2xl font-bold">{bankInfo?.accountNumber || "07019082222"}</h4>
                </div>
                <div className="flex items-center justify-center">
                  <img src="/images/solar_copy-linear.png" /><p className="ml-1">Copy</p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <div>
                  <p className="text-lg font-semiboldl">Account Name</p>
                  <h4 className="text-formheadcolor text-2xl font-bold">{bankInfo?.accountName || "Rehohub"}</h4>
                </div>
                <div className="flex items-center justify-center">
                  <img src="/images/solar_copy-linear.png" /><p className="ml-1">Copy</p>
                </div>
              </div>
            </div>

            <p className="text-xl font-normal w-11/12 mx-auto text-center">
              By continuing, you agree to our <span className="text-textcolor font-bold">Terms & Condition</span> and <span className="text-textcolor font-bold">Privacy Policy</span>
            </p>
            <Link className="block w-full loginbg py-4 text-center text-white rounded-xl mt-5 mb-5 mx-auto font-bold" to="" onClick={handleconfirmbtn}>I have Paid</Link>
            <hr className="block border mt-3 w-11/12 mx-auto" />
            <div className="flex items-center justify-center w-2/5 mx-auto mt-5 border p-2">
              <img src="/images/Rectangle 83.png" /><p className="ml-2 text-sm">Secured by <span className="text-textcolor font-extrabold">AiPay</span></p>
            </div>
          </div>
        </div>
      )}

      {/* Confirm details modal */}
      {confirmbtn && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white 2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-2 pt-24 pb-12 2xl:w-4/12 xl:w-4/12 lg:w-1/3 md:w-1/2 sm:w-[95%] shadow-lg relative rounded-xl">
            <button className="absolute top-3 right-3 text-black text-xl font-bold rounded-full border-2 p-2 px-3 border-black" onClick={handleCancelClick}>&#x2715;</button>
            <div>
              <img src="/images/Frame 741.png" className="mx-auto" />
              <h3 className="text-2xl font-semibold mt-5 text-textcolor mx-auto text-center">Confirm Payment</h3>
              <p className="mt-10 text-center font-semibold text-base">Enter your details as we confirm your payment</p>
              <form className="mt-10 2xl:px-16 xl:px-16 lg:px-10 md:px-10 sm:px-5">
                <label className="block font-semibold text-lg mt-5">Name of account</label>
                <input type="text" className="block w-full outline-none rounded-lg bg-inputbg py-4 px-3" placeholder="Enter name of account used" required />
                <label className="block font-semibold text-lg mt-5">Bank</label>
                <input type="text" className="block w-full outline-none rounded-lg bg-inputbg py-4 px-3" placeholder="Enter the bank name" />
                <label className="block font-semibold text-lg mt-5">Amount</label>
                <input type="text" className="block w-full outline-none rounded-lg bg-inputbg py-4 px-3" placeholder="Enter amount paid" defaultValue={status?.payment?.amount ?? 10000} />
              </form>
              <div className="px-16">
                <Link className="block w-full loginbg py-4 text-center text-white rounded-xl mt-10 mb-5 mx-auto font-bold" to="" onClick={handlesuccess}>Proceed</Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Loader modal */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white 2xl:px-10 xl:px-10 lg:px-8 md:px-5 sm:px-2 pt-24 pb-24 2xl:w-4/12 xl:w-4/12 lg:w-1/3 md:w-1/2 sm:w-[95%] shadow-lg relative rounded-xl loader-container">
            <div className="mx-auto flex items-center justify-center">
              <ThreeCircles visible height="100" width="100" color="#1760BA" ariaLabel="three-circles-loading" />
            </div>
            <p className="text-formheadcolor text-2xl font-semibold text-center mt-10">We are confirming your payment</p>
            <p className="text-justify 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-1/2 sm:w-full mx-auto mt-5">
              Hello Ade, we are currently awaiting the confirmation of your payment. Please hold on. We will let you know when you are set to continue.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
