'use client';

// TeamShowcaseSection.tsx
// React + Tailwind (مناسب لـ Next.js)

import React from "react";

// --- التعريفات والأنماط ---
type Person = {
  name: string;
  role: string;
  subtitle?: string;
  image: string;
  tags: string[];
  stats?: { label: string; value: string }[];
  accent?: "emerald" | "navy" | "gold";
  linkedin?: string;
  cvUrl?: string; 
};

const BRAND = {
  dark: "#05070B",
  navy: "#0B3A63",
  emerald: "#10B981",
  gold: "#D4AF37",
};

// --- بيانات المؤسس ---
const founder: Person = {
  name: "محمد أحمد الزهراني",
  role: "المؤسس والرئيس التنفيذي — DASM-e",
  subtitle: "مهندس رؤية المنصة • قائد تشغيل • صانع سوق",
  image: "/1-المؤسس.jpeg", 
  tags: ["المزادات الرقمية", "التدفقات المالية", "تسعير بالذكاء الاصطناعي", "هندسة الأنظمة"],
  stats: [
    { label: "التركيز", value: "تنفيذ" },
    { label: "المنهج", value: "ابنِ → حسّن" },
    { label: "المجال", value: "مزادات • تمويل • ذكاء اصطناعي • SaaS • أتمتة" },
  ],
  accent: "gold",
  linkedin: "https://www.linkedin.com/in/mohammed-alahmad-3a7064107", 
};

// --- بيانات الفريق التقني (6 أعضاء) ---
const developers: Person[] = [
  {
    name: "لؤي أبو جلهوم",
    role: "قائد الفريق التقني — Backend",
    subtitle: "واجهات API • منطق المزادات • وقت حقيقي",
    image: "/team/لؤي ابوجلهوم.png",
    tags: ["Laravel", "PostgreSQL", "WebSockets", "Architecture"],
    accent: "emerald",
  },
  {
    name: "محمد خالد",
    role: "Frontend Developer",
    subtitle: "واجهات • داشبورد • تجربة منتج",
    image: "/team/محمد خالد.jpg",
    tags: ["React/Next.js", "Tailwind", "UI Components", "UX"],
    accent: "navy",
  },
  {
    name: "عامر الحوراني",
    role: "Backend (Node.js) & Streaming Specialist",
    subtitle: "دمج • تسليم • حلول بث",
    image: "/team/عامر الحوراني.jpeg",
    tags: ["Integration", "Delivery", "Streaming", "Quality"],
    accent: "navy",
  },
  {
    name: "موسى الحلبي",
    role: "Backend Developer | DevOps Engineer",
    subtitle: "أنظمة سحابية • أتمتة CI/CD • تحسين أداء",
    image: "/team/موسى الحلبي.jpeg", 
    tags: ["Laravel", "Node.js", "DevOps", "Kubernetes", "AWS"],
    stats: [
      { label: "الخبرة", value: "أكثر من 5 سنوات" }, 
      { label: "القوة", value: "Scalability" },
      { label: "الأسلوب", value: "Clean Arch" },
    ],
    accent: "emerald",
    linkedin: "https://linkedin.com/in/mousa-al-halabi-9183a9237", 
    cvUrl: "/cv/Mousa AlHalabi.pdf",
  },
  {
    name: "ضياء الدين العزيز",
    role: "Full-Stack Developer",
    subtitle: "طالب هندسة كمبيوتر • حلول ذكاء اصطناعي",
    image: "/team/ضياء العزيز.jpg", 
    tags: ["Next.js", "TypeScript", "Cloudflare", "AI Integration"],
    stats: [
      { label: "المحور", value: "Full-Stack" },
      { label: "القوة", value: "AI/ML" },
      { label: "الترتيب", value: "أعلى 15% بجامعته" },
    ],
    accent: "navy",
    linkedin: "https://www.linkedin.com/in/dhia2004/", 
    cvUrl: "/cv/diaaalazizResume.pdf",
  },
  {
    name: "جاسم الحجاب",
    role: "مطور لارافيل - خبير أنظمة المزادات",
    subtitle: "مبرمج قسم المزادات • دعم تقني حاسم في وقت حرج",
    image: "/team/جاسم الحجاب.jpeg", 
    tags: ["Laravel", "PHP", "Auction Logic", "Backend"],
    accent: "emerald",
  },
];

// --- الدوال المساعدة ---
function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

