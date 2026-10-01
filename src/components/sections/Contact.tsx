import { MessageCircle, Phone, MapPin } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const { contact, business } = siteContent;

  return (
    <section
      id="contact"
      className="section-padding bg-primary text-primary-foreground relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="container-main relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold text-accent tracking-wide mb-2">
            {contact.title}
          </p>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            {contact.subtitle}
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/85 prose-ar leading-relaxed mb-8">
            {contact.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
            <Button
              href={contact.primaryCta.href}
              external
              size="lg"
              className="w-full sm:w-auto bg-white text-primary hover:bg-accent gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              {contact.primaryCta.label}
            </Button>
            <Button
              href={contact.secondaryCta.href}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary gap-2"
            >
              <Phone className="w-5 h-5" />
              {contact.secondaryCta.label}
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-primary-foreground/80">
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              {business.phoneDisplay}
            </a>
            <span className="hidden sm:inline opacity-40">|</span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {business.address}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
