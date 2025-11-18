import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur sticky top-0 z-50">
      <div className="container-default py-3 flex items-center justify-between">
        <Link to="/"><Logo /></Link>
        <nav className="flex items-center gap-4 sm:gap-6 text-sm">
          <NavLink to="/services" className="hover:text-brand-400">Services</NavLink>
          <NavLink to="/coc" className="hover:text-brand-400">CoC</NavLink>
          <NavLink to="/fencing" className="hover:text-brand-400">Electric Fencing</NavLink>
          <NavLink to="/contact" className="hover:text-brand-400">Contact</NavLink>
          <a href="tel:+27712718590" className="rounded-lg bg-brand-500 hover:bg-brand-600 px-3 py-2 font-semibold">
            071 271 8590
          </a>
        </nav>
      </div>
    </header>
  );
}
