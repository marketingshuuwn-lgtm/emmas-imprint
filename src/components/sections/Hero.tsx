import { MessageCircle, Leaf, ArrowDown } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-20 pb-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-muted/80 via-background to-background" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-secondary mb-4 tracking-wide">
            <Leaf className="w-4 h-4" aria-hidden />
            {hero.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.15] tracking-tight mb-6"
          >
            {hero.headline}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground prose-ar max-w-2xl mx-auto mb-8 leading-relaxed">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
            <Button
              href={hero.primaryCta.href}
              external
              size="lg"
              className="w-full sm:w-auto gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 sm:gap-12">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-muted-foreground/60">
          <span className="text-xs">اكتشف المزيد</span>
          <ArrowDown className="w-4 h-4 animate-bounce" aria-hidden />
        </div>
      </div>
    </section>
  );
}
