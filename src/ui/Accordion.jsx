import React, { useState } from "react";
export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10">
      {items.map((it, i) => (
        <button
          key={i}
          onClick={() => setOpen(open === i ? -1 : i)}
          className="w-full text-left p-4 focus:outline-none hover:bg-white/5"
        >
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">{it.q}</h4>
            <span className="text-brand-400">{open === i ? "−" : "+"}</span>
          </div>
          {open === i && <p className="text-white/80 mt-2">{it.a}</p>}
        </button>
      ))}
    </div>
  );
}
