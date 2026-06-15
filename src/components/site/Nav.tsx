import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#signature", label: "Signature" },
  { href: "#tour", label: "Gallery" },
  { href: "#reserve", label: "Reserve" },
  { href: "#story", label: "Our Story" },
  { href: "#contact", label: "Visit" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all ${scrolled ? "" : ""}`}>
        <div
          className={`flex items-center justify-between rounded-full px-5 sm:px-7 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <span className="font-script text-2xl text-gold leading-none">Café de</span>
            <span className="font-display text-xl tracking-wider text-ink">PICCOLO</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-foreground/70 hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[var(--gold-deep)] after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#reserve"
            className="hidden md:inline-flex items-center justify-center rounded-full gradient-gold px-5 py-2.5 text-sm font-medium text-white shadow-gold hover:scale-[1.03] transition-transform"
          >
            Reserve
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-10 w-10 grid place-items-center rounded-full glass"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 rounded-3xl glass p-5 shadow-soft"
          >
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1.5 text-foreground/80">
                  {l.label}
                </a>
              ))}
              <a
                href="#reserve"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full gradient-gold px-5 py-3 text-sm font-medium text-white"
              >
                Reserve a Table
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
