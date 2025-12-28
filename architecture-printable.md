# مخطط معماري DASM-e - نسخة قابلة للطباعة على A4

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '11px', 'fontFamily': 'Arial, sans-serif', 'lineWidth': '2px', 'primaryColor': '#1565C0', 'primaryTextColor': '#fff', 'primaryBorderColor': '#0D47A1', 'lineColor': '#333', 'secondaryColor': '#2E7D32', 'tertiaryColor': '#EF6C00', 'noteBkgColor': '#fff', 'noteTextColor': '#000'}, 'flowchart': {'nodeSpacing': 50, 'rankSpacing': 80, 'curve': 'basis', 'padding': 10}}}%%
flowchart TB
    %% تعريف الأنماط
    classDef userStyle fill:#E3F2FD,stroke:#1565C0,stroke-width:2px,color:#000,font-weight:bold,font-size:11px
    classDef frontendStyle fill:#BBDEFB,stroke:#1976D2,stroke-width:2px,color:#000,font-weight:bold,font-size:11px
    classDef gatewayStyle fill:#90CAF9,stroke:#1565C0,stroke-width:2px,color:#000,font-weight:bold,font-size:11px
    classDef coreStyle fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,color:#000,font-weight:bold,font-size:11px
    classDef domainStyle fill:#FFE0B2,stroke:#EF6C00,stroke-width:2px,color:#000,font-weight:bold,font-size:11px
    classDef busStyle fill:#E1BEE7,stroke:#7B1FA2,stroke-width:2px,color:#000,font-weight:bold,font-size:11px
    classDef dbStyle fill:#ECEFF1,stroke:#455A64,stroke-width:2px,stroke-dasharray: 3 3,font-size:10px

    %% الطبقة 1: المدخل
    U([👤 المستخدمون<br/>تجار - أفراد - إدارة]):::userStyle
    F[💻 واجهة الويب<br/>Next.js / Vercel]:::frontendStyle
    G[🛡️ بوابة الخدمات<br/>API Gateway]:::gatewayStyle
    
    U --> F
    F --> G
    
    %% الطبقة 2: الخدمات الأساسية
    ID[🆔 الهوية<br/>Identity]:::coreStyle
    AU[🔨 المزادات<br/>Auctions]:::coreStyle
    LS[📋 العروض<br/>Listings]:::coreStyle
    WL[💰 المحفظة<br/>Wallet]:::coreStyle
    PY[💳 المدفوعات<br/>Payments]:::coreStyle
    
    G --> ID
    G --> AU
    G --> LS
    G --> WL
    G --> PY
    
    %% الطبقة 3: الخدمات المتخصصة
    RT[⚡ المزايدة اللحظية<br/>Realtime]:::domainStyle
    FL[🚛 الأسطول<br/>Fleet]:::domainStyle
    NT[🔔 الإشعارات<br/>Notifications]:::domainStyle
    RP[📊 التقارير<br/>Analytics]:::domainStyle
    AI[🤖 الذكاء الاصطناعي<br/>AI Insights]:::domainStyle
    RF[🚨 الحماية<br/>Fraud & Risk]:::domainStyle
    
    AU --> RT
    F -.-> RT
    LS --> FL
    AU --> NT
    PY --> NT
    FL --> NT
    AU --> RF
    PY --> RF
    
    %% حافلة الرسائل
    MB{{📨 حافلة الرسائل<br/>Message Bus<br/>Kafka / RabbitMQ}}:::busStyle
    
    AU ==> MB
    RT ==> MB
    WL ==> MB
    PY ==> MB
    FL ==> MB
    NT ==> MB
    RF ==> MB
    
    MB ==> RP
    MB ==> AI
    
    %% قواعد البيانات
    DB_ID[(DB الهوية)]:::dbStyle
    DB_AU[(DB المزادات)]:::dbStyle
    DB_LS[(DB العروض)]:::dbStyle
    DB_WL[(DB المحفظة)]:::dbStyle
    DB_PY[(DB المدفوعات)]:::dbStyle
    DB_FL[(DB الأسطول)]:::dbStyle
    DB_RP[(DB التقارير)]:::dbStyle
    
    ID --- DB_ID
    AU --- DB_AU
    LS --- DB_LS
    WL --- DB_WL
    PY --- DB_PY
    FL --- DB_FL
    RP --- DB_RP
```

## تعليمات الطباعة على A4:

### الخطوة 1: تصدير المخطط
1. افتح: https://mermaid.live
2. انسخ محتوى المخطط أعلاه
3. الصقه في المحرر
4. اضغط "Actions" → "Download PNG" (اختر دقة عالية: 1920x1080 أو أعلى)

### الخطوة 2: الطباعة
1. افتح الصورة المصدرة
2. في إعدادات الطباعة:
   - **الورق**: A4
   - **الاتجاه**: Landscape (أفقي) - موصى به
   - **المقياس**: Fit to Page أو 100%
   - **الجودة**: عالية (High Quality)

### بديل: استخدام PDF
1. في Mermaid Live Editor: "Actions" → "Download SVG"
2. افتح SVG في متصفح أو محرر صور
3. اطبع كـ PDF
4. اطبع PDF على A4

## مفتاح الألوان:

| اللون | المعنى |
|------|--------|
| 🔵 أزرق فاتح | واجهة المستخدم |
| 🔵 أزرق | بوابة الخدمات |
| 🟢 أخضر | الخدمات الأساسية (Core) |
| 🟠 برتقالي | الخدمات المتخصصة (Domain) |
| 🟣 بنفسجي | حافلة الرسائل |
| ⚫ رمادي | قواعد البيانات |

