'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

export default function ArchitecturePage() {
  const diagramContainerRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    const loadMermaid = async () => {
      if (typeof window === 'undefined') return;
      
      try {
        // انتظار حتى يكون DOM جاهز
        await new Promise(resolve => setTimeout(resolve, 200));
        
        if (!isMounted || !diagramRef.current) return;
        
        const mermaid = (await import('mermaid')).default;
        
        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          themeVariables: {
            fontSize: '12px',
            fontFamily: 'Arial, sans-serif',
            lineWidth: '2px',
            primaryColor: '#1565C0',
            primaryTextColor: '#fff',
            primaryBorderColor: '#0D47A1',
            lineColor: '#333',
            secondaryColor: '#2E7D32',
            tertiaryColor: '#EF6C00',
          },
          flowchart: {
            nodeSpacing: 50,
            rankSpacing: 80,
            curve: 'basis',
            padding: 10,
          },
        });

        const id = 'mermaid-diagram-' + Date.now();
        
        try {
          const result = await mermaid.render(id, mermaidDiagram);
          
          if (isMounted && diagramRef.current) {
            diagramRef.current.innerHTML = result.svg;
            setIsLoading(false);
            setError(null);
          }
        } catch (renderError: any) {
          console.error('Mermaid render error:', renderError);
          if (isMounted) {
            setIsLoading(false);
            setError('حدث خطأ في رسم المخطط: ' + (renderError.message || 'خطأ غير معروف'));
          }
        }
      } catch (importError: any) {
        console.error('Error loading mermaid:', importError);
        if (isMounted) {
          setIsLoading(false);
          setError('حدث خطأ في تحميل المكتبة: ' + (importError.message || 'خطأ غير معروف'));
        }
      }
    };
    
    loadMermaid();
    
    return () => {
      isMounted = false;
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleExportPNG = async () => {
    if (!diagramContainerRef.current) return;

    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(diagramContainerRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
        useCORS: true,
      });

      const link = document.createElement('a');
      link.download = 'dasm-architecture-diagram.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error exporting PNG:', error);
      alert('حدث خطأ في تصدير الصورة. تأكد من تثبيت المكتبات المطلوبة.');
    }
  };

  const handleExportPDF = async () => {
    if (!diagramContainerRef.current) return;

    try {
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).default;

      const canvas = await html2canvas(diagramContainerRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
        useCORS: true,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape', 'mm', 'a4');
      const imgWidth = 297; // A4 width in mm (landscape)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const heightLeft = imgHeight;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('dasm-architecture-diagram.pdf');
    } catch (error) {
      console.error('Error exporting PDF:', error);
      alert('حدث خطأ في تصدير PDF. تأكد من تثبيت المكتبات المطلوبة.');
    }
  };

  const mermaidDiagram = `
flowchart TB
    %% تعريف الأنماط
    classDef userStyle fill:#E3F2FD,stroke:#1565C0,stroke-width:2px,color:#000,font-weight:bold,font-size:12px
    classDef frontendStyle fill:#BBDEFB,stroke:#1976D2,stroke-width:2px,color:#000,font-weight:bold,font-size:12px
    classDef gatewayStyle fill:#90CAF9,stroke:#1565C0,stroke-width:2px,color:#000,font-weight:bold,font-size:12px
    classDef coreStyle fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,color:#000,font-weight:bold,font-size:12px
    classDef domainStyle fill:#FFE0B2,stroke:#EF6C00,stroke-width:2px,color:#000,font-weight:bold,font-size:12px
    classDef busStyle fill:#E1BEE7,stroke:#7B1FA2,stroke-width:2px,color:#000,font-weight:bold,font-size:12px
    classDef dbStyle fill:#ECEFF1,stroke:#455A64,stroke-width:2px,stroke-dasharray: 3 3,font-size:11px

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
  `;

  return (
    <div className="min-h-screen bg-gray-50 p-4" dir="rtl">
      {/* Header with buttons */}
      <div className="max-w-7xl mx-auto mb-6 print:hidden">
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-800">مخطط المعمارية - DASM-e Platform</h1>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              🖨️ طباعة
            </button>
            <button
              onClick={handleExportPNG}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              📷 تصدير PNG
            </button>
            <button
              onClick={handleExportPDF}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              📄 تصدير PDF
            </button>
          </div>
        </div>
      </div>

      {/* Diagram Container */}
      <div className="max-w-7xl mx-auto">
        <div
          ref={diagramContainerRef}
          className="bg-white rounded-lg shadow-lg p-8 print:shadow-none print:p-4"
          style={{ minHeight: '800px' }}
        >
          {isLoading ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">جاري تحميل المخطط...</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center p-8">
                <div className="text-red-600 text-lg font-semibold mb-2">⚠️ خطأ</div>
                <p className="text-gray-700 mb-4">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  إعادة تحميل الصفحة
                </button>
              </div>
            </div>
          ) : (
            <div 
              className="print:scale-90 flex justify-center items-start" 
              style={{ overflow: 'auto', minHeight: '600px' }}
            >
              <div ref={diagramRef} className="w-full"></div>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="mt-6 bg-white rounded-lg shadow-md p-6 print:shadow-none">
          <h2 className="text-xl font-bold mb-4 text-gray-800">مفتاح الألوان</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-blue-200 border-2 border-blue-600"></div>
              <span className="text-sm">واجهة المستخدم</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-green-200 border-2 border-green-600"></div>
              <span className="text-sm">الخدمات الأساسية</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-orange-200 border-2 border-orange-600"></div>
              <span className="text-sm">الخدمات المتخصصة</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-purple-200 border-2 border-purple-600"></div>
              <span className="text-sm">حافلة الرسائل</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gray-200 border-2 border-gray-600 border-dashed"></div>
              <span className="text-sm">قواعد البيانات</span>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:p-4 {
            padding: 1rem !important;
          }
          .print\\:scale-90 {
            transform: scale(0.9);
            transform-origin: top center;
          }
          @page {
            size: A4 landscape;
            margin: 1cm;
          }
        }
      `}</style>
    </div>
  );
}

