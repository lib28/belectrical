export default function Contact() {
  return (
    <main className="container-default py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-white/70 mt-2">Cape Town & surrounds • Monday–Saturday • After-hours emergency support available</p>
      <div className="grid lg:grid-cols-2 gap-8 mt-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h4 className="font-semibold mb-3">Quick Request</h4>
          <form className="grid gap-3" onSubmit={(e) => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const name = form.get("name");
            const issue = form.get("issue");
            window.open(`https://wa.me/27712718590?text=Hi%20BELECTRICAL,%20I'm%20${encodeURIComponent(name)}%20and%20I%20need%20help%20with:%20${encodeURIComponent(issue)}`, "_blank");
          }}>
            <input name="name" required placeholder="Your name" className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-400" />
            <textarea name="issue" required placeholder="Describe your issue (location, symptoms, preferred time)..." rows="4" className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-400"></textarea>
            <button className="rounded-xl bg-brand-500 hover:bg-brand-600 px-5 py-3 font-semibold transition">Send via WhatsApp</button>
          </form>
        </div>
        <div className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h4 className="font-semibold">Direct</h4>
            <p className="text-white/80 mt-2">Phone/WhatsApp: <a className="underline" href="tel:+27712718590">071 271 8590</a></p>
            <p className="text-white/60">Service area: Cape Town & surrounds</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h4 className="font-semibold">Why choose us</h4>
            <ul className="mt-2 list-disc list-inside text-white/80 space-y-1">
              <li>Registered & safety-first</li>
              <li>Neat, labeled, code-compliant work</li>
              <li>Clear quotes, no surprises</li>
              <li>Local, reliable, on schedule</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
