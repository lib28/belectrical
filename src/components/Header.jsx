import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
    >
      <div className="container-default py-4 flex items-center justify-between">
        <img src="/logo.png" alt="Belectrical" className="h-12 select-none" />

        <nav className="hidden sm:flex gap-8 text-sm">
          <a href="#services" className="hover:text-brand-400 transition">Services</a>
          <a href="#about" className="hover:text-brand-400 transition">About</a>
          <a href="#contact" className="hover:text-brand-400 transition">Contact</a>
        </nav>

        <a
          href="tel:+27712718590"
          className="px-5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 transition font-semibold shadow-lg shadow-brand-500/20"
        >
          Call 071 271 8590
        </a>
      </div>
    </motion.header>
  );
}
