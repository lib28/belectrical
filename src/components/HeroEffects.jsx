import { motion } from "framer-motion";

export default function HeroEffects() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      
      {/* Electric glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"
      />

      {/* Electric pulse */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.4 }}
        animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 w-48 h-48 bg-amber-400/20 blur-2xl rounded-full"
      />

      {/* Small sparks */}
      <motion.div
        className="absolute top-[40%] left-[45%] text-blue-300/70 text-3xl"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        ✧
      </motion.div>

      <motion.div
        className="absolute top-[55%] left-[35%] text-amber-300/70 text-2xl"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.1, repeat: Infinity }}
      >
        ✦
      </motion.div>
    </div>
  );
}
