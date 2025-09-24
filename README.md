# فني صيانة وتركيب التكييفات - المدينة المنورة

موقع إلكتروني لخدمات صيانة وإصلاح المكيفات في المدينة المنورة

## الميزات

- تصميم متجاوب يعمل على جميع الأجهزة
- دعم كامل للغة العربية (RTL)
- تحسين محركات البحث (SEO)
- تكامل مع واتساب للتواصل السريع
- نظام تقييمات العملاء
- نماذج طلب الخدمة

## التقنيات المستخدمة

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- Radix UI Components

## التشغيل المحلي

\`\`\`bash
# تثبيت المكتبات
npm install --legacy-peer-deps

# تشغيل الخادم المحلي
npm run dev
\`\`\`

## النشر على GitHub Pages

### الإعداد الأولي:

1. **في GitHub Repository Settings:**
   - اذهب إلى Settings → Pages
   - اختر "Deploy from a branch"
   - اختر branch: `gh-pages`
   - احفظ الإعدادات

2. **إعداد الدومين المخصص:**
   - في Settings → Pages → Custom domain
   - أدخل: `almostafa-aircondeitioner.com`
   - فعل "Enforce HTTPS"

3. **إعدادات DNS:**
   \`\`\`
   CNAME: almostafa-aircondeitioner.com → almostafa-air.github.io
   \`\`\`

### النشر التلقائي:

يتم النشر تلقائياً عند:
- رفع تحديثات على branch `main` أو `master`
- GitHub Actions سيقوم ببناء المشروع ونشره

### حل مشاكل النشر:

إذا واجهت مشاكل في النشر:

1. **مشكلة تضارب المكتبات:**
   \`\`\`bash
   npm install --legacy-peer-deps
   \`\`\`

2. **مشكلة في البناء:**
   - تأكد من أن `next.config.js` يحتوي على `output: "export"`
   - تأكد من وجود ملف `.nojekyll` في الجذر

3. **مشكلة 404:**
   - تأكد من إعدادات GitHub Pages
   - تأكد من أن الدومين مضبوط بشكل صحيح

## البناء للإنتاج

\`\`\`bash
# بناء المشروع
npm run build

# الملفات ستكون في مجلد out/
\`\`\`

## التواصل

- هاتف: +966564267351
- واتساب: +966564267351
- الموقع: https://almostafa-aircondeitioner.com

## الدعم الفني

إذا واجهت أي مشاكل في النشر أو التشغيل، تأكد من:

1. استخدام Node.js إصدار 18 أو أحدث
2. تثبيت المكتبات باستخدام `--legacy-peer-deps`
3. التأكد من إعدادات GitHub Pages
4. التأكد من إعدادات DNS للدومين

## الترخيص

جميع الحقوق محفوظة © 2025 فني صيانة وتركيب التكييفات - المدينة المنورة
