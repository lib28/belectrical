import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <main className="container-default py-20 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="text-white/70 mt-2">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="inline-block mt-6 rounded-xl bg-brand-500 hover:bg-brand-600 px-5 py-3 font-semibold">Go Home</Link>
    </main>
  );
}
