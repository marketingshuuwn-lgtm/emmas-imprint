"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2, Eye, MessageCircle } from "lucide-react";

interface Project {
  id: string;
  title: string;
  location: string;
  category: "villas" | "lighting" | "waterfalls";
  description: string;
  image: string;
  scope: string[];
}

const projects: Project[] = [
  {
    id: "p1",
    title: "تنسيق متكامل لحديقة فيلا خاصة",
    location: "حي النرجس — الرياض",
    category: "villas",
    description: "تصميم وتنفيذ حديقة خارجية مودرن مع شلال جداري حجري، برجولة ألمنيوم بجلسة دافئة، ثيل طبيعي، وزهور الجهنمية المتسلقة.",
    image: "/images/service-landscaping.jpg",
    scope: ["ثيل طبيعي C2000", "شلال جداري مائي", "مظلة وبرجولة ذكية", "شبكة ري أوتوماتيكية"],
  },
  {
    id: "p2",
    title: "شبكة ري ضبابي وإنارة حدائق ليلية",
    location: "حي حطين — الرياض",
    category: "lighting",
    description: "تركيب شبكة ري مدفونة بالكامل بمؤقتات ذكية، مع نظام رذاذ لتلطيف الجو صيفاً، وإنارة معمارية دافئة مسلطة على النخيل والممرات.",
    image: "/images/service-lighting-irrigation.jpg",
    scope: ["مؤقتات ري Hunter رقمية", "إنارة LED دافئة 3000K", "رذاذ تبريد صيفي", "توفير 40% من المياه"],
  },
  {
    id: "p3",
    title: "تصميم واحة خضراء متصلة بمسبح الفيلا",
    location: "حي الياسمين — الرياض",
    category: "waterfalls",
    description: "دمج المسطح الأخضر الطبيعي مع ممشى حجري مضاء، وأشجار واشنطونيا وأريكا بمحيط المسبح لتوفير خصوصية وجمال طبيعي استثنائي.",
    image: "/images/hero-garden.jpg",
    scope: ["أشجار ونخيل زينة", "مسطحات عشبية كثيفة", "ممرات حجر طبيعي", "جلسة خارجية مدمجة"],
  },
];

export function Showcase() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentProject = projects[activeTab];

  return (
    <section className="section-padding bg-gradient-to-b from-[#f4f8f4] to-white relative overflow-hidden" id="showcase">
      <div className="container-main">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>معرض الأعمال الحية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 mb-5 leading-tight">
            شاهد كيف نحول المساحات إلى <span className="text-emerald-700">تحف طبيعية</span>
          </h2>
          <p className="text-base md:text-lg text-emerald-900/80 prose-ar max-w-2xl mx-auto">
            نماذج واقعية من مشاريع نفذها فريق بصمة ايما الزراعية لعملائنا في مختلف أحياء الرياض.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === idx
                  ? "bg-emerald-900 text-white shadow-xl shadow-emerald-900/25 scale-105"
                  : "bg-white text-emerald-900 border border-emerald-200 hover:bg-emerald-50"
              }`}
            >
              <span>{proj.title}</span>
              <span className="text-[11px] opacity-75">({proj.location.split("—")[0]})</span>
            </button>
          ))}
        </div>

        {/* Featured Showcase Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-emerald-200/80 shadow-2xl grid lg:grid-cols-12 items-stretch">
          
          {/* Visual Main Picture */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[500px] w-full overflow-hidden group">
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 right-5 left-5 text-white">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600/90 backdrop-blur-md mb-2 inline-block">
                {currentProject.location}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">{currentProject.title}</h3>
            </div>
          </div>

          {/* Project Details & Scope */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-white to-emerald-50/40 text-right">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 mb-2">
                <Eye className="w-4 h-4" />
                <span>تفاصيل المشروع والتنفيذ</span>
              </div>
              <h3 className="text-2xl font-black text-emerald-950 mb-3">
                {currentProject.title}
              </h3>
              <p className="text-sm text-emerald-900/80 prose-ar leading-relaxed mb-6">
                {currentProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900/60 mb-3">
                  نطاق العمل المنفذ:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentProject.scope.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white p-2.5 rounded-xl border border-emerald-100 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-100">
              <a
                href={`https://wa.me/966578326985?text=${encodeURIComponent(
                  `مرحباً بصمة ايما، شاهدت مشروع (${currentProject.title} - ${currentProject.location}) وأود تصميم حديقة مشابهة لمنزلي.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-900/20 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>أرغب بتصميم مماثل لحديقتي (معاينة مجانية)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
