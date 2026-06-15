import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Coffee, Clock, Users, MapPin, Phone, Mail,
  Star, Calendar, ChefHat, Sparkles, Heart, Music, Search, Leaf,
  ArrowRight, ChevronDown, Wifi, Car, Send, X,
} from "lucide-react";

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

import { Nav } from "@/components/site/Nav";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { Footer } from "@/components/site/Footer";
import exterior from "@/assests/exterior.jpg";
import interiorMain from "@/assests/interior-main.jpg";
import interiorMural from "@/assests/interior-mural.jpg";
import lampTable from "@/assests/lamp-table.jpg";
import cozyCorner from "@/assests/cozy-corner.jpg";
import checkerFloor from "@/assests/checker-floor.jpg";
import chalkboard from "@/assests/chalkboard.jpg";
import menu1 from "@/assests/menu-1.jpg";
import menu2 from "@/assests/menu-2.jpg";
import { catalog, signatures, type Dish } from "../data/dishes";

const MAPS_URL = "https://maps.app.goo.gl/YGta7Za8bt7PKBQL7";
const PHONE = "+91 83939 92323";
const PHONE_TEL = "+918393992323";
const WHATSAPP = "+91 83768 56323";
const WHATSAPP_URL = "https://wa.me/918376856323";
const ADDRESS = "180, Rajpur Rd, Near Sai Mandir, Kishanpur, Dehradun, Uttarakhand 248009";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Café de Piccolo — Where Every Cup Tells a Story" },
      { name: "description", content: "A vintage European cottage café serving handcrafted coffee, artisan brunches, and timeless moments. Reserve a table at Café de Piccolo." },
      { property: "og:title", content: "Café de Piccolo" },
      { property: "og:description", content: "Handcrafted coffee, artisan brunches, and timeless moments in a cottage-style European café." },
      { property: "og:image", content: interiorMain },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  return (
    <div id="top" className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Nav />
      <Hero />
      <LiveAvailability />
      <SignatureDishes onSelectDish={setSelectedDish} />
      <Menu onSelectDish={setSelectedDish} />
      <Reservation />
      <Ambience />
      <VirtualTour />
      <Reviews />
      <Events />
      <Story />
      <InstagramFeed />
      <Contact />
      <Footer />
      {/* Dish Detail Modal */}
      {selectedDish && (
        <div
          className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-up"
          onClick={() => setSelectedDish(null)}
        >
          <div
            className="relative bg-card w-full max-w-3xl rounded-3xl shadow-luxe overflow-hidden animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-black/40 text-white hover:bg-black/60 flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 sm:h-80 md:h-auto relative">
                <img
                  src={selectedDish.img}
                  alt={selectedDish.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl leading-tight">{selectedDish.name}</h2>
                    <p className="text-muted-foreground mt-1 text-sm">{selectedDish.tag || ""}</p>
                  </div>
                  <div className="font-display text-xl sm:text-2xl text-[var(--gold-deep)] shrink-0">{selectedDish.price}</div>
                </div>
                {selectedDish.desc && (
                  <p className="text-muted-foreground">{selectedDish.desc}</p>
                )}
                {selectedDish.veg !== undefined && (
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] rounded-full px-2 py-1 border ${
                        selectedDish.veg
                          ? "border-emerald-300/60 text-emerald-700 bg-emerald-50"
                          : "border-rose-300/60 text-rose-700 bg-rose-50"
                      }`}
                    >
                      <Leaf size={10} /> {selectedDish.veg ? "Veg" : "Non-veg"}
                    </span>
                    {selectedDish.best && (
                      <span className="text-[9px] uppercase tracking-[0.18em] rounded-full gradient-gold text-white px-2 py-0.5">
                        Bestseller
                      </span>
                    )}
                  </div>
                )}
                {/* About the Dish */}
                {selectedDish.aboutDish && (
                  <div className="rounded-xl bg-muted/30 p-4">
                    <h3 className="font-display text-lg mb-2">About the Dish</h3>
                    <p className="text-sm text-foreground/80 mb-2">
                      <strong>Origin:</strong> {selectedDish.aboutDish.origin}
                    </p>
                    {selectedDish.aboutDish.funFact && (
                      <p className="text-sm text-muted-foreground italic">
                        💡 {selectedDish.aboutDish.funFact}
                      </p>
                    )}
                  </div>
                )}
                <div className="mt-4">
                  <h3 className="font-display text-lg mb-3">Reviews</h3>
                  <div className="space-y-3">
                    {selectedDish.reviews.map((review, i) => (
                      <div key={i} className="rounded-xl bg-muted/30 p-3">
                        <div className="flex items-center gap-1 text-[var(--gold-deep)] mb-1">
                          {Array.from({ length: review.r }).map((_, starI) => (
                            <Star key={starI} size={14} fill="currentColor" />
                          ))}
                        </div>
                        <p className="text-sm text-foreground/80 italic">"{review.t}"</p>
                        <p className="text-xs text-muted-foreground mt-1">— {review.n}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex flex-col gap-3">
                  {selectedDish.recipe && (
                    <Link
                      to={`/recipe/${encodeURIComponent(selectedDish.name)}`}
                      onClick={() => setSelectedDish(null)}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-3 font-medium hover:bg-primary/90 transition-colors"
                    >
                      View Recipe
                    </Link>
                  )}
                  <Link
                    to="#reserve"
                    onClick={() => setSelectedDish(null)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-gold py-3 text-white shadow-gold font-medium hover:scale-[1.01] transition-transform"
                  >
                    Reserve a Table <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= HERO ================= */
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={exterior} alt="Café de Piccolo cottage exterior" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-50"
          style={{ background: "radial-gradient(ellipse at center, oklch(0.85 0.18 70 / 0.4), transparent 60%)" }}
        />
      </motion.div>

      {/* lamp glow */}
      <motion.div
        className="absolute -top-10 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "oklch(0.85 0.18 70 / 0.5)" }}
        animate={{ opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 pt-44 pb-32 sm:pt-52 sm:pb-40 text-center text-white"
      >
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs tracking-[0.3em] uppercase">
            <Sparkles size={14} /> Rajpur Road · Dehradun
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance"
        >
          Dehradun's Most Charming
          <br />
          <span className="font-script text-6xl sm:text-7xl lg:text-8xl text-[oklch(0.85 0.13 70)]">European Cottage</span>
          <span className="italic font-light"> Café</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-white/85 font-light"
        >
          Handcrafted coffee, artisan brunches, vintage interiors & unforgettable experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#reserve"
            className="group inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-medium text-white shadow-gold hover:scale-[1.04] transition-transform"
          >
            Reserve Your Table <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full glass-dark px-7 py-3.5 text-sm font-medium text-white hover:bg-white/15 transition-colors"
          >
            View Menu
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/95 text-ink px-7 py-3.5 text-sm font-medium hover:bg-white transition-colors"
          >
            <MapPin size={16} /> Get Directions
          </a>
        </motion.div>

        <div className="mt-20 grid grid-cols-3 gap-6 max-w-xl mx-auto text-center">
          {[
            { k: "4.9", l: "Google Rating" },
            { k: "12+", l: "Years of Craft" },
            { k: "1k+", l: "Happy Guests / wk" },
          ].map((s) => (
            <div key={s.l} className="glass-dark rounded-2xl px-3 py-4">
              <div className="font-display text-2xl">{s.k}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-80">{s.l}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 z-10"
      >
        <ChevronDown />
      </motion.div>
    </section>
  );
}

/* ================= LIVE AVAILABILITY ================= */
function LiveAvailability() {
  const occupancy = 62; // %
  const peak = [20, 35, 55, 70, 90, 60, 45, 80, 95, 70, 40];
  return (
    <section className="relative py-24 sm:py-32 paper-grain">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel>Live at the café</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl text-balance">A peek inside, right now</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Real-time occupancy and wait times so you know when to stop by.</p>
        </Reveal>

        <div className="grid lg:grid-cols-4 gap-5">
          {[
            { icon: Users, label: "Current Occupancy", value: `${occupancy}%`, sub: "Lively, not crowded" },
            { icon: Coffee, label: "Available Tables", value: "7", sub: "Indoor & window seats" },
            { icon: Clock, label: "Estimated Wait", value: "~ 8 min", sub: "Updated 2 min ago" },
            { icon: Sparkles, label: "Vibe Tonight", value: "Cosy", sub: "Acoustic playlist" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="group h-full rounded-3xl bg-card border border-border/70 p-6 shadow-soft hover:-translate-y-1 transition-transform">
                <div className="flex items-center justify-between">
                  <s.icon className="text-[var(--gold-deep)]" size={22} />
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="mt-6 font-display text-3xl">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
                <div className="mt-3 text-sm text-foreground/70">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 rounded-3xl bg-card border border-border/70 p-6 sm:p-8 shadow-soft">
            <div className="flex items-end justify-between mb-6">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Peak hours today</div>
                <div className="font-display text-2xl">Quietest before 11 am · Busiest 7–9 pm</div>
              </div>
              <div className="text-xs text-muted-foreground hidden sm:block">11 am → 10 pm</div>
            </div>
            <div className="flex items-end gap-2 h-32">
              {peak.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1 rounded-t-lg"
                  style={{
                    background: h > 80 ? "var(--gradient-gold)" : "oklch(0.85 0.04 70)",
                  }}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= SIGNATURE DISHES ================= */
function SignatureDishes({ onSelectDish }: { onSelectDish: (dish: Dish) => void }) {
  const { scrollYProgress } = useScroll();
  const yA = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, 40]);
  return (
    <section id="signature" className="relative py-24 sm:py-32 gradient-warm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel>Signature creations</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl text-balance">
            Dishes guests <span className="italic font-script text-gold">come back for</span>
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {signatures.map((d, i) => (
            <Reveal key={d.name} delay={(i % 3) * 0.08}>
              <motion.article
                style={{ y: i % 2 ? yA : yB }}
                className="group relative rounded-[2rem] overflow-hidden bg-card shadow-soft border border-border/70 hover:shadow-luxe transition-all cursor-pointer"
                onClick={() => onSelectDish(d)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-4 left-4 rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white">
                  Chef's Pick
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl leading-tight">{d.name}</h3>
                      <p className="text-sm text-white/75 mt-1">{d.tag}</p>
                    </div>
                    <div className="font-display text-lg text-[oklch(0.88 0.13 75)]">{d.price}</div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= MENU ================= */
function Menu({ onSelectDish }: { onSelectDish: (dish: Dish) => void }) {
  const [active, setActive] = useState(catalog[0].id);
  const [q, setQ] = useState("");
  const items = useMemo(() => {
    const list = catalog.find((c) => c.id === active)?.items ?? [];
    if (!q.trim()) return list;
    const t = q.toLowerCase();
    return list.filter((i) => i.name.toLowerCase().includes(t) || i.desc?.toLowerCase().includes(t));
  }, [active, q]);

  return (
    <section id="menu" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center mb-10">
          <SectionLabel>The Menu</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl text-balance">
            Food in its <span className="italic">purest form</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto italic font-serif-d text-lg">
            "Courtesy & ethics is our norm."
          </p>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between mb-8">
          <div className="flex flex-wrap gap-2">
            {catalog.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`rounded-full px-4 py-2 text-sm border transition-all ${
                  active === c.id
                    ? "gradient-gold text-white border-transparent shadow-gold"
                    : "bg-card border-border hover:border-[var(--gold-deep)] text-foreground/80"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="relative max-w-xs w-full">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search the menu…"
              className="w-full rounded-full bg-card border border-border pl-9 pr-4 py-2.5 text-sm outline-none focus:border-[var(--gold-deep)]"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={(i % 6) * 0.04}>
              <div
                className="group relative rounded-2xl bg-card border border-border/70 p-5 shadow-soft hover:-translate-y-0.5 hover:shadow-luxe transition-all cursor-pointer"
                onClick={() => onSelectDish(it)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display text-xl leading-tight">{it.name}</h3>
                      {it.best && (
                        <span className="text-[9px] uppercase tracking-[0.18em] rounded-full gradient-gold text-white px-2 py-0.5">
                          Bestseller
                        </span>
                      )}
                    </div>
                    {it.desc && <p className="text-sm text-muted-foreground mt-1.5">{it.desc}</p>}
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-display text-base text-[var(--gold-deep)]">{it.price}</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] rounded-full px-2 py-1 border ${
                      it.veg
                        ? "border-emerald-300/60 text-emerald-700 bg-emerald-50"
                        : "border-rose-300/60 text-rose-700 bg-rose-50"
                    }`}
                  >
                    <Leaf size={10} /> {it.veg ? "Veg" : "Non-veg"}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
          {items.length === 0 && (
            <div className="col-span-full text-center text-muted-foreground py-12">No matches. Try a different keyword.</div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ================= RESERVATION ================= */
function Reservation() {
  const [form, setForm] = useState({
    name: "", phone: "", date: "", time: "19:30", guests: "2", seating: "Indoor",
  });
  const [sent, setSent] = useState(false);
  const slots = ["11:30", "13:00", "14:30", "17:00", "18:30", "19:30", "21:00"];
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section id="reserve" className="relative py-24 sm:py-32 bg-cream-deep">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <SectionLabel>Reserve your table</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-balance">
            Save a seat under our <span className="italic font-script text-gold">fringed lamps</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">
            Pick a date, a time, and the corner you love most. We'll confirm on WhatsApp and email within minutes.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { i: Calendar, t: "Instant confirmation", s: "WhatsApp + email within 5 minutes" },
              { i: Heart, t: "Special occasion?", s: "We arrange flowers, candles & a hand-written note" },
              { i: ChefHat, t: "Chef's pre-set menu", s: "Available on request for parties of 6+" },
            ].map((x) => (
              <div key={x.t} className="flex gap-4">
                <div className="h-11 w-11 rounded-full gradient-gold grid place-items-center text-white shadow-gold shrink-0">
                  <x.i size={18} />
                </div>
                <div>
                  <div className="font-display text-lg">{x.t}</div>
                  <div className="text-sm text-muted-foreground">{x.s}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={onSubmit}
            className="rounded-[2rem] bg-card border border-border/70 p-6 sm:p-8 shadow-luxe relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl" style={{ background: "oklch(0.78 0.13 70 / 0.4)" }} />
            {!sent ? (
              <div className="relative">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Your name">
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Aria Mendes" />
                  </Field>
                  <Field label="WhatsApp number">
                    <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} placeholder="+91 ·····" />
                  </Field>
                  <Field label="Date">
                    <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputCls} />
                  </Field>
                  <Field label="Guests">
                    <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className={inputCls}>
                      {[1,2,3,4,5,6,7,8].map((n) => <option key={n} value={n}>{n} guest{n>1?"s":""}</option>)}
                    </select>
                  </Field>
                </div>
                <Field label="Time" className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {slots.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm({ ...form, time: s })}
                        className={`rounded-full px-3.5 py-1.5 text-sm border ${
                          form.time === s ? "gradient-gold text-white border-transparent" : "bg-background border-border"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </Field>
                <Field label="Seating preference" className="mt-4">
                  <div className="grid grid-cols-3 gap-2">
                    {["Indoor", "Window", "Couple"].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm({ ...form, seating: s })}
                        className={`rounded-xl px-3 py-3 text-sm border transition-all ${
                          form.seating === s
                            ? "border-[var(--gold-deep)] bg-[oklch(0.97 0.04 75)]"
                            : "bg-background border-border hover:border-[var(--gold-deep)]"
                        }`}
                      >
                        {s} Table
                      </button>
                    ))}
                  </div>
                </Field>
                <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full gradient-gold py-3.5 text-white shadow-gold font-medium hover:scale-[1.01] transition-transform">
                  Reserve my table <ArrowRight size={16} />
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">No deposit required · Free cancellation up to 2 hours before</p>
              </div>
            ) : (
              <div className="relative text-center py-10">
                <div className="mx-auto h-16 w-16 rounded-full gradient-gold grid place-items-center text-white shadow-gold animate-glow-pulse">
                  <Heart size={26} />
                </div>
                <h3 className="mt-5 font-display text-2xl">A table is being saved for you</h3>
                <p className="mt-2 text-muted-foreground max-w-sm mx-auto">
                  We've sent a WhatsApp confirmation. See you {form.date || "soon"} at {form.time} — table for {form.guests}.
                </p>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
const inputCls = "w-full rounded-xl bg-background border border-border px-4 py-3 text-sm outline-none focus:border-[var(--gold-deep)] transition-colors";
function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</span>
      {children}
    </label>
  );
}

/* ================= AMBIENCE ================= */
function Ambience() {
  const items = [
    { t: "Cozy seating", s: "Cane chairs & floral linens", img: checkerFloor },
    { t: "Vintage lighting", s: "Hand-tasselled fringed lamps", img: lampTable },
    { t: "Romantic corners", s: "Tucked-away two-tops", img: cozyCorner },
    { t: "Work-friendly", s: "Quiet Wi-Fi nooks, all-day filter", img: interiorMural },
    { t: "Family seating", s: "Long sofas & sturdy booths", img: interiorMain },
  ];
  return (
    <section className="relative py-24 sm:py-32 paper-grain">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel>Ambience</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl text-balance">A room for every mood</h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {items.map((x, i) => (
            <Reveal key={x.t} delay={i * 0.06}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-soft">
                <img src={x.img} alt={x.t} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <div className="font-display text-lg leading-tight">{x.t}</div>
                  <div className="text-xs text-white/80 mt-0.5">{x.s}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= VIRTUAL TOUR (gallery + lightbox) ================= */
function VirtualTour() {
  const photos = [interiorMain, interiorMural, lampTable, cozyCorner, checkerFloor, chalkboard, exterior, menu1, menu2];
  const heights = ["row-span-2", "", "", "row-span-2", "", "", "", "row-span-2", ""];
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="tour" className="relative py-24 sm:py-32 bg-cream-deep">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel>Virtual café tour</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl text-balance">A wander through the cottage</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Click any frame for a closer look.</p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-3 sm:gap-4">
          {photos.map((p, i) => (
            <Reveal key={i} delay={(i % 6) * 0.05} className={heights[i % heights.length]}>
              <button
                onClick={() => setOpen(p)}
                className="group block h-full w-full rounded-2xl overflow-hidden shadow-soft relative"
              >
                <img src={p} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {open && (
        <button
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-black/85 backdrop-blur-sm p-4 animate-fade-up"
        >
          <img src={open} alt="" className="max-h-[90vh] max-w-[95vw] rounded-2xl shadow-luxe" />
        </button>
      )}
    </section>
  );
}

/* ================= REVIEWS ================= */
const reviews = [
  { n: "Ananya R.", t: "Walking in felt like stepping into a fairytale cottage. The cappuccino was honestly the best I've had in the city.", r: 5 },
  { n: "Marcus L.", t: "Their Sunday brunch is unmatched — the English Breakfast and tiramisu had us dreaming for days.", r: 5 },
  { n: "Priya & Karthik", t: "We celebrated our anniversary here. The candle-lit corner, the fringed lamps… pure magic.", r: 5 },
  { n: "Sofia D.", t: "Genuinely my favourite work-and-coffee spot. Warm, quiet, beautiful. The staff remembers your order.", r: 5 },
];
function Reviews() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel>Guest stories</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl text-balance">
            4.9 on Google. <span className="italic font-script text-gold">Even better in person.</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <Reveal key={r.n} delay={i * 0.07}>
              <figure className="h-full rounded-3xl bg-card border border-border/70 p-7 shadow-soft hover:shadow-luxe transition-shadow">
                <div className="flex items-center gap-1 text-[var(--gold-deep)]">
                  {Array.from({ length: r.r }).map((_, k) => <Star key={k} size={16} fill="currentColor" />)}
                </div>
                <blockquote className="mt-4 font-serif-d text-xl sm:text-2xl leading-snug text-foreground/90">
                  "{r.t}"
                </blockquote>
                <figcaption className="mt-5 text-sm text-muted-foreground tracking-wide">— {r.n}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= EVENTS ================= */
function Events() {
  const events = [
    { i: Heart, t: "Birthday Celebrations", s: "Custom cakes, fairy-lit corners, surprise menus." },
    { i: Sparkles, t: "Anniversary Dates", s: "Petal-lined tables and a hand-written wish from the chef." },
    { i: Users, t: "Private Parties", s: "Buy out a section — or the whole cottage — for the evening." },
    { i: Music, t: "Corporate Meetups", s: "Quiet rooms, projector, and bottomless filter coffee." },
  ];
  return (
    <section className="relative py-24 sm:py-32 gradient-warm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel>Events & Celebrations</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl text-balance">For your most-loved moments</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((e, i) => (
            <Reveal key={e.t} delay={i * 0.07}>
              <div className="h-full rounded-3xl bg-card border border-border/70 p-7 shadow-soft hover:-translate-y-1 transition-transform">
                <div className="h-12 w-12 rounded-full gradient-gold grid place-items-center text-white shadow-gold">
                  <e.i size={20} />
                </div>
                <h3 className="mt-5 font-display text-xl">{e.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.s}</p>
                <a href="#reserve" className="mt-5 inline-flex items-center gap-1 text-sm text-[var(--gold-deep)] hover:gap-2 transition-all">
                  Plan with us <ArrowRight size={14} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= STORY ================= */
function Story() {
  const timeline = [
    { y: "2012", t: "A small kitchen, a big dream", s: "Piccolo began as a six-table cottage with one espresso machine and a hand-painted sign." },
    { y: "2016", t: "Our wood-fired oven arrives", s: "Hand-built in Naples, shipped, then carried up the garden path piece by piece." },
    { y: "2019", t: "The fringed lamps come home", s: "Each shade hand-stitched by artisans in Jaipur — no two are the same." },
    { y: "2024", t: "Still candle-lit, still cottage-quiet", s: "Twelve years on, every cup is still poured by hand and every plate still plated with care." },
  ];
  return (
    <section id="story" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <Reveal className="lg:sticky lg:top-32">
          <SectionLabel>About us</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-balance">
            A little cottage with a <span className="italic font-script text-gold">very big heart</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">
            We built Café de Piccolo for slow mornings, lingering brunches and conversations that go on a little too long. Everything here — from the linens to the lamps to the loaf of sourdough — is made by hand, with love.
          </p>
          <div className="mt-8 rounded-3xl overflow-hidden shadow-luxe aspect-[4/3]">
            <img src={exterior} alt="Café de Piccolo exterior" className="h-full w-full object-cover" />
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-3 top-1 bottom-1 w-px bg-gradient-to-b from-transparent via-[var(--gold-deep)]/40 to-transparent" />
          <ul className="space-y-10">
            {timeline.map((e, i) => (
              <Reveal key={e.y} delay={i * 0.08}>
                <li className="relative pl-12">
                  <span className="absolute left-0 top-1 h-6 w-6 rounded-full gradient-gold shadow-gold ring-4 ring-background" />
                  <div className="font-script text-2xl text-gold">{e.y}</div>
                  <h3 className="font-display text-2xl mt-1">{e.t}</h3>
                  <p className="mt-2 text-muted-foreground">{e.s}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ================= INSTAGRAM ================= */
function InstagramFeed() {
  const feed = [interiorMain, lampTable, cozyCorner, interiorMural, checkerFloor, chalkboard];
  return (
    <section className="relative py-24 sm:py-32 bg-cream-deep">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel>@cafedepiccolo</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl text-balance">From our table to your feed</h2>
          <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--gold-deep)]">
            <Instagram size={16} /> Follow along
          </a>
        </Reveal>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {feed.map((p, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <a href="#" className="group relative block aspect-square rounded-xl overflow-hidden">
                <img src={p} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 grid place-items-center bg-black/0 group-hover:bg-black/40 transition-colors text-white opacity-0 group-hover:opacity-100">
                  <Instagram size={22} />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CONTACT ================= */
function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-stretch">
        <Reveal>
          <SectionLabel>Visit us</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl text-balance">Come see the cottage in person</h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Tucked beneath fairy lights at the end of a quiet lane. Come for the coffee, stay for the candle-lit corners.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { i: MapPin, t: "Address", s: ADDRESS, href: MAPS_URL, ext: true },
              { i: Clock, t: "Hours", s: "Mon–Sun · 8 am – 11 pm" },
              { i: Phone, t: "Call", s: PHONE, href: `tel:${PHONE_TEL}` },
              { i: Mail, t: "WhatsApp", s: WHATSAPP, href: WHATSAPP_URL, ext: true },
              { i: Wifi, t: "Wi-Fi", s: "Fast & free, all day" },
              { i: Car, t: "Parking", s: "Free parking on Rajpur Road" },
            ].map((c) => {
              const inner = (
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[oklch(0.97 0.04 75)] grid place-items-center text-[var(--gold-deep)] shrink-0">
                    <c.i size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.t}</div>
                    <div className="text-sm leading-snug">{c.s}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a
                  key={c.t}
                  href={c.href}
                  target={c.ext ? "_blank" : undefined}
                  rel={c.ext ? "noopener noreferrer" : undefined}
                  className="rounded-2xl bg-card border border-border/70 p-4 shadow-soft hover:border-[var(--gold-deep)] transition-colors"
                >
                  {inner}
                </a>
              ) : (
                <div key={c.t} className="rounded-2xl bg-card border border-border/70 p-4 shadow-soft">
                  {inner}
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#reserve" className="rounded-full gradient-gold text-white px-6 py-3 text-sm shadow-gold">Reserve a Table</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-border bg-card px-6 py-3 text-sm hover:border-[var(--gold-deep)] transition-colors">WhatsApp us</a>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative h-full min-h-[420px] rounded-[2rem] overflow-hidden shadow-luxe border border-border/70">
            <img
              src={exterior}
              alt="Café de Piccolo cottage at 180 Rajpur Road, Dehradun"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />
            <div className="relative h-full flex flex-col justify-end p-8 sm:p-10 text-white">
              <div className="inline-flex w-fit items-center gap-2 rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-[0.3em]">
                <MapPin size={12} /> Get Directions
              </div>
              <h3 className="mt-4 font-display text-3xl sm:text-4xl leading-tight text-balance">
                Find the cottage on <span className="italic font-script text-[oklch(0.88 0.13 75)]">Rajpur Road</span>
              </h3>
              <p className="mt-3 text-sm sm:text-base text-white/85 max-w-md">
                {ADDRESS}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 text-sm font-medium text-white shadow-gold hover:scale-[1.03] transition-transform"
                >
                  <MapPin size={16} /> Open in Google Maps <ArrowRight size={14} />
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3 text-sm font-medium text-white hover:bg-white/15 transition-colors"
                >
                  <Phone size={14} /> {PHONE}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


