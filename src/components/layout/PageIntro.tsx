import Link from "next/link";

export function PageIntro({ label, heading, description, parent }: {
  label: string; heading: string; description: string; parent?: { label: string; href: string };
}) {
  return <section className="bg-[#102117] text-white pt-32 pb-10 sm:pb-14" aria-labelledby="page-heading">
    <div className="container-main">
      <nav aria-label="مسار التصفح" className="flex flex-wrap items-center gap-2 text-sm text-[#d6c7b5] mb-5">
        <Link href="/" className="underline py-2">الرئيسية</Link>
        {parent && <><span aria-hidden>/</span><Link href={parent.href} className="underline py-2">{parent.label}</Link></>}
        <span aria-hidden>/</span><span aria-current="page">{label}</span>
      </nav>
      <h1 id="page-heading" className="font-heading font-bold text-3xl sm:text-4xl leading-relaxed mb-5">{heading}</h1>
      <p className="max-w-3xl text-base sm:text-lg text-[#e8dfd3] leading-relaxed">{description}</p>
    </div>
  </section>;
}
