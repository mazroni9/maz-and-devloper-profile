# مخطط معماري لمنصة DASM-e

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '14px', 'fontFamily': 'Arial, sans-serif', 'lineWidth': '2px', 'primaryColor': '#1565C0', 'primaryTextColor': '#fff', 'primaryBorderColor': '#0D47A1', 'lineColor': '#333', 'secondaryColor': '#2E7D32', 'tertiaryColor': '#EF6C00'}}}%%
flowchart TD
    %% --- تعريف الأنماط ---
    classDef mainNode fill:#E3F2FD,stroke:#1565C0,stroke-width:2px,color:#000,font-weight:bold,font-size:14px;
    classDef coreNode fill:#E8F5E9,stroke:#2E7D32,stroke-width:2px,color:#000,font-weight:bold,font-size:13px;
    classDef domainNode fill:#FFF3E0,stroke:#EF6C00,stroke-width:2px,color:#000,font-weight:bold,font-size:13px;
    classDef busNode fill:#F3E5F5,stroke:#7B1FA2,stroke-width:2px,color:#000,font-weight:bold,font-size:13px;
    classDef dbNode fill:#ECEFF1,stroke:#455A64,stroke-width:2px,stroke-dasharray: 3 3,font-size:12px;

    %% --- الطبقة 1: المدخل ---
    subgraph FRONT ["واجهة الاستخدام والدخول"]
        direction TB
        U([👤 المستخدمون<br/>تجار - أفراد - إدارة]):::mainNode
        F[💻 واجهة الويب<br/>Next.js / Vercel]:::mainNode
        G[🛡️ بوابة الخدمات<br/>API Gateway]:::mainNode
    end

    U ==> F
    F ==> G

    %% --- الطبقة 2: الخدمات الأساسية ---
    subgraph CORE_SVC ["الخدمات الأساسية Core Services"]
        direction LR
        ID[🆔 الهوية<br/>Identity]:::coreNode
        AU[🔨 المزادات<br/>Auctions]:::coreNode
        LS[📋 العروض<br/>Listings]:::coreNode
        WL[💰 المحفظة<br/>Wallet]:::coreNode
        PY[💳 المدفوعات<br/>Payments]:::coreNode
    end

    G --> ID
    G --> AU
    G --> LS
    G --> WL
    G --> PY

    %% --- الطبقة 3: الخدمات المتخصصة ---
    subgraph DOMAIN_SVC ["الخدمات المتخصصة Domain Services"]
        direction LR
        RT[⚡ المزايدة اللحظية<br/>Realtime]:::domainNode
        FL[🚛 الأسطول<br/>Fleet]:::domainNode
        NT[🔔 الإشعارات<br/>Notifications]:::domainNode
        RP[📊 التقارير<br/>Analytics]:::domainNode
        AI[🤖 الذكاء الاصطناعي<br/>AI Insights]:::domainNode
        RF[🚨 الحماية<br/>Fraud & Risk]:::domainNode
    end

    AU --> RT
    F -.-> RT
    LS --> FL
    AU --> NT
    PY --> NT
    FL --> NT
    AU --> RF
    PY --> RF

    %% --- الطبقة 4: حافلة الرسائل ---
    MB{{📨 حافلة الرسائل<br/>Message Bus<br/>Kafka / RabbitMQ}}:::busNode

    AU ==> MB
    RT ==> MB
    WL ==> MB
    PY ==> MB
    FL ==> MB
    NT ==> MB
    RF ==> MB
    MB ==> RP
    MB ==> AI

    %% --- الطبقة 5: قواعد البيانات ---
    subgraph DATA ["🗄️ قواعد البيانات المستقلة"]
        direction LR
        DB_ID[(DB الهوية)]:::dbNode
        DB_AU[(DB المزادات)]:::dbNode
        DB_LS[(DB العروض)]:::dbNode
        DB_WL[(DB المحفظة)]:::dbNode
        DB_PY[(DB المدفوعات)]:::dbNode
        DB_FL[(DB الأسطول)]:::dbNode
        DB_RP[(DB التقارير)]:::dbNode
    end

    ID --- DB_ID
    AU --- DB_AU
    LS --- DB_LS
    WL --- DB_WL
    PY --- DB_PY
    FL --- DB_FL
    RP --- DB_RP

    %% تنسيق الروابط
    linkStyle 0 stroke-width:2px,stroke:#1565C0
    linkStyle 1 stroke-width:2px,stroke:#1565C0
    linkStyle 2 stroke-width:2px,stroke:#2E7D32
    linkStyle 3 stroke-width:2px,stroke:#2E7D32
    linkStyle 4 stroke-width:2px,stroke:#2E7D32
    linkStyle 5 stroke-width:2px,stroke:#2E7D32
    linkStyle 6 stroke-width:2px,stroke:#2E7D32
    linkStyle 7 stroke-width:2px,stroke:#EF6C00
    linkStyle 8 stroke-width:1px,stroke:#EF6C00,stroke-dasharray: 3 3
    linkStyle 9 stroke-width:2px,stroke:#EF6C00
    linkStyle 10 stroke-width:2px,stroke:#EF6C00
    linkStyle 11 stroke-width:2px,stroke:#EF6C00
    linkStyle 12 stroke-width:2px,stroke:#EF6C00
    linkStyle 13 stroke-width:2px,stroke:#EF6C00
    linkStyle 14 stroke-width:2px,stroke:#7B1FA2
    linkStyle 15 stroke-width:2px,stroke:#7B1FA2
    linkStyle 16 stroke-width:2px,stroke:#7B1FA2
    linkStyle 17 stroke-width:2px,stroke:#7B1FA2
    linkStyle 18 stroke-width:2px,stroke:#7B1FA2
    linkStyle 19 stroke-width:2px,stroke:#7B1FA2
    linkStyle 20 stroke-width:2px,stroke:#7B1FA2
    linkStyle 21 stroke-width:2px,stroke:#7B1FA2
    linkStyle 22 stroke-width:2px,stroke:#7B1FA2
    linkStyle 23 stroke-width:1px,stroke:#455A64,stroke-dasharray: 3 3
    linkStyle 24 stroke-width:1px,stroke:#455A64,stroke-dasharray: 3 3
    linkStyle 25 stroke-width:1px,stroke:#455A64,stroke-dasharray: 3 3
    linkStyle 26 stroke-width:1px,stroke:#455A64,stroke-dasharray: 3 3
    linkStyle 27 stroke-width:1px,stroke:#455A64,stroke-dasharray: 3 3
    linkStyle 28 stroke-width:1px,stroke:#455A64,stroke-dasharray: 3 3
    linkStyle 29 stroke-width:1px,stroke:#455A64,stroke-dasharray: 3 3
```

## ملاحظات للطباعة:

1. **للطباعة على A4:**
   - استخدم وضع Landscape (أفقي) للحصول على مساحة أكبر
   - أو استخدم وضع Portrait (عمودي) مع ضبط المقياس

2. **للتحسين:**
   - يمكنك تصدير المخطط كصورة PNG أو PDF من أي محرر يدعم Mermaid
   - أو استخدم أدوات مثل: Mermaid Live Editor, Draw.io, أو VS Code مع إضافة Mermaid

3. **الألوان:**
   - 🔵 أزرق: واجهة المستخدم
   - 🟢 أخضر: الخدمات الأساسية
   - 🟠 برتقالي: الخدمات المتخصصة
   - 🟣 بنفسجي: حافلة الرسائل
   - ⚫ رمادي: قواعد البيانات

