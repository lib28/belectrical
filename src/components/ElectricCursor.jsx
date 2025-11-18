import { useEffect, useState } from "react";

export default function ElectricCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        left: pos.x - 150,
        top: pos.y - 150,
      }}
      className="pointer-events-none fixed w-[300px] h-[300px] rounded-full bg-brand-500/20 blur-3xl opacity-40 transition-transform duration-200"
    />
  );
}
