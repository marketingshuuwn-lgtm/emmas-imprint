import { Sun, HelpCircle } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function Plants() {
  const { plants } = siteContent;

  return (
    <section
      id="plants"
      className="section-padding bg-muted/50"
      aria-labelledby="plants-heading"
    >
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-secondary tracking-wide mb-2">
            {plants.title}
          </p>
          <h2
            id="plants-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            {plants.subtitle}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground prose-ar leading-relaxed">
            {plants.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {plants.categories.map((cat) => (
            <article
              key={cat.title}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary shrink-0">
                  <Sun className="w-5 h-5" aria-hidden />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground">
                  {cat.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground prose-ar mb-4 leading-relaxed">
                {cat.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {cat.plants.map((plant) => (
                  <li
                    key={plant}
                    className="px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-foreground"
                  >
                    {plant}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-card rounded-2xl p-6 md:p-8 border border-primary/20 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              {plants.tipsTitle}
            </h3>
          </div>
          <ol className="space-y-3 mb-6">
            {plants.tips.map((tip, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-primary text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-muted-foreground pt-0.5">{tip}</span>
              </li>
            ))}
          </ol>
          <p className="text-primary font-semibold text-center prose-ar">
            {plants.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