// --- مكون بطاقة العضو ---
function PlayerCard({ person, variant }: { person: Person; variant: "founder" | "dev" }) {
  const isFounder = variant === "founder";
  const accent = person.accent ?? (isFounder ? "gold" : "emerald");
  
  // تخصيص الألوان بناءً على نوع البطاقة
  const primaryBtn = isFounder 
    ? "bg-[#D4AF37] text-black hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]" 
    : "bg-white text-black hover:bg-white/90";

  return (
    <article className={cx(
      "group relative overflow-hidden rounded-3xl border border-white/10",
      "bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl transition-all duration-300 hover:-translate-y-1"
    )}>
      {/* توهج خلفي ديناميكي */}
      <div className={cx(
        "pointer-events-none absolute -inset-24 opacity-70 blur-2xl transition-opacity group-hover:opacity-100",
        isFounder ? "bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,55,0.15),transparent_45%)]" : "bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.1),transparent_45%)]"
      )} />

      <div className="relative z-10 grid gap-6 md:grid-cols-[180px_1fr]">
        {/* الصورة الشخصية */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <img 
            src={encodeURI(person.image)} 
            alt={person.name} 
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
          />
        </div>

        {/* المحتوى النصي */}
        <div className="flex flex-col">
          <header>
            <div className="flex items-center gap-2 mb-1">
               <span className={cx("h-1.5 w-1.5 rounded-full", isFounder ? "bg-[#D4AF37]" : "bg-[#10B981]")} />
               <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">{isFounder ? "Founder" : "Technical Team"}</p>
            </div>
            <h3 className="text-xl font-bold text-white md:text-2xl tracking-tight">{person.name}</h3>
            <p className="text-sm font-medium text-white/70">{person.role}</p>
            {person.subtitle && <p className="mt-1 text-xs text-white/40 italic">{person.subtitle}</p>}
          </header>

          {/* الوسوم التقنية */}
          <div className="mt-4 flex flex-wrap gap-2">
            {person.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[10px] font-medium text-white/60 transition-colors hover:text-white">
                {t}
              </span>
            ))}
          </div>

          {/* الإحصائيات (Stats) */}
          {person.stats && (
            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {person.stats.map((s) => (
                <div key={s.label} className="flex flex-col rounded-xl border border-white/5 bg-white/5 px-3 py-2.5">
                  <span className="text-[9px] text-white/30 uppercase font-bold tracking-widest">{s.label}</span>
                  <span className="text-xs font-semibold text-white mt-1 leading-tight">{s.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* أزرار الإجراءات */}
          <div className="mt-auto pt-8 flex flex-wrap gap-3">
            <a 
              href={person.cvUrl || "#"} 
              target={person.cvUrl ? "_blank" : "_self"}
              className={cx(
                "flex-1 md:flex-none rounded-xl px-5 py-2.5 text-xs font-bold transition-all text-center",
                person.cvUrl ? primaryBtn : "bg-white/5 text-white/20 cursor-not-allowed border border-white/5"
              )}
              onClick={(e) => !person.cvUrl && e.preventDefault()}
            >
              السيرة الذاتية
            </a>

            <a 
              href={person.linkedin || "#"} 
              target={person.linkedin ? "_blank" : "_self"}
              className={cx(
                "flex-1 md:flex-none rounded-xl border border-white/10 px-5 py-2.5 text-xs font-bold transition-all text-center",
                person.linkedin ? "bg-white/5 text-white hover:bg-white/15 hover:border-white/20" : "text-white/20 cursor-not-allowed"
              )}
              onClick={(e) => !person.linkedin && e.preventDefault()}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

// --- المكون الرئيسي للقسم ---
export default function TeamShowcaseSection() {
  return (
    <section dir="rtl" className="relative py-28 text-white" style={{ backgroundColor: BRAND.dark }}>
      {/* شبكة الخلفية الفاخرة */}
      <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:50px_50px]" />
      
      {/* توهجات إضافية للقسم */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
         <div className="absolute top-0 left-1/4 h-96 w-96 bg-[#10B981]/10 blur-[120px] rounded-full" />
         <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-[#D4AF37]/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* العنوان الرئيسي */}
        <div className="mb-20 text-center">
           <h2 className="text-4xl font-black md:text-6xl lg:text-7xl tracking-tighter mb-6">
             المؤسس والفريق التقني
           </h2>
           <div className="h-1.5 w-24 bg-[#D4AF37] mx-auto rounded-full mb-6" />
           <p className="max-w-2xl mx-auto text-white/50 text-base md:text-lg font-medium leading-relaxed">
             النخبة التقنية التي صهرت الخبرات لبناء مستقبل المزادات الرقمية في منصة DASM-e.
           </p>
        </div>
        
        {/* بطاقة المؤسس (مستقلة) */}
        <div className="mb-20">
          <PlayerCard person={founder} variant="founder" />
        </div>

        {/* فاصل قسم الفريق */}
        <div className="mb-10 flex items-center gap-6">
            <h3 className="text-xl font-bold text-white tracking-tight whitespace-nowrap">الفريق التقني</h3>
            <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        {/* شبكة المطورين (6 أعضاء) */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {developers.map((p) => (
            <PlayerCard key={p.name} person={p} variant="dev" />
          ))}
        </div>

        {/* الرابط السفلي للمخطط */}
        <div className="mt-24 text-center">
          <a 
            href="/architecture-preview.html" 
            target="_blank"
            className="group inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-10 py-5 text-sm font-black text-white hover:bg-white/10 hover:border-white/20 transition-all shadow-2xl backdrop-blur-xl"
          >
            <span className="text-xl transition-transform group-hover:scale-125">📊</span>
            عرض مخطط المعمارية الهندسية الشامل
          </a>
        </div>
      </div>
    </section>
  );
}