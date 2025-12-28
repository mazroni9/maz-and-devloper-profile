// TeamShowcaseSection.tsx
'use client'; // ✅ ضروري جداً لعمل الأزرار والتفاعلية على Vercel

import React from "react";

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

const founder: Person = {
  name: "محمد أحمد الزهراني",
  role: "المؤسس والرئيس التنفيذي — DASM-e",
  subtitle: "مهندس رؤية المنصة • قائد تشغيل • صانع سوق",
  // ✅ تم التحديث للمسار الجديد بعد تغيير الاسم ونقله لمجلد team
  image: "/team/founder.jpeg", 
  tags: ["المزادات الرقمية", "التدفقات المالية", "تسعير بالذكاء الاصطناعي", "هندسة الأنظمة"],
  stats: [
    { label: "التركيز", value: "تنفيذ" },
    { label: "المنهج", value: "ابنِ → حسّن" },
    { label: "المجال", value: "مزادات • تمويل • ذكاء اصطناعي • SaaS • أتمتة" },
  ],
  accent: "gold",
  linkedin: "https://www.linkedin.com/in/mohammed-alahmad-3a7064107", 
};

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
    role: "Backend Developer | DevOps Engineer ",
    subtitle: "أنظمة سحابية • أتمتة CI/CD • تحسين أداء",
    image: "/team/موسى الحلبي.jpeg", 
    tags: ["Laravel", "Node.js", "DevOps", "Kubernetes", "AWS"],
    stats: [
      { label: "الخبرة", value: "+5 سنوات" },
      { label: "القوة", value: "Scalability" },
      { label: "الأسلوب", value: "Clean Arch" },
    ],
    accent: "emerald",
    linkedin: "https://linkedin.com/in/mousa-al-halabi-9183a9237",
    // ✅ الملف في الـ public مباشرة حسب الصورة image_280d60.png
    cvUrl: "/Mousa AlHalabi.pdf", 
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
    // ✅ الملف في الـ public مباشرة حسب الصورة image_280d60.png
    cvUrl: "/diaaalazizResume.pdf", 
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

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function PlayerCard({ person, variant }: { person: Person; variant: "founder" | "dev" }) {
  const isFounder = variant === "founder";
  const accent = person.accent ?? (isFounder ? "gold" : "emerald");
  const primaryBtn = isFounder ? "bg-[#D4AF37] text-black hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]" : "bg-white text-black hover:bg-white/90";

  return (
    <article className={cx("group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl transition-all duration-300 hover:-translate-y-1")}>
      <div className="relative z-10 grid gap-6 md:grid-cols-[180px_1fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <img 
            // ✅ استخدام encodeURI لضمان قراءة الأسماء العربية للملفات
            src={encodeURI(person.image)} 
            alt={person.name} 
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
          />
        </div>

        <div className="flex flex-col">
          <header>
            <h3 className="text-xl font-bold text-white md:text-2xl">{person.name}</h3>
            <p className="text-sm text-white/60">{person.role}</p>
            {person.subtitle && <p className="mt-1 text-xs text-white/40">{person.subtitle}</p>}
          </header>

          <div className="mt-4 flex flex-wrap gap-2">
            {person.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[10px] text-white/70">{t}</span>
            ))}
          </div>

          {person.stats && (
            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {person.stats.map((s) => (
                <div key={s.label} className="flex flex-col rounded-lg border border-white/5 bg-white/5 px-3 py-2">
                  <span className="text-[10px] text-white/40 uppercase tracking-wider">{s.label}</span>
                  <span className="text-xs font-semibold text-white mt-0.5 leading-relaxed">{s.value}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-auto pt-6 flex flex-wrap gap-3">
            <a 
              href={person.cvUrl || "#"} 
              target={person.cvUrl ? "_blank" : "_self"}
              className={cx(
                "rounded-xl px-4 py-2 text-xs font-bold transition-all shadow-sm",
                person.cvUrl ? primaryBtn : "bg-white/5 text-white/20 cursor-not-allowed"
              )}
              onClick={(e) => { if (!person.cvUrl) e.preventDefault(); }}
            >
              السيرة الذاتية
            </a>

            <a 
              href={person.linkedin || "#"} 
              target={person.linkedin ? "_blank" : "_self"}
              className={cx(
                "rounded-xl border border-white/10 px-4 py-2 text-xs font-bold transition-all",
                person.linkedin ? "bg-white/5 text-white hover:bg-white/10" : "text-white/20 cursor-not-allowed"
              )}
              onClick={(e) => { if (!person.linkedin) e.preventDefault(); }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TeamShowcaseSection() {
  return (
    <section dir="rtl" className="relative py-24 text-white" style={{ backgroundColor: BRAND.dark }}>
      <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
      
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mb-16 text-center">
           <h2 className="text-3xl font-extrabold md:text-5xl lg:text-6xl tracking-tight">المؤسس والفريق التقني</h2>
        </div>
        
        <div className="mb-12">
          <PlayerCard person={founder} variant="founder" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {developers.map((p) => (
            <PlayerCard key={p.name} person={p} variant="dev" />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="/architecture-preview.html" 
            target="_blank"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-all shadow-xl backdrop-blur-md"
          >
            📊 عرض مخطط المعمارية الهندسية
          </a>
        </div>
      </div>
    </section>
  );
}