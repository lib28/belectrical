import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-16 py-10 border-t border-white/10">
      <div className="container-default grid gap-6 sm:flex sm:items-center sm:justify-between">
        <Logo />
        <p className="text-white/60 text-sm">
          © {new Date().getFullYear()} BELECTRICAL — Cape Town & surrounds • WhatsApp/Call 071 271 8590
        </p>
        <div className="text-white/60 text-sm">
          <a href="tel:+27712718590" className="text-brand-400 hover:text-brand-300">Call</a>
          <span className="mx-2 opacity-40">•</span>
          <a href="https://wa.me/27712718590?text=Hi%20BELECTRICAL" className="text-brand-400 hover:text-brand-300">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
