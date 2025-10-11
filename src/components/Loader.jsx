// src/components/Loader.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * Professional centered Loader
 * - Shows your app logo (or fallback text)
 * - Animated pulsing progress bar below it
 * - Works in fullscreen or inline mode
 */
export default function Loader({
  fullscreen = false,
  text = "Loading...",
  logo = "public/images/logo.png", // Change to your actual logo path
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        fullscreen ? "fixed inset-0 bg-white/80 z-50 backdrop-blur-sm" : "py-10"
      }`}
    >
      {/* Logo or fallback circle */}
      {logo ? (
        <motion.img
          src={logo}
          alt="Loading..."
          className="w-20 h-20 object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: [1, 1.05, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : (
        <motion.div
          className="h-12 w-12 rounded-full bg-blue-600/90"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Progress bar */}
      <div className="relative w-40 h-1.5 bg-gray-200 rounded-full mt-6 overflow-hidden">
        <motion.div
          className="absolute h-full bg-blue-600 rounded-full"
          initial={{ x: "-100%" }}
          animate={{ x: ["-100%", "0%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Optional text */}
      {text && (
        <p className="mt-4 text-gray-600 font-medium text-sm animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}
