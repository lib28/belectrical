// src/App.jsx
import React from "react";
import "./index.css";

import logo from "./assets/belectrical-logo.png";
import heroVideo from "./assets/belectrical-hero.mp4";

import project1 from "./assets/project-1.png";
import project2 from "./assets/project-2.png";
import project3 from "./assets/project-3.png";
import project4 from "./assets/project-4.png";
import project5 from "./assets/project-5.png";
import project6 from "./assets/project-6.png";

const services = [
  {
    title: "DB Boards & Compliance",
    body: "Single & three-phase DBs, labeling, load balancing and SANS-compliant CoCs.",
  },
  {
    title: "Fault Finding",
    body: "Tripping breakers, nuisance RCDs, hot smells, burnt wiring and mystery outages.",
  },
  {
    title: "Solar & Backup",
    body: "Inverters, batteries, essential circuits and clean, serviceable wiring.",
  },
  {
    title: "Lighting Upgrades",
    body: "Downlights, LED strips, feature lighting and energy-efficient retrofits.",
  },
  {
    title: "Plugs & Renovations",
    body: "New circuits, kitchen/bathroom rewires and additions for renovations.",
  },
  {
    title: "Emergency Call-outs",
    body: "Fast response in Cape Town and surrounds for urgent electrical issues.",
  },
];

const projects = [
  {
    img: project1,
    label: "DB Board – Before/After",
    tag: "Neatening & compliance",
  },
  {
    img: project2,
    label: "Inverter & Backup Install",
    tag: "Load-shedding ready",
  },
  {
    img: project3,
    label: "Lighting Upgrade",
    tag: "Before / after ambience",
  },
  {
    img: project4,
    label: "SA Plug Installation",
    tag: "Neat & level finish",
  },
  {
    img: project5,
    label: "Solar Panel Install",
    tag: "Roof-mount array",
  },
  {
    img: project6,
    label: "Fault Finding & Repair",
    tag: "Burnt wiring fixed",
  },
];

