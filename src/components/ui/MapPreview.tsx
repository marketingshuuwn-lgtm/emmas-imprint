"use client";

export function MapPreview({ src, address }: { src: string; address?: string }) {
  return (
    <div className="relative flex flex-1 flex-col w-full h-full min-h-[380px] lg:min-h-[440px]">
      <iframe
        id="nursery-map"
        src={src}
        title="موقع مشاتل مؤسسة نوف الرويلي على طريق أبو بكر الصديق بالرياض"
        aria-label={address ? `خريطة موقع مشاتل مؤسسة نوف الرويلي: ${address}` : "خريطة موقع مشاتل مؤسسة نوف الرويلي"}
        className="w-full h-full flex-1 border-0 rounded-2xl"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
