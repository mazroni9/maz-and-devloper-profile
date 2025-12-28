# دليل النشر على GitHub و Vercel

## الخطوات الكاملة للنشر

### 1. النشر على GitHub

#### أ) إنشاء مستودع جديد على GitHub:
1. اذهب إلى https://github.com/new
2. أدخل اسم المستودع (مثلاً: `dasm-e-team-profile`)
3. اختر Public أو Private حسب رغبتك
4. **لا** تضع علامة على "Add a README file" أو "Add .gitignore"
5. اضغط "Create repository"

#### ب) ربط المشروع المحلي بـ GitHub:
افتح PowerShell في مجلد المشروع وقم بتنفيذ:

```powershell
# استبدل YOUR_USERNAME باسم المستخدم الخاص بك على GitHub
git remote add origin https://github.com/YOUR_USERNAME/dasm-e-team-profile.git
git branch -M main
git push -u origin main
```

إذا طُلب منك اسم المستخدم وكلمة المرور:
- اسم المستخدم: اسم المستخدم على GitHub
- كلمة المرور: استخدم Personal Access Token (PAT) بدلاً من كلمة المرور العادية
  - كيفية إنشاء PAT: https://github.com/settings/tokens
  - اختر "Generate new token (classic)"
  - امنحه صلاحيات: `repo`

### 2. النشر على Vercel (تلقائي)

#### الطريقة الأولى - من خلال واجهة Vercel (الأسهل):

1. اذهب إلى https://vercel.com
2. اضغط "Sign Up" أو "Log In"
3. اختر "Continue with GitHub"
4. بعد تسجيل الدخول، اضغط "Add New Project"
5. اختر المستودع `dasm-e-team-profile`
6. Vercel سيكتشف تلقائياً:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
7. اضغط "Deploy"
8. انتظر حتى ينتهي البناء (عادة 1-2 دقيقة)
9. ستحصل على رابط مثل: `https://dasm-e-team-profile.vercel.app`

#### الطريقة الثانية - من خلال Vercel CLI:

```powershell
# تثبيت Vercel CLI
npm i -g vercel

# النشر
vercel

# اتبع التعليمات:
# - Set up and deploy? Y
# - Which scope? اختر حسابك
# - Link to existing project? N
# - Project name? dasm-e-team-profile
# - Directory? ./
# - Override settings? N
```

### 3. تفعيل النشر التلقائي

بعد ربط المشروع بـ Vercel:
- ✅ كل مرة تدفع تغييرات إلى GitHub، Vercel سينشر تلقائياً!
- ✅ يمكنك رؤية حالة النشر في لوحة Vercel
- ✅ يمكنك إضافة Custom Domain من إعدادات المشروع

### 4. تحديث المشروع في المستقبل

```powershell
# بعد إجراء تغييرات
git add .
git commit -m "وصف التغييرات"
git push
```

Vercel سينشر التحديثات تلقائياً!

## استكشاف الأخطاء

### مشكلة: Git لا يتعرف على المستودع
```powershell
git remote -v  # للتحقق من الروابط
git remote remove origin  # لإزالة الرابط القديم
git remote add origin https://github.com/YOUR_USERNAME/dasm-e-team-profile.git
```

### مشكلة: Vercel لا يكتشف Next.js
- تأكد من وجود `package.json` مع `next` في dependencies
- تأكد من وجود `next.config.js`

### مشكلة: الصور لا تظهر
- تأكد من أن الصور موجودة في `/public/`
- تأكد من أن مسارات الصور في الكود صحيحة

## روابط مفيدة

- GitHub: https://github.com
- Vercel: https://vercel.com
- Next.js Docs: https://nextjs.org/docs

