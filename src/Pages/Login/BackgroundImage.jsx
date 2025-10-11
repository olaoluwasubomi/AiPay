import React from "react";

/**
 * Left-side brand panel. Replace the background with your asset if needed.
 * Mobile: hidden; shows from lg+ to match the screenshot.
 */
export default function BackgroundImage() {
  return (
    <div
      className="h-full w-full"
      style={{
        background:
          "url(/images/auth/auth-bg-pattern.png), linear-gradient(0deg, #0f4ca2 0%, #0f4ca2 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {/* Logo button */}
      <div className="p-8">
        <button className="rounded-lg bg-white/10 px-6 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur">
          AiPay
        </button>
      </div>
    </div>
  );
}
