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
  badge?: string;
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
   Helpers
======================= */
function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function badgeStyle(accent?: Person["accent"]) {
  if (accent === "gold") return "border-[#D4AF37]/35 bg-[#D4AF37]/12 text-[#F5D77A]";
  if (accent === "emerald") return "border-[#10B981]/30 bg-[#10B981]/12 text-[#7FF0C7]";
  return "border-white/15 bg-white/5 text-white/80";
}

function RoleBadge({ text, accent }: { text?: string; accent?: Person["accent"] }) {
  if (!text) return null;
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide",
        "backdrop-blur-md",
        badgeStyle(accent)
      )}
    >
      <span
        className={cx(
          "h-1.5 w-1.5 rounded-full",
          accent === "gold" ? "bg-[#D4AF37]" : accent === "emerald" ? "bg-[#10B981]" : "bg-white/60"
        )}
      />
      {text}
    </span>
  );
}

/* =======================
   Assets (Fallback)
======================= */
const FALLBACK_IMAGE = "/team/الفينيقي.jpeg";

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
  badge: "FOUNDER / CEO",
};

/* =======================
   Tech Team
======================= */
const techTeam: Person[] = [
  {
    name: "لؤي أبو جلهوم",
    role: "قائد الفريق التقني — Backend",
    subtitle: "واجهات API • منطق المزادات • وقت حقيقي",
    image: "/team/لؤي ابوجلهوم.png",
    tags: ["Laravel", "PostgreSQL", "WebSockets", "Architecture"],
    accent: "emerald",
    badge: "BACKEND LEAD",
  },
  {
    name: "محمد خالد",
    role: "Frontend Developer",
    subtitle: "واجهات • داشبورد • تجربة منتج",
    image: "/team/محمد خالد.jpg",
    tags: ["React/Next.js", "Tailwind", "UI Components", "UX"],
    accent: "navy",
    badge: "FRONTEND",
  },
  {
    name: "عامر الحوراني",
    role: "Backend (Node.js) & Streaming Specialist",
    subtitle: "دمج • تسليم • حلول بث",
    image: "/team/عامر الحوراني.jpeg",
    tags: ["Integration", "Delivery", "Streaming", "Quality"],
    accent: "navy",
    badge: "STREAMING",
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
    cvUrl: "/cv/Mousa AlHalabi.pdf",
    badge: "DEVOPS",
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
    cvUrl: "/cv/diaaalazizResume.pdf",
    badge: "FULL-STACK",
  },
  {
    name: "جاسم الحجاب",
    role: "مطور لارافيل — أنظمة المزادات",
    subtitle: "منطق المزاد • دعم تقني حاسم",
    image: "/team/جاسم الحجاب.jpeg",
    tags: ["Laravel", "PHP", "Auction Logic", "Backend"],
    accent: "emerald",
    badge: "AUCTIONS",
  },
  {
    name: "علي خضور",
    role: "Senior Full-Stack Engineer",
    subtitle: "أنظمة موزعة • بيانات وقت حقيقي • جاهزية للتوسع",
    image: FALLBACK_IMAGE,
    tags: ["Java/Spring Boot", "React", "PostgreSQL", "Microservices", "Elasticsearch"],
    stats: [
      { label: "الخبرة", value: "+5 سنوات" },
      { label: "المجال", value: "Distributed Systems" },
      { label: "الأسلوب", value: "Clean Logic" },
    ],
    accent: "navy",
    cvUrl: "/cv/Ali Khaddour.pdf",
    badge: "SENIOR",
  },
];

/* =======================
   Management Team
======================= */
const managementTeam: Person[] = [
  {
    name: "عبدالله أحمد",
    role: "المدير التنفيذي",
    subtitle: "قيادة تنفيذية • حوكمة • استراتيجية",
    image: "/management/abdullah-ahmed.jpeg",
    tags: ["Leadership", "Strategy", "Execution", "Governance"],
    accent: "gold",
    badge: "EXECUTIVE DIRECTOR",
  },
  {
    name: "محمد العتيبي",
    role: "رئيس العمليات والتشغيل",
    subtitle: "تشغيل • إجراءات • متابعة جودة",
    image: "/management/محمد العتيبي.jpeg",
    tags: ["Operations", "Process", "Quality", "Delivery"],
    accent: "navy",
    badge: "COO",
  },
  {
    name: "يوسف أحمد",
    role: "العلاقات العامة",
    subtitle: "علاقات • شراكات • تواصل مؤسسي",
    image: "/management/يوسف احمد.jpeg",
    tags: ["PR", "Partnerships", "Communication", "Brand"],
    accent: "navy",
    badge: "PR",
  },
  {
    name: "فيصل محمد أحمد الزهراني",
    role: "Finance & Operations",
    subtitle: "محاسبة • تسويات • تقارير مالية",
    image: "/management/فيصل.jpg",
    tags: ["Accounting", "Settlements", "Financial Reporting", "Operations"],
    stats: [
      { label: "المحور", value: "Finance" },
      { label: "القوة", value: "تسويات دقيقة" },
      { label: "الأسلوب", value: "انضباط مالي" },
    ],
    accent: "gold",
    cvUrl: "/cv/Faisal_Alzahrani_CV.pdf",
    badge: "FINANCE",
  },
  {
    name: "فارس العتيق",
    role: "التنسيق والتسويق",
    subtitle: "تنسيق • تسويق • تنظيم حملات",
    image: "/management/فارس العتيق.jpeg",
    tags: ["Marketing", "Coordination", "Campaigns", "Growth"],
    accent: "emerald",
    badge: "MARKETING",
  },
  {
    name: "خضر أحمد",
    role: "مسؤول متابعة الشؤون القانونية",
    subtitle: "امتثال • تنظيم • متابعة قانونية",
    image: FALLBACK_IMAGE, // لا توجد صورة حاليا
    tags: ["Legal", "Compliance", "Regulation", "Governance"],
    accent: "navy",
    badge: "LEGAL",
  },
];

