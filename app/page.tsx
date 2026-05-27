export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 flex flex-col gap-16">
      {/* Hero */}
      <section className="flex flex-col gap-6 text-center">
        <div className="inline-block mx-auto bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
          QR Menu Analytics
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Know What Your Guests{" "}
          <span className="text-[#58a6ff]">Actually Look At</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto">
          Generate trackable QR codes for your restaurant menu. See which items get the most views, how long guests linger, and what drives orders — all in one dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start for $12/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[
            ["Item View Tracking", "See exactly which dishes attract attention"],
            ["Dwell Time", "Know how long guests study each section"],
            ["Order Patterns", "Discover what combos guests order together"],
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 text-left">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold text-white">Simple Pricing</h2>
        <div className="w-full max-w-sm bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 flex flex-col gap-5">
          <div className="flex items-end gap-2">
            <span className="text-5xl font-extrabold text-white">$12</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm">Everything you need to understand your menu performance.</p>
          <ul className="flex flex-col gap-2">
            {[
              "Unlimited QR codes",
              "Real-time analytics dashboard",
              "Item view & dwell time tracking",
              "Weekly email reports",
              "Up to 5 menu locations",
              "Cancel anytime",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg text-center transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">FAQ</h2>
        <div className="flex flex-col gap-4">
          {[
            [
              "How does the QR tracking work?",
              "You generate a unique QR code per table or location from your dashboard. When a guest scans it, they see your menu while our tracker records view events, time spent, and item interactions — no app required.",
            ],
            [
              "Do my customers need to install anything?",
              "No. The menu opens directly in their browser. Tracking is invisible and privacy-friendly — no personal data is collected from guests.",
            ],
            [
              "Can I use my existing menu?",
              "Yes. You can link to your existing online menu URL or upload a PDF. Our script wraps it with tracking automatically.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs pt-4 border-t border-[#30363d]">
        © {new Date().getFullYear()} MenuScan Analytics. All rights reserved.
      </footer>
    </main>
  );
}
