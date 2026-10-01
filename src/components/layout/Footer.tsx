import { Phone, MapPin } from "lucide-react";
import { siteContent } from "@/content/site-content";

export function Footer() {
  const { footer, business } = siteContent;

  return (
    <footer className="bg-foreground text-background pt-14 pb-8" role="contentinfo">
      <div className="container-main">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-bold text-lg text-background mb-4"
            >
              <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                س
              </span>
              {business.nameShort}
            </a>
            <p className="text-sm text-background/70 prose-ar leading-relaxed">
              {footer.description}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-background mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-background mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              {footer.servicesLinks.map((s) => (
                <li key={s}>
                  <span className="text-sm text-background/70">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-background mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden />
                {business.address}
              </li>
              <li>
                <a
                  href={`tel:${business.phone}`}
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden />
                  {business.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/15 pt-6 text-center text-sm text-background/50">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