/* =======================
   Control Room / Ops Team (No images yet)
   Future images will live in: /public/control-room/
======================= */
const controlRoomTeam: Person[] = [
  {
    name: "اشرف فراج",
    role: "فريق الكنترول روم — تشغيل",
    subtitle: "تشغيل بث • متابعة عمليات • دعم فوري",
    image: FALLBACK_IMAGE, // لاحقًا: "/control-room/ashraf-faraj.jpeg"
    tags: ["Ops", "Control Room", "Monitoring", "Support"],
    accent: "emerald",
    badge: "CONTROL ROOM",
  },
  {
    name: "موسى محمد",
    role: "فريق الكنترول روم — تشغيل",
    subtitle: "تنسيق • متابعة • جاهزية",
    image: FALLBACK_IMAGE, // لاحقًا: "/control-room/mousa-mohammed.jpeg"
    tags: ["Coordination", "Ops", "Readiness", "Execution"],
    accent: "navy",
    badge: "OPS",
  },
  {
    name: "هيثم سليمان",
    role: "فريق الكنترول روم — تشغيل",
    subtitle: "إسناد • جودة • تنظيم",
    image: FALLBACK_IMAGE, // لاحقًا: "/control-room/haitham-sulaiman.jpeg"
    tags: ["Quality", "Ops", "Process", "Support"],
    accent: "navy",
    badge: "OPS",
  },
];

/* =======================
   Card
======================= */
function PlayerCard({ person, variant }: { person: Person; variant: "founder" | "member" }) {
  const isFounder = variant === "founder";
  const accent = person.accent ?? (isFounder ? "gold" : "navy");

  const primaryBtn = isFounder
    ? "bg-[#D4AF37] text-black hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]"
    : "bg-white text-black hover:bg-white/90";

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl transition-all duration-300 hover:-translate-y-0.5">
      <div className="absolute right-5 top-5 z-10">
        <RoleBadge text={person.badge} accent={accent} />
      </div>

      <div className="grid gap-6 md:grid-cols-[180px_1fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <img
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
            }}
            loading="lazy"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-white">{person.name}</h3>
          <p className="text-sm text-white/60">{person.role}</p>
          {person.subtitle && <p className="mt-1 text-xs text-white/40">{person.subtitle}</p>}

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
                <div key={s.label} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  <div className="text-[10px] text-white/40">{s.label}</div>
                  <div className="text-xs font-semibold text-white">{s.value}</div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-auto pt-6 flex flex-wrap gap-3">
            <a
              href={person.cvUrl ? person.cvUrl : "#"}
              target={person.cvUrl ? "_blank" : "_self"}
              className={cx(
                "rounded-xl px-4 py-2 text-xs font-bold transition",
                person.cvUrl ? primaryBtn : "bg-white/5 text-white/20 cursor-not-allowed"
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
                person.linkedin ? "bg-white/5 text-white hover:bg-white/10" : "text-white/20 cursor-not-allowed"
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
   Section Header
======================= */
function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mt-14 mb-8">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-white/10" />
        <h3 className="text-lg md:text-xl font-extrabold text-white">{title}</h3>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      {subtitle ? <p className="mt-3 text-center text-sm text-white/55">{subtitle}</p> : null}
    </div>
  );
}

/* =======================
   Main Section
======================= */
export default function TeamShowcaseSection() {
  return (
    <section dir="rtl" className="relative py-24 text-white" style={{ backgroundColor: BRAND.dark }}>
      <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <h2 className="mb-16 text-center text-4xl font-extrabold md:text-6xl">
          المؤسس والفِرق الرئيسية
        </h2>

        <div className="mb-12">
          <PlayerCard person={founder} variant="founder" />
        </div>

        <SectionHeader
          title="الفريق التقني"
          subtitle="الفريق الذي حوّل الفكرة إلى منتج يعمل — هندسة، واجهات، بنية تحتية، وتشغيل وقت حقيقي."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techTeam.map((p) => (
            <PlayerCard key={p.name} person={p} variant="member" />
          ))}
        </div>

        <SectionHeader
          title="فريق الإدارة"
          subtitle="إدارة التشغيل والتنفيذ المالي والتسويق والتنسيق لضمان نمو المنصة واستمراريتها."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {managementTeam.map((p) => (
            <PlayerCard key={p.name} person={p} variant="member" />
          ))}
        </div>

        <SectionHeader
          title="الكنترول روم وفريق التشغيل"
          subtitle="حالياً بدون صور — عند توفرها ضعها في public/control-room وسيتم ربطها فوراً."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {controlRoomTeam.map((p) => (
            <PlayerCard key={p.name} person={p} variant="member" />
          ))}
        </div>
      </div>
    </section>
  );
}
