import Link from "next/link";
import { allPlantsCatalog } from "@/content/plants-catalog-data";
import { plantPages, type PlantPageContent } from "@/content/plant-pages";
import { siteContent } from "@/content/site-content";
import { PlantImage } from "@/components/ui/PlantImage";
import { ImageCreditCaption } from "@/components/ui/ImageCreditCaption";

export function PlantLanding({ page }: { page: PlantPageContent }) {
  return <div className="container-main py-10 sm:py-14 space-y-12">
    <nav aria-label="اختيار مساحة النباتات" className="flex flex-wrap gap-3">
      {plantPages.map(item => <Link key={item.slug} href={`/plants/${item.slug}`} aria-current={page.slug === item.slug ? "page" : undefined}
        className={`px-4 py-3 rounded-xl border font-bold ${page.slug === item.slug ? "bg-[#183324] text-white border-[#183324]" : "bg-white text-[#183324] border-[#d6c7b5]"}`}>{item.label}</Link>)}
    </nav>
    <section aria-labelledby="selection-heading">
      <h2 id="selection-heading" className="font-heading text-2xl font-bold text-[#102117] mb-6">{page.selectionTitle}</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {page.selection.map(item => <article key={item.title} className="editorial-card p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-[#183324] mb-3">{item.title}</h3><p className="text-[#424944]">{item.text}</p>
        </article>)}
      </div>
    </section>
    <section aria-labelledby="featured-heading">
      <h2 id="featured-heading" className="font-heading text-2xl font-bold text-[#102117] mb-3">خيارات تبدأ منها</h2>
      <p className="text-[#424944] mb-6">صور توضيحية للأصناف، وليست بيانًا بالتوفر الحالي. اسأل عن الحجم والشكل والسعر قبل الطلب.</p>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {page.plants.map(item => {
          const plant = allPlantsCatalog.find(entry => entry.name === item.name);
          return <li key={item.name} className="editorial-card rounded-2xl overflow-hidden flex flex-col">
            <div className="relative h-52 bg-[#e9f2ec]"><PlantImage src={plant?.image} name={item.name} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" /></div>
            <div className="p-5 flex flex-col flex-1"><h3 className="text-lg font-bold text-[#102117] mb-2">{item.name}</h3>
              <ImageCreditCaption credit={plant?.imageCredit} /><p className="text-[#424944] mb-5">{item.description}</p>
              <a href={`${siteContent.business.whatsapp}?text=${encodeURIComponent(`مرحبًا بصمة ايما، أود معرفة سعر وتوفر وأحجام ${item.name}. الكمية المطلوبة: `)}`} target="_blank" rel="noopener noreferrer" aria-label={`السعر والتوفر: ${item.name}`} className="mt-auto bg-[#e9f2ec] text-[#183324] text-center font-bold rounded-xl px-3 py-3">السعر والتوفر</a>
            </div>
          </li>;
        })}
      </ul>
      <Link href={`/plants?category=${page.catalogCategory}`} className="inline-flex bg-[#183324] text-white font-bold rounded-xl px-5 py-3 mt-6">تصفح جميع {page.catalogCategory === "indoor" ? "النباتات الداخلية" : "النباتات الخارجية"}</Link>
    </section>
    <section aria-labelledby="care-heading" className="bg-[#f4efea] border border-[#e8dfd3] p-6 sm:p-8 rounded-2xl">
      <h2 id="care-heading" className="font-heading text-2xl text-[#102117] font-bold mb-5">{page.careTitle}</h2>
      <ul className="list-disc pr-5 space-y-3 text-[#424944]">{page.care.map(text => <li key={text}>{text}</li>)}</ul>
      <Link href={page.slug === "offices" ? "/services#maintenance" : "/#faq"} className="inline-block py-3 mt-2 underline text-[#183324] font-bold">{page.slug === "offices" ? "تفاصيل خدمة الصيانة" : "أسئلة الاختيار والعناية"}</Link>
    </section>
    <section aria-labelledby="request-heading" className="bg-[#183324] text-white p-6 sm:p-8 rounded-2xl">
      <h2 id="request-heading" className="font-heading text-2xl font-bold mb-4">{page.requestTitle}</h2>
      <p className="text-[#e8dfd3] max-w-3xl mb-6">{page.request}</p>
      <div className="flex flex-wrap gap-3"><a href={`${siteContent.business.whatsapp}?text=${encodeURIComponent(page.requestMessage)}`} target="_blank" rel="noopener noreferrer" className="bg-[#9c4c2d] hover:bg-[#7f3d25] px-5 py-3 font-bold rounded-xl">{page.requestLabel}</a>
        <Link href="/#visit" className="border border-[#d6c7b5] px-5 py-3 font-bold rounded-xl">زيارة المشتل والتواصل</Link></div>
    </section>
  </div>;
}
