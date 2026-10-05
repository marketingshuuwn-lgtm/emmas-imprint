export interface PlantCard {
  id: string;
  name: string;
  category: "indoor" | "outdoor" | "work";
  description: string;
  catalogName: string;
  tag: string;
}

export const plantsData: PlantCard[] = [
  // 1. نباتات للبيت
  {
    id: "sansevieria",
    name: "السانسيفيريا «جلد النمر»",
    category: "indoor",
    description: "أوراق قائمة تمنح الزاوية شكلًا مرتبًا. خيار لمن يفضّل حضورًا واضحًا وعناية بسيطة نسبيًا في الصالات والمداخل.",
    catalogName: "سانسيفيريا / جلد النمر",
    tag: "نباتات للبيت",
  },
  {
    id: "zz",
    name: "الزاميا «ZZ»",
    category: "indoor",
    description: "أوراق لامعة وتكوين متماسك؛ لمسة خضراء أنيقة للمداخل والزوايا تتحمل الإضاءة المعتدلة والتكييف.",
    catalogName: "الزاميا ZZ",
    tag: "نباتات للبيت",
  },
  {
    id: "pothos",
    name: "البوتس الذهبي",
    category: "indoor",
    description: "نبات متدلٍّ أو متسلق، يضيف حركة وحيوية إلى الرفوف والمكاتب وزوايا الصالة.",
    catalogName: "بوتس ذهبي Pothos",
    tag: "نباتات للبيت",
  },
  {
    id: "monstera",
    name: "المونستيرا «القفص الصدري»",
    category: "indoor",
    description: "أوراق كبيرة ذات شقوق مميزة؛ لمحبي النباتات التي تحضر بوضوح وفخامة في صالات الاستقبال.",
    catalogName: "مونستيرا",
    tag: "نباتات للبيت",
  },
  {
    id: "aglaonema",
    name: "أجلاونيما",
    category: "indoor",
    description: "تنوّع لوني بين درجات الأخضر والوردي في بعض أصنافها، يضيف تفصيلًا مختلفًا للمجلس أو الغرفة.",
    catalogName: "أجلاونيما",
    tag: "نباتات للبيت",
  },
  {
    id: "ficus-lyrata-home",
    name: "الفيكس ليراتا «تين الكمان»",
    category: "indoor",
    description: "أوراق عريضة تشبه الكمان، وحضور بارز يناسب المساحات والمداخل التي تحتاج نبتة شجرية لافتة.",
    catalogName: "فيكس ليراتا",
    tag: "نباتات للبيت",
  },

  // 2. خضرة للخارج
  {
    id: "bougainvillea",
    name: "الجهنمية",
    category: "outdoor",
    description: "ألوان بنفسجية وحمراء ووردية كثيفة، لتنويع مشهد الأسوار والمداخل والتنسيقات الخارجية في شمس الرياض.",
    catalogName: "جهنمية",
    tag: "خضرة للخارج",
  },
  {
    id: "plumeria",
    name: "الياسمين الهندي «البلوميريا»",
    category: "outdoor",
    description: "أزهار ذات عطر ساحر مميز، تضيف تفصيلًا لونيًا وعطريًا بديعاً إلى الحديقة وجلسات الفناء.",
    catalogName: "ياسمين هندي / بلوميريا",
    tag: "خضرة للخارج",
  },
  {
    id: "acacia",
    name: "الأكاسيا جلوكا",
    category: "outdoor",
    description: "خيار شجري مزهر؛ يحدد موضعه بحسب المساحة وظروف الموقع.",
    catalogName: "أكاسيا جلوكا",
    tag: "خضرة للخارج",
  },
  {
    id: "neem",
    name: "شجرة النيم",
    category: "outdoor",
    description: "شجرة ظل وارفة معمرة تدخل ضمن خيارات التشجير الخارجي وممرات الأحواش الواسعة بالرياض.",
    catalogName: "نيم",
    tag: "خضرة للخارج",
  },

  // 3. خضرة للعمل
  {
    id: "dracaena-mass",
    name: "دراسينا ماسنجانا",
    category: "work",
    description: "حضور رأسي وأوراق خضراء عريضة تضيف خضرة واضحة إلى مكاتب الإدارة وممرات الشركات.",
    catalogName: "دراسينا ماسنجانا",
    tag: "خضرة للعمل",
  },
  {
    id: "chamaedorea",
    name: "نخيل الشاميدوريا",
    category: "work",
    description: "أوراق ريشية متهدلة تمنح قاعات الاجتماعات والاستقبال هدوءاً وأناقة مؤسسية ترحب بالزوار.",
    catalogName: "نخلة شاميدوريا",
    tag: "خضرة للعمل",
  },
  {
    id: "succulents-work",
    name: "إيشيفيريا",
    category: "work",
    description: "أحجام مدمجة وتفاصيل هادئة للمكاتب الفردية والطاولات دون شغل مساحات كبيرة.",
    catalogName: "إيشيفيريا",
    tag: "خضرة للعمل",
  },
];
