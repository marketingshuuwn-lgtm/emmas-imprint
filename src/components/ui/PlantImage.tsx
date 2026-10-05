"use client";

import { useState } from "react";
import Image from "next/image";
import { Sprout } from "lucide-react";

interface Props {src?:string;name:string;sizes:string;compact?:boolean;}
function PlantPhoto({src,name,sizes,compact}:Props) {
  const [failed,setFailed] = useState(false);
  if (!src || failed) return <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3 text-center text-[#183324]" role="img" aria-label={`لا توجد صورة موثقة لـ${name}`}>
    <Sprout size={compact?24:36} aria-hidden />
    {!compact&&<span className="text-sm">صورة الصنف غير متاحة</span>}
  </div>;
  return <Image src={src} alt={`صورة توضيحية لـ${name}`} fill sizes={sizes} className="object-cover" onError={()=>setFailed(true)} />;
}
export function PlantImage(props:Props) {return <PlantPhoto key={props.src??"missing"} {...props} />;}
