"use client";

import { JsonLd } from "@/components/ui/JsonLd";
import { catalogSchema } from "@/lib/structured-data";


import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, MessageCircle, LayoutGrid, List, ArrowRight } from "lucide-react";


import { ImageCreditCaption } from "@/components/ui/ImageCreditCaption";
import { PlantImage } from "@/components/ui/PlantImage";
import { allPlantsCatalog } from "@/content/plants-catalog-data";
import { matchesPlantSearch } from "@/lib/plant-search";
import { siteContent } from "@/content/site-content";

type Category = "all" | "indoor" | "outdoor";
export function PlantCatalog({ initialCategory = "all", origin }: { initialCategory?: Category; origin?: string }) {
  const [category, setCategory] = useState<Category>(initialCategory);
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [limit, setLimit] = useState(20);
  useEffect(() => {
    setCategory(initialCategory); setLimit(20); setQuery("");
  }, [initialCategory]);
  const filtered = useMemo(() => allPlantsCatalog.filter(plant =>
    (category === "all" || plant.type === category || (category === "outdoor" && plant.alsoOutdoor)) && matchesPlantSearch(plant, query)
  ), [category, query]);
  const categories: {id:Category;label:string}[] = [
    {id:"all",label:"كل النباتات"}, {id:"indoor",label:"نباتات داخلية"}, {id:"outdoor",label:"نباتات خارجية"},
  ];
  const reset = () => {setQuery(""); setCategory("all"); setLimit(20);};
  return (
    <>
      <JsonLd data={catalogSchema(filtered.slice(0, limit), origin)} />

      <main tabIndex={-1} id="main-content" className="bg-[#faf8f5] min-h-screen">
        <section className="bg-[#102117] text-white pt-32 pb-10" aria-labelledby="catalog-heading">
          <div className="container-main">
            <nav aria-label="مسار التصفح" className="flex gap-2 text-sm text-[#d6c7b5] mb-5">
              <Link href="/" className="inline-flex items-center gap-1"><ArrowRight size={16} aria-hidden />الرئيسية</Link>
              <span aria-hidden>/</span><span aria-current="page">دليل النباتات</span>
            </nav>
            <h1 id="catalog-heading" className="font-heading text-3xl sm:text-4xl font-bold mb-4">اختر نباتًا يناسب مكانك</h1>
            <p className="text-base text-[#e8dfd3] max-w-2xl">ابحث باسم النبات أو اختر الفئة. اسأل عن الحجم والسعر والتوفر قبل الطلب؛ عرض النبات هنا لا يعني توفره حاليًا.</p>
            <p className="text-sm text-[#d6c7b5] mt-3">الصور توضيحية للأصناف؛ تختلف الأحجام والأشكال المتاحة. صف لنا المكان إذا كنت تحتاج مساعدة في الاختيار.</p>
          </div>
        </section>
        <section className="container-main py-8" aria-label="البحث في النباتات">
          <div className="bg-white rounded-2xl border border-[#e8dfd3] p-5 sm:p-6 mb-7">
            <label htmlFor="plant-search" className="block font-bold text-[#102117] mb-2">اسم النبات</label>
            <div className="relative">
              <Search className="absolute right-4 top-4 text-[#2f5d43]" size={20} aria-hidden />
              <input id="plant-search" type="search" value={query} onChange={e=>{setQuery(e.target.value);setLimit(20);}}
                placeholder="مثال: أكاسيا، اجلاونيما، ZZ" aria-describedby="search-help" autoComplete="off"
                className="w-full py-3 pr-12 pl-4 rounded-xl border border-[#d6c7b5] bg-[#faf8f5] text-base placeholder:text-[#424944]" />
            </div>
            <p id="search-help" className="text-sm text-[#424944] mt-2">يمكن كتابة الاسم بالعربية أو ببعض الأسماء الإنجليزية المتداولة، مع الهمزة أو دونها.</p>
            <div className="flex flex-wrap justify-between gap-4 mt-5">
              <div className="flex flex-wrap gap-2" role="group" aria-label="فئة النباتات">
                {categories.map(item=><button type="button" key={item.id} aria-pressed={category===item.id}
                  onClick={()=>{setCategory(item.id);setLimit(20);}}
                  className={`px-4 py-3 rounded-xl text-sm font-bold border ${category===item.id?"bg-[#183324] text-white border-[#183324]":"bg-[#faf8f5] text-[#183324] border-[#d6c7b5]"}`}>{item.label}</button>)}
              </div>
              <div role="group" aria-label="طريقة عرض النباتات" className="flex gap-2">
                <button type="button" aria-pressed={view==="grid"} onClick={()=>setView("grid")} className={`px-4 py-3 rounded-xl text-sm flex items-center gap-2 ${view==="grid"?"bg-[#e9f2ec] text-[#183324]":"bg-white text-[#424944]"}`}><LayoutGrid size={18} aria-hidden />بطاقات</button>
                <button type="button" aria-pressed={view==="list"} onClick={()=>setView("list")} className={`px-4 py-3 rounded-xl text-sm flex items-center gap-2 ${view==="list"?"bg-[#e9f2ec] text-[#183324]":"bg-white text-[#424944]"}`}><List size={18} aria-hidden />قائمة</button>
              </div>
            </div>
          </div>
          <p role="status" aria-live="polite" aria-atomic="true" className="text-sm text-[#183324] mb-5">{filtered.length} نتيجة{query.trim()?` للبحث عن «${query.trim()}»`:""} — تظهر {Math.min(limit,filtered.length)} منها</p>
          {filtered.length===0 ? <div className="text-center bg-white rounded-2xl p-8 border border-[#e8dfd3]">
            <h2 className="text-xl font-bold mb-3">لم نجد نباتًا بهذا الاسم</h2><p className="text-[#424944] mb-4">جرب اسمًا أقصر أو فئة أخرى. يمكنك وصف النبات للفريق عبر واتساب.</p>
            <button type="button" onClick={reset} className="bg-[#183324] text-white px-5 py-3 rounded-xl font-bold">مسح البحث والفلاتر</button>
            <a href={siteContent.business.whatsapp} target="_blank" rel="noopener noreferrer" className="block text-[#183324] underline mt-4 py-2">مساعدة في العثور على النبات عبر واتساب</a>
          </div> : <ul className={view==="grid"?"grid sm:grid-cols-2 lg:grid-cols-4 gap-5":"flex flex-col gap-3"}>
            {filtered.slice(0,limit).map(plant=><li key={`${plant.type}-${plant.id}`} className={`bg-white rounded-2xl border border-[#e8dfd3] overflow-hidden ${view==="list"?"flex items-center gap-4 p-4":"flex flex-col"}`}>
              <div className={view==="grid"?"relative h-52 bg-[#e9f2ec]":"relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-[#e9f2ec]"}>
                <PlantImage src={plant.image} name={plant.name} compact={view==="list"} sizes={view==="list"?"80px":"(min-width: 1216px) 273px, (min-width: 1024px) calc(25vw - 32px), (min-width: 768px) calc(50vw - 42px), (min-width: 640px) calc(50vw - 30px), calc(100vw - 40px)"} />
              </div>
              <div className={view==="grid"?"p-5 flex flex-col flex-1":"flex-1 min-w-0"}>
                <h2 className="font-bold text-base text-[#102117] mb-2">{plant.name}</h2>
                <ImageCreditCaption credit={plant.imageCredit} />
                <p className="text-sm text-[#424944] mb-4">{plant.alsoOutdoor?"اختيار للمواقع الداخلية أو الخارجية المناسبة":plant.type==="indoor"?"نبات داخلي — راجع احتياجه للإضاءة والري":"نبات خارجي — راجع ظروف الشمس ومساحة النمو"}</p>
                <a href={`${siteContent.business.whatsapp}?text=${encodeURIComponent(`مرحبًا بصمة ايما، أود معرفة سعر وتوفر وأحجام ${plant.name}. الكمية المطلوبة: `)}`} target="_blank" rel="noopener noreferrer"
                  aria-label={`استفسار عن السعر والتوفر: ${plant.name}`} className="inline-flex gap-2 items-center justify-center bg-[#e9f2ec] text-[#183324] rounded-xl px-3 py-3 text-sm font-bold mt-auto"><MessageCircle size={16} aria-hidden />السعر والتوفر</a>
              </div>
            </li>)}
          </ul>}
          {filtered.length>limit&&<div className="text-center mt-7"><button type="button" onClick={()=>setLimit(limit+20)} className="bg-[#183324] text-white rounded-xl py-3 px-6 font-bold">عرض المزيد من النباتات</button></div>}
          <section className="bg-[#183324] text-white rounded-2xl p-6 sm:p-8 my-10" aria-labelledby="bulk-heading">
            <h2 id="bulk-heading" className="text-xl sm:text-2xl font-bold mb-3">تحتاج كميات لمشروع؟</h2>
            <p className="text-[#e8dfd3] mb-5">أرسل أسماء النباتات والأحجام والكميات وموقع التوريد في الرياض لطلب عرض سعر يناسب المشروع.</p>
            <a href={`${siteContent.business.whatsapp}?text=${encodeURIComponent("مرحبًا بصمة ايما، أود طلب عرض سعر لكميات نباتات لمشروع في الرياض. قائمة الأصناف والأحجام والكميات والموقع: ")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#183324] font-bold rounded-xl px-5 py-3"><MessageCircle size={18} aria-hidden />طلب عرض سعر للكميات</a>
          </section>
        </section>
      </main>

    </>
  );
}
