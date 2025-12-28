@echo off
echo ========================================
echo   ربط المشروع بـ GitHub
echo ========================================
echo.
echo الخطوة 1: إنشاء مستودع جديد على GitHub
echo ----------------------------------------
echo 1. اذهب إلى: https://github.com/new
echo 2. اسم المستودع: dasm-e-team-profile
echo 3. اختر Public أو Private
echo 4. لا تضع علامة على "Add README" أو "Add .gitignore"
echo 5. اضغط "Create repository"
echo.
echo بعد إنشاء المستودع، اضغط Enter للمتابعة...
pause
echo.
echo الخطوة 2: ربط المشروع بـ GitHub
echo ----------------------------------------
git remote add origin https://github.com/mazroni9/dasm-e-team-profile.git
git branch -M main
echo.
echo الخطوة 3: دفع الكود إلى GitHub
echo ----------------------------------------
echo سيتم طلب اسم المستخدم وكلمة المرور
echo استخدم Personal Access Token بدلاً من كلمة المرور
echo.
git push -u origin main
echo.
echo ✅ تم! تحقق من GitHub الآن
pause

