import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Nav, F as Footer, R as Reveal, S as SectionLabel, s as signatures, c as catalog, a as checkerFloor, l as lampTable, b as cozyCorner, i as interiorMural, d as chalkboard, m as menu1, e as menu2 } from "./dishes-Bf4OM8vE.mjs";
import { i as interiorMain } from "./router-CCx_uRRA.mjs";
import { X, L as Leaf, S as Star, A as ArrowRight, a as Sparkles, M as MapPin, C as ChevronDown, U as Users, b as Coffee, c as Clock, d as Search, e as Calendar, H as Heart, f as ChefHat, g as Music, P as Phone, h as Mail, W as Wifi, i as Car } from "../_libs/lucide-react.mjs";
import { u as useScroll, a as useTransform, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const exterior = "/assets/exterior-BAA5rVqW.jpg";
function Instagram({
  size = 18
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "17.5", cy: "6.5", r: "1", fill: "currentColor" })
  ] });
}
const MAPS_URL = "https://maps.app.goo.gl/YGta7Za8bt7PKBQL7";
const PHONE = "+91 83939 92323";
const PHONE_TEL = "+918393992323";
const WHATSAPP = "+91 83768 56323";
const WHATSAPP_URL = "https://wa.me/918376856323";
const ADDRESS = "180, Rajpur Rd, Near Sai Mandir, Kishanpur, Dehradun, Uttarakhand 248009";
function Index() {
  const [selectedDish, setSelectedDish] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "top", className: "min-h-screen bg-background text-foreground overflow-x-clip", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LiveAvailability, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SignatureDishes, { onSelectDish: setSelectedDish }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { onSelectDish: setSelectedDish }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reservation, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ambience, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VirtualTour, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reviews, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Events, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InstagramFeed, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    selectedDish && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-up", onClick: () => setSelectedDish(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-card w-full max-w-3xl rounded-3xl shadow-luxe overflow-hidden animate-slide-up", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedDish(null), className: "absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-black/40 text-white hover:bg-black/60 flex items-center justify-center transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 sm:h-80 md:h-auto relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: selectedDish.img, alt: selectedDish.name, className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 sm:p-8 flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl leading-tight", children: selectedDish.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: selectedDish.tag || "" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl sm:text-2xl text-[var(--gold-deep)] shrink-0", children: selectedDish.price })
          ] }),
          selectedDish.desc && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: selectedDish.desc }),
          selectedDish.veg !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] rounded-full px-2 py-1 border ${selectedDish.veg ? "border-emerald-300/60 text-emerald-700 bg-emerald-50" : "border-rose-300/60 text-rose-700 bg-rose-50"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { size: 10 }),
              " ",
              selectedDish.veg ? "Veg" : "Non-veg"
            ] }),
            selectedDish.best && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase tracking-[0.18em] rounded-full gradient-gold text-white px-2 py-0.5", children: "Bestseller" })
          ] }),
          selectedDish.aboutDish && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted/30 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg mb-2", children: "About the Dish" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground/80 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Origin:" }),
              " ",
              selectedDish.aboutDish.origin
            ] }),
            selectedDish.aboutDish.funFact && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground italic", children: [
              "💡 ",
              selectedDish.aboutDish.funFact
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg mb-3", children: "Reviews" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: selectedDish.reviews.map((review, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted/30 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 text-[var(--gold-deep)] mb-1", children: Array.from({
                length: review.r
              }).map((_, starI) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, fill: "currentColor" }, starI)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground/80 italic", children: [
                '"',
                review.t,
                '"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                "— ",
                review.n
              ] })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex flex-col gap-3", children: [
            selectedDish.recipe && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/recipe/$dishName", params: {
              dishName: encodeURIComponent(selectedDish.name)
            }, onClick: () => setSelectedDish(null), className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-3 font-medium hover:bg-primary/90 transition-colors", children: "View Recipe" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#reserve", onClick: () => setSelectedDish(null), className: "w-full inline-flex items-center justify-center gap-2 rounded-full gradient-gold py-3 text-white shadow-gold font-medium hover:scale-[1.01] transition-transform", children: [
              "Reserve a Table ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
function Hero() {
  const {
    scrollY
  } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
      y,
      scale
    }, className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: exterior, alt: "Café de Piccolo cottage exterior", className: "h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        background: "var(--gradient-overlay)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 mix-blend-overlay opacity-50", style: {
        background: "radial-gradient(ellipse at center, oklch(0.85 0.18 70 / 0.4), transparent 60%)"
      } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute -top-10 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full blur-3xl pointer-events-none", style: {
      background: "oklch(0.85 0.18 70 / 0.5)"
    }, animate: {
      opacity: [0.6, 0.85, 0.6]
    }, transition: {
      duration: 4,
      repeat: Infinity
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
      opacity
    }, className: "relative z-10 mx-auto max-w-5xl px-6 pt-44 pb-32 sm:pt-52 sm:pb-40 text-center text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.3,
        duration: 0.8
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs tracking-[0.3em] uppercase", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14 }),
        " Rajpur Road · Dehradun"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 40
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.5,
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }, className: "mt-8 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance", children: [
        "Dehradun's Most Charming",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-6xl sm:text-7xl lg:text-8xl text-[oklch(0.85 0.13 70)]", children: "European Cottage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light", children: " Café" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.85,
        duration: 0.8
      }, className: "mt-6 max-w-2xl mx-auto text-base sm:text-lg text-white/85 font-light", children: "Handcrafted coffee, artisan brunches, vintage interiors & unforgettable experiences." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 1.05,
        duration: 0.8
      }, className: "mt-10 flex flex-wrap items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#reserve", className: "group inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-medium text-white shadow-gold hover:scale-[1.04] transition-transform", children: [
          "Reserve Your Table ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "group-hover:translate-x-1 transition-transform" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#menu", className: "inline-flex items-center gap-2 rounded-full glass-dark px-7 py-3.5 text-sm font-medium text-white hover:bg-white/15 transition-colors", children: "View Menu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: MAPS_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-white/95 text-ink px-7 py-3.5 text-sm font-medium hover:bg-white transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16 }),
          " Get Directions"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid grid-cols-3 gap-6 max-w-xl mx-auto text-center", children: [{
        k: "4.9",
        l: "Google Rating"
      }, {
        k: "12+",
        l: "Years of Craft"
      }, {
        k: "1k+",
        l: "Happy Guests / wk"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-2xl px-3 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl", children: s.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] opacity-80", children: s.l })
      ] }, s.l)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
      y: [0, 8, 0]
    }, transition: {
      duration: 2,
      repeat: Infinity
    }, className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, {}) })
  ] });
}
function LiveAvailability() {
  const occupancy = 62;
  const peak = [20, 35, 55, 70, 90, 60, 45, 80, 95, 70, 40];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 sm:py-32 paper-grain", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Live at the café" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl sm:text-5xl text-balance", children: "A peek inside, right now" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-xl mx-auto", children: "Real-time occupancy and wait times so you know when to stop by." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-4 gap-5", children: [{
      icon: Users,
      label: "Current Occupancy",
      value: `${occupancy}%`,
      sub: "Lively, not crowded"
    }, {
      icon: Coffee,
      label: "Available Tables",
      value: "7",
      sub: "Indoor & window seats"
    }, {
      icon: Clock,
      label: "Estimated Wait",
      value: "~ 8 min",
      sub: "Updated 2 min ago"
    }, {
      icon: Sparkles,
      label: "Vibe Tonight",
      value: "Cosy",
      sub: "Acoustic playlist"
    }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full rounded-3xl bg-card border border-border/70 p-6 shadow-soft hover:-translate-y-1 transition-transform", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "text-[var(--gold-deep)]", size: 22 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-500 animate-pulse" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 font-display text-3xl", children: s.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: s.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm text-foreground/70", children: s.sub })
    ] }) }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-3xl bg-card border border-border/70 p-6 sm:p-8 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: "Peak hours today" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl", children: "Quietest before 11 am · Busiest 7–9 pm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground hidden sm:block", children: "11 am → 10 pm" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-2 h-32", children: peak.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        height: 0
      }, whileInView: {
        height: `${h}%`
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.9,
        delay: i * 0.05,
        ease: [0.22, 1, 0.36, 1]
      }, className: "flex-1 rounded-t-lg", style: {
        background: h > 80 ? "var(--gradient-gold)" : "oklch(0.85 0.04 70)"
      } }, i)) })
    ] }) })
  ] }) });
}
function SignatureDishes({
  onSelectDish
}) {
  const {
    scrollYProgress
  } = useScroll();
  const yA = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, 40]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "signature", className: "relative py-24 sm:py-32 gradient-warm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Signature creations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl sm:text-5xl text-balance", children: [
        "Dishes guests ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-script text-gold", children: "come back for" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: signatures.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3 * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { style: {
      y: i % 2 ? yA : yB
    }, className: "group relative rounded-[2rem] overflow-hidden bg-card shadow-soft border border-border/70 hover:shadow-luxe transition-all cursor-pointer", onClick: () => onSelectDish(d), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: d.img, alt: d.name, className: "h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white", children: "Chef's Pick" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl sm:text-2xl leading-tight", children: d.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/75 mt-1", children: d.tag })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg text-[oklch(0.88 0.13 75)]", children: d.price })
      ] }) })
    ] }) }, d.name)) })
  ] }) });
}
function Menu({
  onSelectDish
}) {
  const [active, setActive] = reactExports.useState(catalog[0].id);
  const [q, setQ] = reactExports.useState("");
  const items = reactExports.useMemo(() => {
    const list = catalog.find((c) => c.id === active)?.items ?? [];
    if (!q.trim()) return list;
    const t = q.toLowerCase();
    return list.filter((i) => i.name.toLowerCase().includes(t) || i.desc?.toLowerCase().includes(t));
  }, [active, q]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "menu", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "The Menu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl sm:text-5xl text-balance", children: [
        "Food in its ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "purest form" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-xl mx-auto italic font-serif-d text-lg", children: '"Courtesy & ethics is our norm."' })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-4 lg:items-center justify-between mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: catalog.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(c.id), className: `rounded-full px-4 py-2 text-sm border transition-all ${active === c.id ? "gradient-gold text-white border-transparent shadow-gold" : "bg-card border-border hover:border-[var(--gold-deep)] text-foreground/80"}`, children: c.label }, c.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-xs w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 16, className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search the menu…", className: "w-full rounded-full bg-card border border-border pl-9 pr-4 py-2.5 text-sm outline-none focus:border-[var(--gold-deep)]" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: [
      items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 6 * 0.04, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative rounded-2xl bg-card border border-border/70 p-5 shadow-soft hover:-translate-y-0.5 hover:shadow-luxe transition-all cursor-pointer", onClick: () => onSelectDish(it), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl leading-tight", children: it.name }),
              it.best && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase tracking-[0.18em] rounded-full gradient-gold text-white px-2 py-0.5", children: "Bestseller" })
            ] }),
            it.desc && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1.5", children: it.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base text-[var(--gold-deep)]", children: it.price }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] rounded-full px-2 py-1 border ${it.veg ? "border-emerald-300/60 text-emerald-700 bg-emerald-50" : "border-rose-300/60 text-rose-700 bg-rose-50"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { size: 10 }),
          " ",
          it.veg ? "Veg" : "Non-veg"
        ] }) })
      ] }) }, it.name)),
      items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full text-center text-muted-foreground py-12", children: "No matches. Try a different keyword." })
    ] })
  ] }) });
}
function Reservation() {
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    date: "",
    time: "19:30",
    guests: "2",
    seating: "Indoor"
  });
  const [sent, setSent] = reactExports.useState(false);
  const slots = ["11:30", "13:00", "14:30", "17:00", "18:30", "19:30", "21:00"];
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "reserve", className: "relative py-24 sm:py-32 bg-cream-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Reserve your table" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl sm:text-5xl leading-[1.05] text-balance", children: [
        "Save a seat under our ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-script text-gold", children: "fringed lamps" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground max-w-md", children: "Pick a date, a time, and the corner you love most. We'll confirm on WhatsApp and email within minutes." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-4", children: [{
        i: Calendar,
        t: "Instant confirmation",
        s: "WhatsApp + email within 5 minutes"
      }, {
        i: Heart,
        t: "Special occasion?",
        s: "We arrange flowers, candles & a hand-written note"
      }, {
        i: ChefHat,
        t: "Chef's pre-set menu",
        s: "Available on request for parties of 6+"
      }].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-full gradient-gold grid place-items-center text-white shadow-gold shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(x.i, { size: 18 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg", children: x.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: x.s })
        ] })
      ] }, x.t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "rounded-[2rem] bg-card border border-border/70 p-6 sm:p-8 shadow-luxe relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl", style: {
        background: "oklch(0.78 0.13 70 / 0.4)"
      } }),
      !sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: form.name, onChange: (e) => setForm({
            ...form,
            name: e.target.value
          }), className: inputCls, placeholder: "Aria Mendes" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "WhatsApp number", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: form.phone, onChange: (e) => setForm({
            ...form,
            phone: e.target.value
          }), className: inputCls, placeholder: "+91 ·····" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Date", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "date", value: form.date, onChange: (e) => setForm({
            ...form,
            date: e.target.value
          }), className: inputCls }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Guests", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.guests, onChange: (e) => setForm({
            ...form,
            guests: e.target.value
          }), className: inputCls, children: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: n, children: [
            n,
            " guest",
            n > 1 ? "s" : ""
          ] }, n)) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Time", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: slots.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setForm({
          ...form,
          time: s
        }), className: `rounded-full px-3.5 py-1.5 text-sm border ${form.time === s ? "gradient-gold text-white border-transparent" : "bg-background border-border"}`, children: s }, s)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Seating preference", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: ["Indoor", "Window", "Couple"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setForm({
          ...form,
          seating: s
        }), className: `rounded-xl px-3 py-3 text-sm border transition-all ${form.seating === s ? "border-[var(--gold-deep)] bg-[oklch(0.97 0.04 75)]" : "bg-background border-border hover:border-[var(--gold-deep)]"}`, children: [
          s,
          " Table"
        ] }, s)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full gradient-gold py-3.5 text-white shadow-gold font-medium hover:scale-[1.01] transition-transform", children: [
          "Reserve my table ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-xs text-muted-foreground", children: "No deposit required · Free cancellation up to 2 hours before" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-center py-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-16 w-16 rounded-full gradient-gold grid place-items-center text-white shadow-gold animate-glow-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 26 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-2xl", children: "A table is being saved for you" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-muted-foreground max-w-sm mx-auto", children: [
          "We've sent a WhatsApp confirmation. See you ",
          form.date || "soon",
          " at ",
          form.time,
          " — table for ",
          form.guests,
          "."
        ] })
      ] })
    ] }) })
  ] }) });
}
const inputCls = "w-full rounded-xl bg-background border border-border px-4 py-3 text-sm outline-none focus:border-[var(--gold-deep)] transition-colors";
function Field({
  label,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `block ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2", children: label }),
    children
  ] });
}
function Ambience() {
  const items = [{
    t: "Cozy seating",
    s: "Cane chairs & floral linens",
    img: checkerFloor
  }, {
    t: "Vintage lighting",
    s: "Hand-tasselled fringed lamps",
    img: lampTable
  }, {
    t: "Romantic corners",
    s: "Tucked-away two-tops",
    img: cozyCorner
  }, {
    t: "Work-friendly",
    s: "Quiet Wi-Fi nooks, all-day filter",
    img: interiorMural
  }, {
    t: "Family seating",
    s: "Long sofas & sturdy booths",
    img: interiorMain
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 sm:py-32 paper-grain", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Ambience" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl sm:text-5xl text-balance", children: "A room for every mood" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4", children: items.map((x, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: x.img, alt: x.t, className: "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-4 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg leading-tight", children: x.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/80 mt-0.5", children: x.s })
      ] })
    ] }) }, x.t)) })
  ] }) });
}
function VirtualTour() {
  const photos = [interiorMain, interiorMural, lampTable, cozyCorner, checkerFloor, chalkboard, exterior, menu1, menu2];
  const heights = ["row-span-2", "", "", "row-span-2", "", "", "", "row-span-2", ""];
  const [open, setOpen] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "tour", className: "relative py-24 sm:py-32 bg-cream-deep", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Virtual café tour" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl sm:text-5xl text-balance", children: "A wander through the cottage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-xl mx-auto", children: "Click any frame for a closer look." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-3 sm:gap-4", children: photos.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 6 * 0.05, className: heights[i % heights.length], children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(p), className: "group block h-full w-full rounded-2xl overflow-hidden shadow-soft relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p, alt: "", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" })
      ] }) }, i)) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(null), className: "fixed inset-0 z-[60] grid place-items-center bg-black/85 backdrop-blur-sm p-4 animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: open, alt: "", className: "max-h-[90vh] max-w-[95vw] rounded-2xl shadow-luxe" }) })
  ] });
}
const reviews = [{
  n: "Ananya R.",
  t: "Walking in felt like stepping into a fairytale cottage. The cappuccino was honestly the best I've had in the city.",
  r: 5
}, {
  n: "Marcus L.",
  t: "Their Sunday brunch is unmatched — the English Breakfast and tiramisu had us dreaming for days.",
  r: 5
}, {
  n: "Priya & Karthik",
  t: "We celebrated our anniversary here. The candle-lit corner, the fringed lamps… pure magic.",
  r: 5
}, {
  n: "Sofia D.",
  t: "Genuinely my favourite work-and-coffee spot. Warm, quiet, beautiful. The staff remembers your order.",
  r: 5
}];
function Reviews() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Guest stories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl sm:text-5xl text-balance", children: [
        "4.9 on Google. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-script text-gold", children: "Even better in person." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-5", children: reviews.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.07, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "h-full rounded-3xl bg-card border border-border/70 p-7 shadow-soft hover:shadow-luxe transition-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 text-[var(--gold-deep)]", children: Array.from({
        length: r.r
      }).map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 16, fill: "currentColor" }, k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-4 font-serif-d text-xl sm:text-2xl leading-snug text-foreground/90", children: [
        '"',
        r.t,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-5 text-sm text-muted-foreground tracking-wide", children: [
        "— ",
        r.n
      ] })
    ] }) }, r.n)) })
  ] }) });
}
function Events() {
  const events = [{
    i: Heart,
    t: "Birthday Celebrations",
    s: "Custom cakes, fairy-lit corners, surprise menus."
  }, {
    i: Sparkles,
    t: "Anniversary Dates",
    s: "Petal-lined tables and a hand-written wish from the chef."
  }, {
    i: Users,
    t: "Private Parties",
    s: "Buy out a section — or the whole cottage — for the evening."
  }, {
    i: Music,
    t: "Corporate Meetups",
    s: "Quiet rooms, projector, and bottomless filter coffee."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 sm:py-32 gradient-warm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Events & Celebrations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl sm:text-5xl text-balance", children: "For your most-loved moments" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: events.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.07, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full rounded-3xl bg-card border border-border/70 p-7 shadow-soft hover:-translate-y-1 transition-transform", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full gradient-gold grid place-items-center text-white shadow-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(e.i, { size: 20 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-xl", children: e.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: e.s }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#reserve", className: "mt-5 inline-flex items-center gap-1 text-sm text-[var(--gold-deep)] hover:gap-2 transition-all", children: [
        "Plan with us ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
      ] })
    ] }) }, e.t)) })
  ] }) });
}
function Story() {
  const timeline = [{
    y: "2012",
    t: "A small kitchen, a big dream",
    s: "Piccolo began as a six-table cottage with one espresso machine and a hand-painted sign."
  }, {
    y: "2016",
    t: "Our wood-fired oven arrives",
    s: "Hand-built in Naples, shipped, then carried up the garden path piece by piece."
  }, {
    y: "2019",
    t: "The fringed lamps come home",
    s: "Each shade hand-stitched by artisans in Jaipur — no two are the same."
  }, {
    y: "2024",
    t: "Still candle-lit, still cottage-quiet",
    s: "Twelve years on, every cup is still poured by hand and every plate still plated with care."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "story", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "lg:sticky lg:top-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "About us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl sm:text-5xl leading-[1.05] text-balance", children: [
        "A little cottage with a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-script text-gold", children: "very big heart" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground max-w-md", children: "We built Café de Piccolo for slow mornings, lingering brunches and conversations that go on a little too long. Everything here — from the linens to the lamps to the loaf of sourdough — is made by hand, with love." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded-3xl overflow-hidden shadow-luxe aspect-[4/3]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: exterior, alt: "Café de Piccolo exterior", className: "h-full w-full object-cover" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 top-1 bottom-1 w-px bg-gradient-to-b from-transparent via-[var(--gold-deep)]/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-10", children: timeline.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative pl-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-1 h-6 w-6 rounded-full gradient-gold shadow-gold ring-4 ring-background" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-script text-2xl text-gold", children: e.y }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mt-1", children: e.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: e.s })
      ] }) }, e.y)) })
    ] })
  ] }) });
}
function InstagramFeed() {
  const feed = [interiorMain, lampTable, cozyCorner, interiorMural, checkerFloor, chalkboard];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 sm:py-32 bg-cream-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "@cafedepiccolo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl sm:text-5xl text-balance", children: "From our table to your feed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "mt-4 inline-flex items-center gap-2 text-sm text-[var(--gold-deep)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 16 }),
        " Follow along"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3", children: feed.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.04, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "group relative block aspect-square rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p, alt: "", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center bg-black/0 group-hover:bg-black/40 transition-colors text-white opacity-0 group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 22 }) })
    ] }) }, i)) })
  ] }) });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-stretch", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Visit us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl sm:text-5xl text-balance", children: "Come see the cottage in person" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-md", children: "Tucked beneath fairy lights at the end of a quiet lane. Come for the coffee, stay for the candle-lit corners." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid sm:grid-cols-2 gap-4", children: [{
        i: MapPin,
        t: "Address",
        s: ADDRESS,
        href: MAPS_URL,
        ext: true
      }, {
        i: Clock,
        t: "Hours",
        s: "Mon–Sun · 8 am – 11 pm"
      }, {
        i: Phone,
        t: "Call",
        s: PHONE,
        href: `tel:${PHONE_TEL}`
      }, {
        i: Mail,
        t: "WhatsApp",
        s: WHATSAPP,
        href: WHATSAPP_URL,
        ext: true
      }, {
        i: Wifi,
        t: "Wi-Fi",
        s: "Fast & free, all day"
      }, {
        i: Car,
        t: "Parking",
        s: "Free parking on Rajpur Road"
      }].map((c) => {
        const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-[oklch(0.97 0.04 75)] grid place-items-center text-[var(--gold-deep)] shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.i, { size: 16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: c.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm leading-snug", children: c.s })
          ] })
        ] });
        return c.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: c.href, target: c.ext ? "_blank" : void 0, rel: c.ext ? "noopener noreferrer" : void 0, className: "rounded-2xl bg-card border border-border/70 p-4 shadow-soft hover:border-[var(--gold-deep)] transition-colors", children: inner }, c.t) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-card border border-border/70 p-4 shadow-soft", children: inner }, c.t);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#reserve", className: "rounded-full gradient-gold text-white px-6 py-3 text-sm shadow-gold", children: "Reserve a Table" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "rounded-full border border-border bg-card px-6 py-3 text-sm hover:border-[var(--gold-deep)] transition-colors", children: "WhatsApp us" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full min-h-[420px] rounded-[2rem] overflow-hidden shadow-luxe border border-border/70", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: exterior, alt: "Café de Piccolo cottage at 180 Rajpur Road, Dehradun", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full flex flex-col justify-end p-8 sm:p-10 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex w-fit items-center gap-2 rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-[0.3em]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 12 }),
          " Get Directions"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-4 font-display text-3xl sm:text-4xl leading-tight text-balance", children: [
          "Find the cottage on ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-script text-[oklch(0.88 0.13 75)]", children: "Rajpur Road" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm sm:text-base text-white/85 max-w-md", children: ADDRESS }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: MAPS_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 text-sm font-medium text-white shadow-gold hover:scale-[1.03] transition-transform", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16 }),
            " Open in Google Maps ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${PHONE_TEL}`, className: "inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3 text-sm font-medium text-white hover:bg-white/15 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14 }),
            " ",
            PHONE
          ] })
        ] })
      ] })
    ] }) })
  ] }) });
}
export {
  Index as component
};
