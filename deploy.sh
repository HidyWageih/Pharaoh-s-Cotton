#!/bin/bash

# نص البداية
echo "بدء نشر موقع Pharaoh's Cotton..."

# التحقق من وجود مجلد المشروع
if [ ! -d "/home/ubuntu/cotton_website_project/frontend" ]; then
  echo "خطأ: مجلد المشروع غير موجود!"
  exit 1
fi

# الانتقال إلى مجلد المشروع
cd /home/ubuntu/cotton_website_project/frontend || exit

# تثبيت الاعتمادات
echo "تثبيت الاعتمادات..."
npm install || { echo "خطأ في تثبيت الاعتمادات!"; exit 1; }

# بناء المشروع
echo "بناء المشروع..."
npm run build || { echo "خطأ في بناء المشروع!"; exit 1; }

# تهيئة قاعدة البيانات
echo "تهيئة قاعدة البيانات..."
if [ -f "migrations/0001_initial.sql" ]; then
  npx wrangler d1 execute DB --local --file=migrations/0001_initial.sql || { echo "خطأ في تهيئة قاعدة البيانات!"; exit 1; }
else
  echo "خطأ: ملف التهيئة migrations/0001_initial.sql غير موجود!"
  exit 1
fi

# نشر الموقع محلياً للاختبار
echo "نشر الموقع محلياً للاختبار..."
npm run dev || { echo "خطأ في تشغيل الموقع محلياً!"; exit 1; }

# نص النهاية
echo "تم نشر موقع Pharaoh's Cotton بنجاح!"
echo "يمكنك الوصول إلى الموقع على العنوان: http://localhost:3000"
echo "لنشر الموقع على الإنترنت، استخدم الأمر: npm run deploy"