import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Star } from "lucide-react";
import { findDishByName } from "../data/dishes";
import { Nav } from "../components/site/Nav";
import { Reveal } from "../components/site/Reveal";
import { Footer } from "../components/site/Footer";

export const Route = createFileRoute("/recipe/$dishName")({
  component: RecipeDetailPage,
});

function RecipeDetailPage() {
  const params = Route.useParams();
  const navigate = useNavigate();
  const dishName = decodeURIComponent(params.dishName);
  const dish = findDishByName(dishName);

  if (!dish) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-display text-foreground mb-4">Dish Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The dish you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full gradient-gold px-6 py-3 text-white shadow-gold font-medium hover:scale-[1.01] transition-transform"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Nav />
      <main className="pt-20">
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <button
              onClick={() => navigate({ to: "/" })}
              className="mb-8 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Home
            </button>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Image Section */}
              <Reveal>
                <div className="relative rounded-3xl overflow-hidden shadow-luxe">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="h-80 sm:h-96 w-full object-cover"
                  />
                </div>
              </Reveal>

              {/* Header & Info */}
              <Reveal delay={0.1}>
                <div className="flex flex-col gap-4">
                  <div>
                    <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-2">
                      {dish.name}
                    </h1>
                    {dish.tag && (
                      <p className="text-muted-foreground italic text-lg font-serif-d">
                        {dish.tag}
                      </p>
                    )}
                    <p className="text-2xl font-display text-[var(--gold-deep)] mt-3">
                      {dish.price}
                    </p>
                  </div>

                  {dish.desc && (
                    <p className="text-muted-foreground text-lg">{dish.desc}</p>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {dish.veg !== undefined && (
                      <span
                        className={`inline-flex items-center gap-1 text-xs uppercase tracking-widest rounded-full px-3 py-1.5 border ${
                          dish.veg
                            ? "border-emerald-300/60 text-emerald-700 bg-emerald-50"
                            : "border-rose-300/60 text-rose-700 bg-rose-50"
                        }`}
                      >
                        {dish.veg ? "Veg" : "Non-veg"}
                      </span>
                    )}
                    {dish.best && (
                      <span className="text-xs uppercase tracking-widest rounded-full gradient-gold text-white px-3 py-1.5">
                        Bestseller
                      </span>
                    )}
                  </div>

                  {/* About the Dish */}
                  <div className="rounded-2xl bg-muted/30 p-5">
                    <h3 className="font-display text-xl mb-3">About the Dish</h3>
                    <p className="text-foreground/80 mb-2">
                      <strong>Origin:</strong> {dish.aboutDish.origin}
                    </p>
                    {dish.aboutDish.funFact && (
                      <p className="text-muted-foreground italic">
                        💡 {dish.aboutDish.funFact}
                      </p>
                    )}
                  </div>

                  {/* Reviews */}
                  <div className="rounded-2xl bg-muted/30 p-5">
                    <h3 className="font-display text-xl mb-4">Reviews</h3>
                    <div className="space-y-4">
                      {dish.reviews.map((review, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-xl bg-background/80"
                        >
                          <div className="flex items-center gap-1 text-[var(--gold-deep)] mb-2">
                            {Array.from({ length: review.r }).map((_, i) => (
                              <Star key={i} size={16} fill="currentColor" />
                            ))}
                          </div>
                          <p className="text-foreground/80 italic mb-1">
                            "{review.t}"
                          </p>
                          <p className="text-sm text-muted-foreground">— {review.n}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Recipe Section (scrollable) */}
            {dish.recipe && (
              <Reveal delay={0.2}>
                <section className="mt-12">
                  <h2 className="font-display text-3xl sm:text-4xl mb-8">Recipe</h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Ingredients */}
                    <div className="rounded-3xl bg-muted/30 p-6 sm:p-8">
                      <h3 className="font-display text-2xl mb-5 flex items-center gap-2">
                        Ingredients
                      </h3>
                      <ul className="space-y-3">
                        {dish.recipe.ingredients.map((ing, index) => (
                          <li
                            key={index}
                            className="text-lg text-foreground/85 flex items-start gap-3"
                          >
                            <span className="mt-1 text-[var(--gold-deep)] font-bold">•</span>
                            {ing}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Steps */}
                    <div className="rounded-3xl bg-muted/30 p-6 sm:p-8">
                      <h3 className="font-display text-2xl mb-5 flex items-center gap-2">
                        Steps
                      </h3>
                      <ol className="space-y-4">
                        {dish.recipe.steps.map((step, index) => (
                          <li
                            key={index}
                            className="text-lg text-foreground/85 flex gap-4"
                          >
                            <span className="mt-1 font-display text-xl text-[var(--gold-deep)] font-bold">
                              {index + 1}.
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </section>
              </Reveal>
            )}

            {/* Reserve Button */}
            <Reveal delay={0.3}>
              <div className="mt-12 flex justify-center">
                <a
                  href="/#reserve"
                  className="inline-flex items-center justify-center gap-3 rounded-full gradient-gold px-8 py-4 text-white shadow-gold font-medium text-lg hover:scale-[1.01] transition-transform"
                >
                  Reserve a Table
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
