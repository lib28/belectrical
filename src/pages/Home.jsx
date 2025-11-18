// src/pages/Home.jsx
import React from "react";
import Logo from "../components/Logo";
import "../index.css";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Static noise overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.18] mix-blend-soft-light"
        style={{
          backgroundImage: "url('/noise.png')",
          backgroundSize: "cover",
        }}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-24">
        {/* Background glow */}
        <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-60 -left-40 w-[40rem] h-[40rem] bg-blue-700/10 blur-3xl rounded-full" />

        <div className="container-default relative grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE (Logo + Title + Buttons) */}
          <div className="relative z-50 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* LOGO */}
            <Logo className="w-64 sm:w-80 md:w-[420px] mb-10" />

            {/* TITLE */}
            <h1 className="electric-text text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-xl">
              Cape Town’s Elite Electricians
            </h1>

            {/* SUBTITLE */}
            <p className="mt-4 text-slate-300 text-lg max-w-md">
              Installations • Fault Finding • Compliance Certificates • Solar • 24/7 Emergency Support
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="tel:+27712718590"
                className="px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold shadow-[0_0_25px_rgba(56,189,248,0.6)] hover:bg-cyan-400 transition"
              >
                Call 071 271 8590
              </a>

              <a
                href="https://wa.me/27712718590?text=Hi%20I%20need%20electrical%20help"
                className="px-8 py-4 rounded-xl border border-cyan-400 text-cyan-300 hover:text-cyan-100 hover:border-cyan-200 transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* RIGHT SIDE (Hero Cards / Stats) */}
          <div className="relative z-40 hidden lg:block">
            <div className="bg-slate-800/40 border border-white/10 rounded-2xl p-10 backdrop-blur-md shadow-xl">
              <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
                Why Choose BELECTRICAL?
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>⚡ Registered & compliant</li>
                <li>⚡ Neat, labelled installations</li>
                <li>⚡ Fast fault diagnosis</li>
                <li>⚡ Solar & backup power specialists</li>
                <li>⚡ Transparent pricing</li>
                <li>⚡ Cape Town & surrounds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 relative z-50">
        <h2 className="text-center text-3xl sm:text-4xl font-bold electric-text mb-12">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            "Electrical Installations",
            "Compliance Certificates (COC)",
            "Fault Finding & Repairs",
            "Solar / Backup Power",
            "Renovations & New Builds",
            "Emergency Call-Outs",
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-800/60 border border-white/10 shadow-lg backdrop-blur-sm hover:bg-slate-800/80 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                {service}
              </h3>
              <p className="text-slate-400 text-sm">
                Professional, neat, and fully compliant workmanship.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-slate-400 text-sm border-t border-white/10 relative z-50">
        © {new Date().getFullYear()} BELECTRICAL — Cape Town, South Africa
      </footer>
    </main>
  );
}
