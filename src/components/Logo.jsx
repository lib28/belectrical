// src/components/Logo.jsx
import React from "react";
import belectricalLogo from "../assets/belectrical-logo.png";

export default function Logo({ className = "" }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      {/* Glow behind logo */}
      <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-3xl pointer-events-none" />

      {/* Logo image */}
      <img
        src={belectricalLogo}
        alt="BELECTRICAL logo"
        className="relative w-full h-auto drop-shadow-[0_0_45px_rgba(34,211,238,0.85)]"
      />
    </div>
  );
}
