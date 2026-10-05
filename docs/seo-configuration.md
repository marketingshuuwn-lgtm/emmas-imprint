# إعداد النطاق والفهرسة وفحص النشر

عنوان الإنتاج الحالي في صفحة مستودع GitHub هو **https://emmas-imprint.vercel.app**. جرى التحقق في 5 أكتوبر 2026 من ارتباطه بنشر Production ناجح للنسخة a6e221b، ومن استجابة الصفحات الست بمحتوى المشروع. العنوان المكتوب سابقًا vecrel.app كان أوليًا؛ العنوان دون الشرطة emmasimprint.vercel.app أعاد DEPLOYMENT_NOT_FOUND. لا يعتمد التطبيق أيًا منهما.

## سلوك البيئات

| البيئة | الأصل المستخدم | الفهرسة |
| --- | --- | --- |
| محلي دون متغيرات | روابط السيكما نسبية، دون canonical عام | noindex وrobots يمنع الزحف وخريطة فارغة |
| Vercel Production | SITE_URL إن ضبط، وإلا VERCEL_PROJECT_PRODUCTION_URL | تعمل افتراضيًا عند توفر نطاق المنصة الثابت، إلا مع تعطيل صريح |
| Vercel Preview أو Development | أصل الإنتاج الثابت إن توفر | ممنوعة حتى مع SITE_INDEXABLE=true |
| استضافة أخرى | SITE_URL المؤكد | تتطلب SITE_INDEXABLE=true صراحة |

لا يستخدم التطبيق VERCEL_URL؛ فهو عنوان نشر مؤقت. متغير VERCEL_PROJECT_PRODUCTION_URL يتوفر في البناء والتشغيل، وقد يتوفر أيضًا في Preview؛ لذلك لا يُعتبر وجوده وحده إذنًا للفهرسة. يختار Vercel نطاق إنتاج المشروع، وقد يتغير عند إضافة نطاق مخصص. راجع [وثائق المتغيرات النظامية في Vercel](https://vercel.com/docs/environment-variables/system-environment-variables).

للنطاق المخصص أو الاستضافة الأخرى:

```dotenv
SITE_URL=https://your-confirmed-domain.example
SITE_INDEXABLE=true
```

هذا مثال محجوز، وليس نطاق النشاط. يقبل SITE_URL أصل HTTPS فقط دون مسارات أو معاملات أو بيانات دخول. SITE_INDEXABLE=false أو قيمة غير معروفة يمنعان الفهرسة حتى في الإنتاج. إذا نُسخت قيمة false من .env.example إلى إعداد إنتاج Vercel، احذف المتغير من إعداد الإنتاج للسلوك التلقائي، أو اضبطه true صراحة. ملف المثال آمن للمحلي ولا يغير إعداد الاستضافة.

**أعد البناء والنشر بعد تعديل المتغيرات**؛ الصفحات وملفات الفهرسة تتضمن قيمًا تحسب أثناء البناء. إذا لم يتوفر متغير نطاق الإنتاج النظامي، اضبط SITE_URL وSITE_INDEXABLE يدويًا؛ لا يُخمن التطبيق اسم المشروع.

## فحص مخرجات النشر

```bash
node scripts/seo-check.mjs --base https://emmas-imprint.vercel.app --origin https://emmas-imprint.vercel.app --mode public
```

يمكن حفظ تقرير JSON بإضافة --output report.json. يفشل الفحص إذا كان النشر يحظر الفهرسة أو كانت الروابط من نطاق خاطئ أو كانت الخريطة ناقصة. يتحقق من:

- استجابة الصفحات الست، عنوان ووصف مختلفين لكل صفحة، وعنوان رئيسي واحد واتجاه عربي.
- robots في HTML ورأس X-Robots-Tag ووسم googlebot، وcanonical وعنوان المشاركة وصورتها العامة.
- JSON-LD صالح، أصل موحد ومعرفات غير مكررة للنشاط والصفحات والخدمات ومسار التصفح.
- robots.txt وخريطة تضم الصفحات الست فقط، وصورة PNG بأبعاد 1200×630.
- تحويل /projects إلى /plants مع بقاء معاملات الرابط، وصفحة مجهولة وملف التحرير غير متاحين عبر HTTP 404.

لفحص المعاينة المحلية المعتادة:

```bash
node scripts/seo-check.mjs --base http://127.0.0.1:3000 --mode preview
```

إذا تضمنت المعاينة canonical إلى أصل الإنتاج، أضف --origin مع ذلك الأصل. أصل الفحص يختلف عن عنوان الاتصال؛ يمكن الاتصال ببناء محلي دون طلب النطاق العام. مثال اختبار الإنتاج المعزول:

```bash
node scripts/seo-check.mjs --base http://127.0.0.1:3002 --origin https://example.com --mode public
```

## خريطة الموقع والبيانات المنظمة

الخريطة تدرج / و/plants و/plants/indoor و/plants/outdoor و/plants/offices و/services. لا يدخل /projects أو معاملات البحث أو أقسام الصفحة فيها، ولا تُختلق تواريخ تعديل. دالتا sitemap وrobots في ملفات المسارات تستدعيان مساعدي الإعداد دون تمرير وسيط Next.js؛ تصدير مساعد sitemap مباشرة كان يجعل وسيط المسار يُفسر كإعدادات ويُنتج خريطة فارغة في بناء الإنتاج.

السيكما تصف GardenStore وWebSite وWebPage وCollectionPage وItemList وBreadcrumbList، والخدمات الأربع وخدمة المكاتب والأسئلة الظاهرة. لا تختلق أسعارًا أو مخزونًا أو تقييمات أو ضمانات أو طرق دفع. ساعات العمل لها مصدر مشترك للعرض والسيكما؛ 00:30 يمثل نهاية الدوام بعد منتصف الليل. نص JSON-LD يهرب الحرف <. الصورة العامة للبيت المحمي لا تُنسب للمشتل في السيكما.

## حدود التحقق

npm test يفحص البحث والسيكما وإعدادات البيئات وحالات فشل أداة النشر. أداة HTTP تفحص المخرجات الفعلية، وقد كشفت خلل خريطة الموقع الذي لم تكشفه اختبارات المساعد وحده. لا تدعي الأداة اعتماد Google أو اكتمال الفهرسة أو نتائج بحث موسعة.

إرسال الخريطة والتحقق من تغطية الفهرسة يحتاج حساب Search Console مخولًا؛ لم يُرسل طلب عبره. لا توفر هذه الفحوص قياسات أداء مستخدمين أو اعتماد وصول شاملًا.

المراجع: [Sitemap في Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)، [robots.txt في Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)، [JSON-LD](https://nextjs.org/docs/app/guides/json-ld)، [دوام النشاط الممتد ليلًا](https://developers.google.com/search/docs/appearance/structured-data/local-business#business-hours)، [GardenStore](https://schema.org/GardenStore).
