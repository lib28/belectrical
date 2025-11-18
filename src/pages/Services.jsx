export default function Services() {
  const items = [
    { title: "Distribution boards & rewiring", text: "Upgrades, labeling, testing and neat finishing." },
    { title: "Lighting & power", text: "Indoor/outdoor lighting, plugs, stove points, geysers." },
    { title: "Surge & earth leakage", text: "Protection devices, RCD troubleshooting, fault finding." },
    { title: "Commercial & industrial", text: "Shops, offices, factories — maintenance & projects." },
    { title: "Backup & solar", text: "Inverters, batteries, changeover, essential circuits." },
    { title: "Emergency call-outs", text: "After-hours support across Cape Town." },
  ];
  return (
    <main className="container-default py-12">
      <h1 className="text-3xl font-bold">Electrical Services</h1>
      <p className="text-white/70 mt-2">We cover residential, commercial and industrial work.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {items.map((i) => (
          <div key={i.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold">{i.title}</h3>
            <p className="text-white/80 mt-1 text-sm">{i.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
