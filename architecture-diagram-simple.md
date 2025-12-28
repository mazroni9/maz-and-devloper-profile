# مخطط معماري DASM-e - نسخة مبسطة للطباعة

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '12px', 'fontFamily': 'Arial', 'lineWidth': '2px'}}}%%
flowchart TD
    %% الطبقة 1: المدخل
    U([👤 المستخدمون]):::user
    F[💻 واجهة الويب<br/>Next.js]:::frontend
    G[🛡️ API Gateway]:::gateway
    
    U --> F
    F --> G
    
    %% الطبقة 2: الخدمات الأساسية
    G --> ID[🆔 الهوية]:::core
    G --> AU[🔨 المزادات]:::core
    G --> LS[📋 العروض]:::core
    G --> WL[💰 المحفظة]:::core
    G --> PY[💳 المدفوعات]:::core
    
    %% الطبقة 3: الخدمات المتخصصة
    AU --> RT[⚡ المزايدة اللحظية]:::domain
    LS --> FL[🚛 الأسطول]:::domain
    AU --> NT[🔔 الإشعارات]:::domain
    PY --> NT
    AU --> RF[🚨 الحماية]:::domain
    
    %% حافلة الرسائل
    AU --> MB{{📨 Message Bus}}:::bus
    RT --> MB
    WL --> MB
    PY --> MB
    FL --> MB
    NT --> MB
    RF --> MB
    
    MB --> RP[📊 التقارير]:::domain
    MB --> AI[🤖 الذكاء الاصطناعي]:::domain
    
    %% قواعد البيانات
    ID --- DB1[(DB الهوية)]:::db
    AU --- DB2[(DB المزادات)]:::db
    LS --- DB3[(DB العروض)]:::db
    WL --- DB4[(DB المحفظة)]:::db
    PY --- DB5[(DB المدفوعات)]:::db
    FL --- DB6[(DB الأسطول)]:::db
    RP --- DB7[(DB التقارير)]:::db
    
    %% الأنماط
    classDef user fill:#E3F2FD,stroke:#1565C0,stroke-width:2px,color:#000,font-weight:bold
    classDef frontend fill:#BBDEFB,stroke:#1976D2,stroke-width:2px,color:#000,font-weight:bold
    classDef gateway fill:#90CAF9,stroke:#1565C0,stroke-width:2px,color:#000,font-weight:bold
    classDef core fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,color:#000,font-weight:bold
    classDef domain fill:#FFE0B2,stroke:#EF6C00,stroke-width:2px,color:#000,font-weight:bold
    classDef bus fill:#E1BEE7,stroke:#7B1FA2,stroke-width:2px,color:#000,font-weight:bold
    classDef db fill:#ECEFF1,stroke:#455A64,stroke-width:2px,stroke-dasharray: 3 3
```

## تعليمات الطباعة:

1. افتح الملف في محرر يدعم Mermaid (VS Code مع إضافة Mermaid)
2. اضغط بزر الماوس الأيمن على المخطط واختر "Export Diagram"
3. اختر PNG أو PDF
4. للطباعة على A4:
   - استخدم وضع Landscape (أفقي)
   - أو Portrait مع Scale: 80-90%

