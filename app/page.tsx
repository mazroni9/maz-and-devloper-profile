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
  navy: "#0B3A63",
  emerald: "#10B981",
  gold: "#D4AF37",
};

/* =======================
   Founder
======================= */
const founder: Person = {
  name: "محمد أحمد الزهراني",
  role: "المؤسس والرئيس التنفيذي — DASM-e",
  subtitle: "مهندس رؤية المنصة • قائد تشغيل • صانع سوق",
  image: "/team/founder.jpeg",
  tags: [
    "المزادات الرقمية",
    "التدفقات المالية",
    "تسعير بالذكاء الاصطناعي",
    "هندسة الأنظمة",
  ],
  stats: [
    { label: "التركيز", value: "تنفيذ" },
    { label: "المنهج", value: "ابنِ → حسّن" },
    { label: "المجال", value: "مزادات • تمويل • SaaS • أتمتة" },
  ],
  accent: "gold",
  linkedin: "https://www.linkedin.com/in/mohammed-alahmad-3a7064107",
  // إذا عندك CV للمؤسس في public:
  // cvUrl: "/Mohammed Alzahrani CV.pdf",
};

/* =======================
   Developers (Includes Ali Khaddour)
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
    tags: ["Laravel", "Node.js", "DevOps", "AWS", "Kubernetes"],
    stats: [
      { label: "الخبرة", value: "+5 سنوات" },
      { label: "القوة", value: "Scalability" },
      { label: "الأسلوب", value: "Clean Architecture" },
    ],
    accent: "emerald",
    linkedin: "https://linkedin.com/in/mousa-al-halabi-9183a9237",
    cvUrl: "/Mousa AlHalabi.pdf",
  },
  {
    name: "ضياء الدين العزيز",
    role: "Full-Stack Developer",
    subtitle: "حلول ذكاء اصطناعي • Next.js • Cloudflare",
    image: "/team/ضياء العزيز.jpg",
    tags: ["Next.js", "TypeScript", "Cloudflare", "AI Integration"],
    stats: [
      { label: "المحور", value: "Full-Stack" },
      { label: "القوة", value: "AI/ML" },
      { label: "الترتيب", value: "Top 15%" },
    ],
    accent: "navy",
    linkedin: "https://www.linkedin.com/in/dhia2004/",
    cvUrl: "/diaaalazizResume.pdf",
  },
  {
    name: "جاسم الحجاب",
    role: "مطور لارافيل — أنظمة المزادات",
    subtitle: "منطق المزاد • دعم تقني حاسم",
    image: "/team/جاسم الحجاب.jpeg",
    tags: ["Laravel", "PHP", "Auction Logic", "Backend"],
    accent: "emerald",
  },

  // ✅ علي خضور (المفقود)
  {
    name: "علي خضور",
    role: "Senior Full-Stack Engineer",
    subtitle: "أنظمة موزعة • بيانات وقت حقيقي • جاهزية للتوسع",
    image: "/team/الفينيقي.jpeg", // صورة افتراضية (لوجو) حتى تضع صورته لاحقًا
    tags: ["Java/Spring Boot", "React", "PostgreSQL", "Microservices", "Elasticsearch"],
    stats: [
      { label: "الخبرة", value: "+5 سنوات" },
      { label: "المجال", value: "Distributed Systems" },
      { label: "الأسلوب", value: "Clean Logic" },
    ],
    accent: "navy",
    cvUrl: "/Ali Khaddour.pdf",
  },

  // ✅ فيصل (كما اتفقنا)
  {
    name: "فيصل محمد أحمد الزهراني",
    role: "Finance & Operations",
    subtitle: "محاسبة • تسويات • تقارير مالية",
    image: "/team/فيصل.jpg",
    tags: ["Accounting", "Settlements", "Financial Reporting", "Operations"],
    stats: [
      { label: "المحور", value: "Finance" },
      { label: "القوة", value: "تسويات دقيقة" },
      { label: "الأسلوب", value: "انضباط مالي" },
    ],
    accent: "gold",
    cvUrl: "/Faisal_Alzahrani_CV.pdf",
  },
];

/* =======================
   Utils
======================= */
function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/* =======================
   Player Card
======================= */
function PlayerCard({
  person,
  variant,
}: {
  person: Person;
  variant: "founder" | "dev";
}) {
  const isFounder = variant === "founder";

  const primaryBtn = isFounder
    ? "bg-[#D4AF37] text-black hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]"
    : "bg-white text-black hover:bg-white/90";

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl transition-all duration-300 hover:-translate-y-0.5">
      <div className="grid gap-6 md:grid-cols-[180px_1fr]">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <img
            src={encodeURI(person.image)}
            alt={person.name}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/team/الفينيقي.jpeg";
            }}
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-white">{person.name}</h3>
          <p className="text-sm text-white/60">{person.role}</p>
          {person.subtitle && (
            <p className="mt-1 text-xs text-white/40">{person.subtitle}</p>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {person.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-white/70"
              >
                {t}
              </span>
            ))}
          </div>

          {person.stats && (
            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {person.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                >
                  <div className="text-[10px] text-white/40">{s.label}</div>
                  <div className="text-xs font-semibold text-white">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="mt-auto pt-6 flex flex-wrap gap-3">
            <a
              href={person.cvUrl ? encodeURI(person.cvUrl) : "#"}
              target={person.cvUrl ? "_blank" : "_self"}
              className={cx(
                "rounded-xl px-4 py-2 text-xs font-bold transition",
                person.cvUrl
                  ? primaryBtn
                  : "bg-white/5 text-white/20 cursor-not-allowed"
              )}
              onClick={(e) => {
                if (!person.cvUrl) e.preventDefault();
              }}
            >
              السيرة الذاتية
            </a>

            <a
              href={person.linkedin || "#"}
              target={person.linkedin ? "_blank" : "_self"}
              className={cx(
                "rounded-xl border border-white/10 px-4 py-2 text-xs font-bold transition",
                person.linkedin
                  ? "bg-white/5 text-white hover:bg-white/10"
                  : "text-white/20 cursor-not-allowed"
              )}
              onClick={(e) => {
                if (!person.linkedin) e.preventDefault();
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

/* =======================
   Section
======================= */
export default function TeamShowcaseSection() {
  return (
    <section
      dir="rtl"
      className="relative py-24 text-white"
      style={{ backgroundColor: BRAND.dark }}
    >
      <div className="relative mx-auto max-w-6xl px-5">
        <h2 className="mb-16 text-center text-4xl font-extrabold md:text-6xl">
          المؤسس والفريق التقني
        </h2>

        <div className="mb-12">
          <PlayerCard person={founder} variant="founder" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {developers.map((p) => (
            <PlayerCard key={p.name} person={p} variant="dev" />
          ))}
        </div>
      </div>
    </section>
  );
}
