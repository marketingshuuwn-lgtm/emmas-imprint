import {
  Trees,
  Sprout,
  Flower2,
  Wrench,
  Droplets,
  Lightbulb,
  Fence,
  Leaf,
} from "lucide-react";
import { siteContent } from "@/content/site-content";

const icons = [
  Trees,
  Sprout,
  Flower2,
  Wrench,
  Droplets,
  Lightbulb,
  Fence,
  Leaf,
];

export function Services() {
  const { services } = siteContent;

  return (
    <section
      id="services"
      className="section-padding"
      aria-labelledby="services-heading"
    >
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-secondary tracking-wide mb-2">
            {services.title}
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            {services.subtitle}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground prose-ar leading-relaxed">
            {services.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.items.map((item, index) => {
            const Icon = icons[index] ?? Sprout;
            return (
              <article
                key={item.id}
                className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-muted group-hover:bg-accent flex items-center justify-center text-primary transition-colors">
                    <Icon className="w-5 h-5" aria-hidden />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground/50 tracking-wider">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground prose-ar leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
