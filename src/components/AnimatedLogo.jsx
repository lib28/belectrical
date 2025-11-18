import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo-belectrical-large.png";

export default function AnimatedLogo() {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Electric glow behind */}
      <motion.div
        className="absolute w-[40rem] h-[40rem] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,150,255,0.35), transparent 70%)" }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Logo */}
      <motion.img
        src={logo}
        alt="BELECTRICAL Logo"
        className="relative w-[28rem] md:w-[34rem] drop-shadow-[0_0_25px_rgba(0,120,255,0.9)]"
        animate={{
          filter: [
            "drop-shadow(0 0 20px rgba(0,150,255,0.6))",
            "drop-shadow(0 0 35px rgba(0,150,255,1))",
            "drop-shadow(0 0 20px rgba(0,150,255,0.6))",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Lightning flicker */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
          repeatDelay: Math.random() * 3 + 1.5,
        }}
        style={{
          background: "url('/noise.png')",
          mixBlendMode: "screen",
        }}
      />
    </motion.div>
  );
}
