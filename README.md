# بصمة ايما الزراعية (Basmat Emma) — الموقع الرسمي

موقع حديث ومتجاوب لبصمة ايما الزراعية في الرياض، مبني بـ Next.js + TypeScript + Tailwind CSS.

## المميزات

- تصميم RTL كامل باللغة العربية
- واجهة حديثة ومهنية تناسب قطاع المشاتل والحدائق
- أقسام: الرئيسية، من نحن، الخدمات، النباتات الداخلية، الأسئلة الشائعة، التواصل
- SEO و Schema.org (LocalBusiness)
- إمكانية الوصول (WCAG)
- أداء عالٍ (Server Components افتراضيًا)
- محتوى منفصل عن العرض لسهولة التحديث

## التقنيات

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Font:** Cairo (Google Fonts عبر next/font)

## التثبيت والتشغيل

```bash
# تثبيت الاعتماديات
npm install

# تشغيل بيئة التطوير
npm run dev

# بناء الإنتاج
npm run build

# تشغيل الإنتاج
npm run start
```

افتح [http://localhost:3000](http://localhost:3000).

## هيكل المشروع

```
src/
├── app/
│   ├── layout.tsx      # التخطيط الجذري + SEO
│   ├── page.tsx        # الصفحة الرئيسية
│   └── globals.css     # نظام التصميم والألوان
├── components/
│   ├── layout/         # Header, Footer
│   ├── sections/       # Hero, About, Services, Plants, FAQ, Contact
│   └── ui/             # Button ومكونات قابلة لإعادة الاستخدام
├── content/
│   └── site-content.ts # كل محتوى الموقع
└── types/
    └── index.ts
```

## تعديل المحتوى

كل النصوص والبيانات موجودة في:

```
src/content/site-content.ts
```

عدّل الحقول المطلوبة (الاسم، الهاتف، الخدمات، الأسئلة...) دون الحاجة لتعديل المكونات.

## تغيير الألوان

الألوان معرّفة كمتغيرات CSS في:

```
src/app/globals.css
```

تحت `:root` (مثل `--primary`, `--accent`, `--background`).

## إضافة خدمة أو سؤال

أضف عنصرًا جديدًا إلى المصفوفات في `site-content.ts`:

- `services.items`
- `faq.items`
- `plants.categories`

## الصور

لا توجد صور حقيقية للنشاط حاليًا. ضع الصور في `public/images/` واستخدمها مع `next/image` عند توفرها.

## ربط CMS لاحقًا

المحتوى منفصل في طبقة `content/`. يمكن لاحقًا استبداله بـ:

- Sanity / Contentful / Strapi
- WordPress REST API
- Supabase

بدون إعادة بناء الواجهة.

## الاتصال

- واتساب: https://wa.me/966563340109
- هاتف: 0563340109 (+966563340109)
- العنوان: الرياض — طريق أبو بكر الصديق
- الموقع على الخريطة: https://www.google.com/maps?q=24.8984706,46.6249185&z=17&hl=ar
- أوقات العمل:
  - السبت إلى الخميس: 8:00 ص – 12:30 ص
  - الجمعة: 12:30 م – 12:30 ص

---

© 2026 بصمة ايما الزراعية
