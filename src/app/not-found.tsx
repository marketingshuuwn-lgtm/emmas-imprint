import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Sprout } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f8faf8] text-[#0f2416] flex flex-col font-sans">
      <Header />
      <main className="flex-1 flex items-center justify-center py-32 px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-emerald-100 flex items-center justify-center text-emerald-800 shadow-md">
            <Sprout className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-black font-heading text-emerald-950">
            الصفحة غير موجودة
          </h1>
          <p className="text-sm text-emerald-800/80 leading-relaxed">
            عذراً، الرابط الذي تحاول الوصول إليه غير متاح أو تم نقله. يمكنك العودة إلى الصفحة الرئيسية لمتابعة التصفح.
          </p>
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-2xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg transition-colors"
            >
              <span>العودة للرئيسية</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
