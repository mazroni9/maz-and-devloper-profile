'use client';

import React from "react";

/* =======================
   Types
======================= */
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

/* =======================
   Brand
======================= */
const BRAND = {
  dark: "#05070B",
};

/* =======================
   Founder
======================= */
const founder: Person = {
  name: "محمد أحمد الزهراني",
  role: "المؤسس والرئيس التنفيذي — DASM-e",
  subtitle: "مهندس رؤية المنصة • قائد تشغيل • صانع سوق",
  image: "/team/founder.jpeg",
  tags: ["المزادات الرقمية", "التدفقات المالية", "تسعير بالذكاء الاصطناعي", "هندسة الأنظمة"],
  stats: [
    { label: "التركيز", value: "تنفيذ" },
    { label: "المنهج", value: "ابنِ → حسّن" },
    { label: "المجال", value: "مزادات • تمويل • SaaS • أتمتة" },
  ],
  accent: "gold",
  linkedin: "https://www.linkedin.com/in/mohammed-alahmad-3a7064107",
};

/* =======================
   Technical Team
======================= */
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
    role: "Backend & Streaming",
    subtitle: "دمج • حلول بث • تسليم",
    image: "/team/عامر الحوراني.jpeg",
    tags: ["Node.js", "Streaming", "Integration"],
    accent: "navy",
  },
  {
    name: "موسى الحلبي",
    role: "Backend & DevOps",
    subtitle: "أنظمة سحابية • CI/CD",
    image: "/team/موسى الحلبي.jpeg",
    tags: ["Laravel", "AWS", "DevOps"],
    accent: "emerald",
    cvUrl: "/cv/Mousa AlHalabi.pdf",
  },
  {
    name: "ضياء الدين العزيز",
    role: "Full-Stack Developer",
    subtitle: "Next.js • AI Integration",
    image: "/team/ضياء العزيز.jpg",
    tags: ["Next.js", "TypeScript", "AI"],
    accent: "navy",
    cvUrl: "/cv/diaaalazizResume.pdf",
  },
  {
    name: "جاسم الحجاب",
    role: "Laravel Developer",
    subtitle: "منطق المزادات",
    image: "/team/جاسم الحجاب.jpeg",
    tags: ["Laravel", "Auction Logic"],
    accent: "emerald",
  },
  {
    name: "علي خضور",
    role: "Senior Full-Stack Engineer",
    subtitle: "أنظمة موزعة • جاهزية للتوسع",
    image: "/الفينيقي.jpeg",
    tags: ["Java", "Spring Boot", "Microservices"],
    accent: "navy",
    cvUrl: "/cv/Ali Khaddour.pdf",
  },
];

/* =======================
   Management
======================= */
const management: Person[] = [
  {
    name: "عبدالله احمد",
    role: "المدير التنفيذي",
    subtitle: "قيادة تنفيذية • حوكمة • استراتيجية",
    image: "/management/عبدالله احمد.jpeg",
    tags: ["Leadership", "Strategy", "Execution", "Governance"],
    accent: "gold",
  },
  {
    name: "محمد العتيبي",
    role: "رئيس العمليات والتشغيل",
    subtitle: "تشغيل • جودة • متابعة",
    image: "/management/محمد العتيبي.jpeg",
    tags: ["Operations", "Process", "Quality"],
    accent: "navy",
  },
  {
    name: "يوسف احمد",
    role: "العلاقات العامة",
    subtitle: "تواصل • شراكات • تمثيل",
    image: "/management/يوسف احمد.jpeg",
    tags: ["PR", "Communication", "Brand"],
    accent: "emerald",
  },
  {
    name: "فيصل محمد أحمد الزهراني",
    role: "Finance & Operations",
    subtitle: "محاسبة • تسويات • تقارير",
    image: "/management/فيصل.jpg",
    tags: ["Accounting", "Settlements"],
    accent: "gold",
    cvUrl: "/cv/Faisal_Alzahrani_CV.pdf",
  },
  {
    name: "فارس العتيق",
    role: "التنسيق والتسويق",
    subtitle: "تنظيم • حملات • محتوى",
    image: "/management/فارس العتيق.jpeg",
    tags: ["Marketing", "Coordination"],
    accent: "navy",
  },
];

/* =======================
   Control Room
======================= */
const controlRoom: Person[] = [
  {
    name: "اشرف فراج",
    role: "مشرف الكنترول روم",
    image: "/management/اشرف فراج.jpeg",
    tags: ["Control Room", "Operations"],
  },
  {
    name: "موسى محمد",
    role: "تشغيل البث",
    image: "/management/موسى محمد.jpeg",
    tags: ["Broadcast", "Execution"],
  },
  {
    name: "هيثم سليمان",
    role: "الدعم الفني",
    image: "/management/هيثم سليمان.jpeg",
    tags: ["Support", "Monitoring"],
  },
];

/* =======================
   Card
======================= */
function PlayerCard({ person }: { person: Person }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4">
        <img
          src={encodeURI(person.image)}
          alt={person.name}
          className="h-full w-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/الفينيقي.jpeg";
          }}
        />
      </div>

      <h3 className="text-lg font-bold text-white">{person.name}</h3>
      <p className="text-sm text-white/60">{person.role}</p>
      {person.subtitle && <p className="text-xs text-white/40">{person.subtitle}</p>}

      <div className="mt-3 flex flex-wrap gap-2">
        {person.tags.map((t) => (
          <span key={t} className="text-[10px] rounded-full bg-white/10 px-3 py-1 text-white/70">
            {t}
          </span>
        ))}
      </div>

      {person.cvUrl && (
        <a
          href={encodeURI(person.cvUrl)}
          target="_blank"
          className="mt-4 inline-block rounded-xl bg-[#D4AF37] px-4 py-2 text-xs font-bold text-black"
        >
          السيرة الذاتية
        </a>
      )}
    </article>
  );
}

/* =======================
   Section
======================= */
export default function TeamShowcaseSection() {
  return (
    <section dir="rtl" className="py-24 text-white" style={{ backgroundColor: BRAND.dark }}>
      <div className="mx-auto max-w-6xl px-5 space-y-20">

        <PlayerCard person={founder} />

        <Section title="الفريق التقني" data={developers} />
        <Section title="فريق الإدارة" data={management} />
        <Section title="الكنترول روم وفريق التشغيل" data={controlRoom} />

      </div>
    </section>
  );
}

function Section({ title, data }: { title: string; data: Person[] }) {
  return (
    <div>
      <h2 className="mb-8 text-center text-3xl font-extrabold">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((p) => (
          <PlayerCard key={p.name} person={p} />
        ))}
      </div>
    </div>
  );
}
