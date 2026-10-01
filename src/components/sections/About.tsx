import { Eye, Target, Award } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function About() {
  const { about } = siteContent;

  return (
    <section
      id="about"
      className="section-padding bg-card border-y border-border"
      aria-labelledby="about-heading"
    >
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-secondary tracking-wide mb-2">
            {about.title}
          </p>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            {about.subtitle}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground prose-ar leading-relaxed">
            {about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <article className="bg-background rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 text-primary">
              <Eye className="w-6 h-6" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              {about.vision.title}
            </h3>
            <p className="text-muted-foreground prose-ar text-sm md:text-base leading-relaxed">
              {about.vision.text}
            </p>
          </article>

          <article className="bg-background rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 text-primary">
              <Target className="w-6 h-6" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              {about.mission.title}
            </h3>
            <p className="text-muted-foreground prose-ar text-sm md:text-base leading-relaxed">
              {about.mission.text}
            </p>
          </article>

          <article className="bg-background rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 text-primary">
              <Award className="w-6 h-6" aria-hidden />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              {about.experience.title}
            </h3>
            <p className="text-muted-foreground prose-ar text-sm md:text-base leading-relaxed">
              {about.experience.text}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
