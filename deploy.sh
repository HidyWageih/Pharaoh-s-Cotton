#!/bin/bash

# نص البداية
echo "بدء نشر موقع Pharaoh's Cotton..."

# الانتقال إلى مجلد المشروع
cd /home/ubuntu/cotton_website_project/frontend

# تثبيت الاعتمادات
echo "تثبيت الاعتمادات..."
npm install

# بناء المشروع
echo "بناء المشروع..."
npm run build

# تهيئة قاعدة البيانات
echo "تهيئة قاعدة البيانات..."
npx wrangler d1 execute DB --local --file=migrations/0001_initial.sql

# نشر الموقع محلياً للاختبار
echo "نشر الموقع محلياً للاختبار..."
npm run dev

# نص النهاية
echo "تم نشر موقع Pharaoh's Cotton بنجاح!"
echo "يمكنك الوصول إلى الموقع على العنوان: http://localhost:3000"
echo "لنشر الموقع على الإنترنت، استخدم الأمر: npm run deploy"
