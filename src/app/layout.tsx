import { pageMetadata } from "@/lib/seo";
import { corePages } from "@/content/page-info";
import "./globals.css";
import { MobileQuickBar } from "@/components/layout/MobileQuickBar";

export const metadata = {
  ...pageMetadata(corePages.home),
  icons: { icon: "/images/logo.png", shortcut: "/images/logo.png", apple: "/images/logo.png" },
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
