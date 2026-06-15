import { Send } from "lucide-react";

function Instagram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function Facebook({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13 22v-8h3l1-4h-4V7.5C13 6.4 13.4 6 14.6 6H17V2.2C16.6 2.1 15.4 2 14.1 2 11.4 2 9.6 3.7 9.6 6.7V10H6v4h3.6v8H13z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden" style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}>
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, var(--gold) 0%, transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-script text-3xl" style={{ color: "var(--gold)" }}>Café de</span>
              <span className="font-display text-2xl tracking-wider">PICCOLO</span>
            </div>
            <p className="mt-4 text-sm opacity-80 max-w-xs" style={{ color: "var(--cream)" }}>
              Hand-poured coffee, hand-stitched lamps, hand-written notes. Made slowly, with love.
            </p>
          </div>
          <FooterCol title="Visit" items={["Menu", "Reservations", "Private Events", "Gift Cards"]} />
          <FooterCol title="The cottage" items={["Our Story", "Press", "Careers", "Sustainability"]} />
          <div>
            <div className="text-xs uppercase tracking-[0.25em] opacity-70" style={{ color: "var(--cream)" }}>Letters from Piccolo</div>
            <p className="mt-3 text-sm opacity-80" style={{ color: "var(--cream)" }}>Seasonal menus, secret tastings, and the occasional love letter.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
              <input placeholder="you@example.com" className="flex-1 rounded-full bg-white/10 border border-white/20 px-4 py-2.5 text-sm outline-none" style={{ color: "var(--cream)" }} />
              <button className="rounded-full px-4 py-2.5 text-sm shadow-gold" style={{ background: "var(--gradient-gold)", color: "white" }}>
                <Send size={14} />
              </button>
            </form>
            <div className="mt-5 flex gap-2">
              {[Instagram, Facebook].map((Ic, i) => (
                <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors" style={{ color: "var(--cream)" }}>
                  <Ic size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-70" style={{ color: "var(--cream)" }}>
          <div>© {new Date().getFullYear()} Café de Piccolo. Brewed with love.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:opacity-100 transition-opacity" style={{ color: "var(--cream)" }}>Privacy</a>
            <a href="#" className="hover:opacity-100 transition-opacity" style={{ color: "var(--cream)" }}>Terms</a>
            <a href="#" className="hover:opacity-100 transition-opacity" style={{ color: "var(--cream)" }}>Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.25em] opacity-70" style={{ color: "var(--cream)" }}>{title}</div>
      <ul className="mt-3 space-y-2 text-sm opacity-90">
        {items.map((i) => (
          <li key={i}><a href="#" className="hover:opacity-100 transition-opacity" style={{ color: "var(--cream)" }}>{i}</a></li>
        ))}
      </ul>
    </div>
  );
}
