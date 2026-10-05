import type { Metadata } from "next";
import "./globals.css";
import { siteContent } from "@/content/site-content";
import { MobileQuickBar } from "@/components/layout/MobileQuickBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://emma-nursery.sa"),
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  keywords: siteContent.seo.keywords,
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    locale: "ar_SA",
    type: "website",
    siteName: siteContent.business.name,
    images: [
      {
        url: "/images/logo.png",
        width: 600,
        height: 600,
        alt: siteContent.business.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground pb-24 lg:pb-0">
        <a id="skip-link" href="#main-content" className="skip-link">تجاوز إلى المحتوى</a>
        {children}
        <MobileQuickBar />
      </body>
    </html>
  );
}
