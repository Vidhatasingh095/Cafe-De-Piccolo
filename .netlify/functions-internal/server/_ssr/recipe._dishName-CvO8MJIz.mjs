import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { f as findDishByName, N as Nav, R as Reveal, F as Footer } from "./dishes-Bf4OM8vE.mjs";
import { R as Route } from "./router-CCx_uRRA.mjs";
import { j as ArrowLeft, S as Star } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function RecipeDetailPage() {
  const params = Route.useParams();
  const navigate = useNavigate();
  const dishName = decodeURIComponent(params.dishName);
  const dish = findDishByName(dishName);
  if (!dish) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-display text-foreground mb-4", children: "Dish Not Found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "The dish you're looking for doesn't exist or has been removed." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center justify-center gap-2 rounded-full gradient-gold px-6 py-3 text-white shadow-gold font-medium hover:scale-[1.01] transition-transform", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 }),
        "Back to Home"
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-clip", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigate({
        to: "/"
      }), className: "mb-8 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 20 }),
        "Back to Home"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-3xl overflow-hidden shadow-luxe", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: dish.img, alt: dish.name, className: "h-80 sm:h-96 w-full object-cover" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl leading-tight mb-2", children: dish.name }),
            dish.tag && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground italic text-lg font-serif-d", children: dish.tag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display text-[var(--gold-deep)] mt-3", children: dish.price })
          ] }),
          dish.desc && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: dish.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            dish.veg !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center gap-1 text-xs uppercase tracking-widest rounded-full px-3 py-1.5 border ${dish.veg ? "border-emerald-300/60 text-emerald-700 bg-emerald-50" : "border-rose-300/60 text-rose-700 bg-rose-50"}`, children: dish.veg ? "Veg" : "Non-veg" }),
            dish.best && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest rounded-full gradient-gold text-white px-3 py-1.5", children: "Bestseller" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-muted/30 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-3", children: "About the Dish" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground/80 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Origin:" }),
              " ",
              dish.aboutDish.origin
            ] }),
            dish.aboutDish.funFact && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground italic", children: [
              "💡 ",
              dish.aboutDish.funFact
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-muted/30 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-4", children: "Reviews" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: dish.reviews.map((review, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-background/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 text-[var(--gold-deep)] mb-2", children: Array.from({
                length: review.r
              }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 16, fill: "currentColor" }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground/80 italic mb-1", children: [
                '"',
                review.t,
                '"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                "— ",
                review.n
              ] })
            ] }, index)) })
          ] })
        ] }) })
      ] }),
      dish.recipe && /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl mb-8", children: "Recipe" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-muted/30 p-6 sm:p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-5 flex items-center gap-2", children: "Ingredients" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: dish.recipe.ingredients.map((ing, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-lg text-foreground/85 flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 text-[var(--gold-deep)] font-bold", children: "•" }),
              ing
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-muted/30 p-6 sm:p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-5 flex items-center gap-2", children: "Steps" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-4", children: dish.recipe.steps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-lg text-foreground/85 flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-1 font-display text-xl text-[var(--gold-deep)] font-bold", children: [
                index + 1,
                "."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: step })
            ] }, index)) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#reserve", className: "inline-flex items-center justify-center gap-3 rounded-full gradient-gold px-8 py-4 text-white shadow-gold font-medium text-lg hover:scale-[1.01] transition-transform", children: "Reserve a Table" }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  RecipeDetailPage as component
};
