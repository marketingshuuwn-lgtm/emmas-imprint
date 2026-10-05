import type { ImageCredit } from "@/content/plants-catalog-data";

export function ImageCreditCaption({credit}:{credit?:ImageCredit}) {
  if (!credit) return null;
  return <details className="text-sm text-[#424944] mb-3">
    <summary className="cursor-pointer underline underline-offset-2 py-2">مصدر الصورة</summary>
    {credit.author&&<p dir="auto">{credit.author}</p>}
    <div className="flex flex-wrap gap-x-3">
      <a href={credit.source} target="_blank" rel="noopener noreferrer" className="underline py-2">الملف الأصلي</a>
      {credit.licenseUrl&&<a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline py-2">{credit.license}</a>}
    </div>
    <p>صورة توضيحية، قد تُقص لتناسب البطاقة.</p>
  </details>;
}
