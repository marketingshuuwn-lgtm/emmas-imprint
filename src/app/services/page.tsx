import { JsonLd } from "@/components/ui/JsonLd";
import { servicesSchema } from "@/lib/structured-data";
import { readSiteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";
import { corePages } from "@/content/page-info";
export const metadata = pageMetadata(corePages.services);
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageIntro } from "@/components/layout/PageIntro";
import { Services } from "@/components/sections/Services";
import { siteContent } from "@/content/site-content";

export default function ServicesPage() {
  return <><JsonLd data={servicesSchema(readSiteConfig().origin)} /><Header /><main id="main-content" tabIndex={-1}>
    <PageIntro label="خدمات الحدائق" heading="تنسيق الحدائق والري والصيانة في الرياض" description={siteContent.services.description} />
    <nav aria-label="اختيار الخدمة" className="container-main py-7 flex flex-wrap gap-3">
      {siteContent.services.items.map(service => <a key={service.id} href={`#${service.id}`} className="bg-white text-[#183324] border border-[#d6c7b5] rounded-xl font-bold px-4 py-3">{service.title}</a>)}
    </nav>
    <Services />
    <section className="container-main py-12" aria-labelledby="steps-heading">
      <h2 id="steps-heading" className="text-2xl font-heading font-bold text-[#102117] mb-6">كيف يبدأ طلب الخدمة؟</h2>
      <ol className="grid md:grid-cols-3 gap-5 list-decimal pr-6">
        <li className="p-5"><h3 className="text-lg font-bold mb-3">صف احتياجك</h3><p className="text-[#424944]">اذكر الخدمة وموقعك في الرياض والمساحة أو وصف المشكلة. الصور اختيارية، ويمكن طلب الري أو الصيانة وحدهما.</p></li>
        <li className="p-5"><h3 className="text-lg font-bold mb-3">راجع المعاينة والعرض</h3><p className="text-[#424944]">إذا احتاج العمل زيارة، يُؤكد الموعد وأي تكلفة لها قبل الحضور. يوضح العرض نطاق العمل والمواد والسعر والمدة المتفق عليها.</p></li>
        <li className="p-5"><h3 className="text-lg font-bold mb-3">اتفق على التنفيذ والمتابعة</h3><p className="text-[#424944]">تُحدد مسؤوليات التنفيذ والعناية وشروط الضمان إن كان مقدمًا قبل التأكيد. فتح محادثة لا يؤكد حجزًا أو طلبًا.</p></li>
      </ol>
      <div className="flex flex-wrap gap-4 mt-6"><Link href="/plants" className="bg-[#183324] text-white rounded-xl px-5 py-3 font-bold">تصفح النباتات للتوريد</Link><Link href="/#visit" className="text-[#183324] underline px-3 py-3 font-bold">الموقع وساعات التواصل</Link></div>
    </section>
  </main><Footer /></>;
}
