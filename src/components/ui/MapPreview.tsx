"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

export function MapPreview({ src, address }: { src: string; address: string }) {
  const [loaded, setLoaded] = useState(false);
  return <div className="relative flex flex-1 flex-col min-h-[340px]">
    {loaded ? <iframe id="nursery-map" src={src} title="موقع بصمة ايما الزراعية على طريق أبو بكر الصديق بالرياض" className="absolute inset-0 w-full h-full border-0" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={false} /> :
      <div id="nursery-map" className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center text-[#faf8f5]">
        <MapPin size={40} aria-hidden />
        <h3 className="font-heading font-bold text-xl">موقع المشتل</h3>
        <p className="text-[#d6c7b5] leading-relaxed">{address}</p>
        <button type="button" onClick={() => setLoaded(true)} aria-controls="nursery-map" className="rounded-xl bg-[#9c4c2d] hover:bg-[#7f3d25] px-6 py-3 font-bold cursor-pointer">عرض الخريطة</button>
        <p className="text-sm text-[#d6c7b5]">يمكن فتح الاتجاهات من رابط الخرائط بجانب بيانات الزيارة.</p>
      </div>}
  </div>;
}
