import React from "react";

export default function Gallery() {
  const images = [
    { src: "/src/assets/project-1.png", label: "DB Board – Before/After" },
    { src: "/src/assets/project-2.png", label: "Inverter Installation" },
    { src: "/src/assets/project-3.png", label: "Lighting Upgrade" },
    { src: "/src/assets/project-4.png", label: "Plug Installation (SA Type)" },
    { src: "/src/assets/project-5.png", label: "Solar Panel Setup" },
    { src: "/src/assets/project-6.png", label: "Fault Finding Repair" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      <div className="container-default">
        <h1 className="electric-text text-center text-4xl font-extrabold mb-12">
          Project Gallery
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((item, i) => (
            <div
              key={i}
              className="glass-panel p-4 rounded-xl hover:scale-[1.02] transition duration-300"
            >
              <img
                src={item.src}
                alt={item.label}
                className="rounded-lg border border-white/10 shadow-lg"
              />
              <p className="mt-3 text-center text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
