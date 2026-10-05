import "./fonts.css";
import { pageMetadata } from "@/lib/seo";
import { corePages } from "@/content/page-info";
import "./globals.css";
import { MobileQuickBar } from "@/components/layout/MobileQuickBar";

export const metadata = {
  ...pageMetadata(corePages.home),
  icons: { icon: "/icon.png", shortcut: "/icon.png", apple: "/apple-icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <head>
        <link rel="preload" href="/fonts/readex-site.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/lemonada-site.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <a id="skip-link" href="#main-content" className="skip-link">تجاوز إلى المحتوى</a>
        {children}
        <MobileQuickBar />
      </body>
    </html>
  );
}
