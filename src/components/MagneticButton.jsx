import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  onClick,
  variant = "solid",
}) {
  const base =
    "relative overflow-hidden rounded-xl px-5 py-3 text-sm font-semibold tracking-wide transition";

  const styles =
    variant === "outline"
      ? base +
        " border border-emerald-400/70 bg-transparent text-emerald-200 hover:bg-emerald-400 hover:text-black"
      : base +
        " bg-emerald-500 text-black shadow-lg shadow-emerald-500/40 hover:bg-emerald-400";

  return (
    <motion.button
      type="button"
      className={styles}
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