export default function App() {
  const currentYear = new Date().getFullYear();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") || "";
    const area = form.get("area") || "";
    const issue = form.get("issue") || "";

    const text = `Hi BELECTRICAL,%0A%0AI'm ${encodeURIComponent(
      name
    )} in ${encodeURIComponent(
      area
    )} and I need help with:%0A${encodeURIComponent(
      issue
    )}%0A%0APlease let me know availability.`;

    window.open(`https://wa.me/27712718590?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Static noise overlay */}
      <div className="noise-overlay pointer-events-none" />

      {/* ---------- TOP NAV ---------- */}
      <header className="sticky top-0 z-30 border-b border-cyan-500/10 bg-slate-950/80 backdrop-blur">
        <div className="container-default flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            {/* Small logo in nav */}
            <div className="relative h-12 w-12 rounded-2xl bg-slate-900/80 ring-1 ring-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.45)] overflow-hidden flex items-center justify-center">
              <img
                src={logo}
                alt="Belectrical logo"
                className="h-10 w-10 object-contain"
              />
            </div>

            <div className="leading-tight">
              <p className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                Belectrical
              </p>
              <p className="text-[11px] text-slate-400">
                Registered electricians • Cape Town
              </p>
            </div>
          </div>

          <nav className="hidden sm:flex items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#services" className="hover:text-cyan-300">
              Services
            </a>
            <a href="#gallery" className="hover:text-cyan-300">
              Gallery
            </a>
            <a href="#contact" className="hover:text-cyan-300">
              Contact
            </a>
            <a
              href="tel:+27712718590"
              className="btn-electric rounded-full px-4 py-2 text-xs font-semibold bg-cyan-500 text-black"
            >
              Call 071 271 8590
            </a>
          </nav>
        </div>
      </header>

      {/* ---------- HERO ---------- */}
      <main>
        <section id="hero" className="relative pt-16 pb-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.2),transparent_55%)]" />

          <div className="relative container-default text-center">
            {/* VIDEO HERO “LOGO” */}
            <div className="mx-auto mb-8 w-full max-w-xl rounded-[1.75rem] border border-cyan-400/40 bg-slate-900/70 shadow-[0_0_40px_rgba(56,189,248,0.65)] overflow-hidden relative">
              <video
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              {/* subtle gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </div>

            {/* Electric heading */}
            <h1 className="electric-text text-4xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl mx-auto leading-tight">
              Cape Town&apos;s{" "}
              <span className="block sm:inline">elite electricians</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-slate-300 text-lg">
              Electrician in Cape Town for DB boards, CoCs, solar, backups and
              fault finding — done properly, labeled, and to regulation.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+27712718590"
                className="btn-electric bg-cyan-500 px-7 py-3 rounded-xl font-semibold text-black"
              >
                📞 Call 071 271 8590
              </a>
              <a
                href="https://wa.me/27712718590?text=Hi%20BELECTRICAL,%20I%20need%20help"
                className="btn-electric border border-cyan-400 px-7 py-3 rounded-xl font-semibold text-cyan-200"
              >
                💬 WhatsApp a fault
              </a>
            </div>

            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">
              Registered electricians • Electrical contractor Cape Town • Table
              View • CBD • Bellville
            </p>
          </div>
        </section>

        {/* ---------- SERVICES ---------- */}
        <section id="services" className="py-20 border-t border-white/5">
          <div className="container-default">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Services we offer
                </h2>
                <p className="mt-3 text-slate-300 max-w-xl">
                  From new builds and renovations to emergency call-outs, we
                  focus on safe, neat and compliant work by a certified,
                  registered electrician.
                </p>
              </div>
              <p className="text-xs text-slate-400 max-w-xs">
                Registered, insured and experienced in{" "}
                <span className="text-cyan-300">
                  DB boards, CoCs, solar, automation and custom installs
                </span>
                .
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="glass-panel glass-hover p-6 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-300">{s.body}</p>
                  </div>
                  <div className="mt-4 text-xs text-cyan-300 uppercase tracking-[0.2em]">
                    BELECTRICAL • CAPE TOWN
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- GALLERY ---------- */}
        <section id="gallery" className="py-20 border-t border-white/5">
          <div className="container-default">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Real project results
                </h2>
                <p className="mt-3 text-slate-300 max-w-xl">
                  Before/after shots that show the difference between &quot;just
                  working&quot; and{" "}
                  <span className="text-cyan-300">done properly</span>.
                </p>
              </div>
              <p className="text-xs text-slate-400 max-w-xs">
                All photos represent typical work quality and South African
                electrical standards.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((p, idx) => (
                <figure
                  key={idx}
                  className="glass-panel glass-hover overflow-hidden flex flex-col"
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={p.img}
                      alt={p.label}
                      className="h-52 w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  </div>
                  <figcaption className="p-4">
                    <p className="font-semibold text-sm">{p.label}</p>
                    <p className="mt-1 text-xs text-cyan-300">{p.tag}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CONTACT ---------- */}
        <section
          id="contact"
          className="py-20 border-t border-white/5 bg-gradient-to-b from-slate-950 to-slate-950"
        >
          <div className="container-default grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Book an electrician
              </h2>
              <p className="mt-3 text-slate-300 max-w-xl">
                Send us a quick WhatsApp with your issue and area. We&apos;ll
                reply with options and availability.
              </p>

              <form
                className="mt-8 space-y-4 glass-panel p-6"
                onSubmit={handleContactSubmit}
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-lg bg-slate-900/80 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-cyan-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Area / suburb
                  </label>
                  <input
                    name="area"
                    required
                    className="w-full rounded-lg bg-slate-900/80 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-cyan-400"
                    placeholder="e.g. Table View, CBD, Bellville"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    What&apos;s wrong?
                  </label>
                  <textarea
                    name="issue"
                    required
                    rows={4}
                    className="w-full rounded-lg bg-slate-900/80 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-cyan-400"
                    placeholder="Briefly describe the problem (tripping, no power in rooms, burning smell, new install, etc.)"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-electric w-full rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-black"
                >
                  Send via WhatsApp
                </button>

                <p className="text-[11px] text-slate-500">
                  No spam, ever. We only use your details to respond to your
                  enquiry.
                </p>
              </form>
            </div>

            <aside className="space-y-4">
              <div className="glass-panel p-6">
                <h3 className="text-sm font-semibold mb-2">
                  Direct contact details
                </h3>
                <p className="text-sm text-slate-300">
                  Phone / WhatsApp:{" "}
                  <a href="tel:+27712718590" className="text-cyan-300">
                    071 271 8590
                  </a>
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Service area: Cape Town & surrounds.
                </p>
              </div>

              <div className="glass-panel p-6">
                <h3 className="text-sm font-semibold mb-2">
                  Why clients call us back
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  <li>• Neat, labeled DB boards</li>
                  <li>• Honest quoting & clear options</li>
                  <li>• Respect for your home / business</li>
                  <li>• CoCs and test results on request</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        © {currentYear} BELECTRICAL • Cape Town, South Africa
      </footer>
    </div>
  );
}
