'use client';

import React from "react";

type Person = {
  name: string;
  role: string;
  subtitle?: string;
  image: string | string[]; // ✅ يسمح بمسار واحد أو عدة مسارات (fallback)
  tags: string[];
  stats?: { label: string; value: string }[];
  accent?: "emerald" | "navy" | "gold";
  linkedin?: string;
  cvUrl?: string;
};

const BRAND = { dark: "#05070B" };

/* =======================
   Component: Smart Image
   - يحاول أكثر من مسار (fallback)
   - إذا فشل الكل: يطلع Placeholder بدل كرت فاضي
======================= */
function SmartImage({
  src,
  alt,
  className,
}: {
  src: string | string[];
  alt: string;
  className?: string;
}) {
  const list = Array.isArray(src) ? src : [src];
  const [idx, setIdx] = React.useState(0);
  const current = list[idx];

  return (
    <>
      <img
        src={encodeURI(current)}
        alt={alt}
        className={className}
        loading="lazy"
        onError={() => {
          if (idx < list.length - 1) setIdx(idx + 1);
          else setIdx(999); // يعني انتهت الخيارات
        }}
        style={idx === 999 ? { display: "none" } : undefined}
      />
      {idx === 999 ? (
        <div className="flex h-full w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs text-white/60">
          الصورة غير موجودة / المسار غير صحيح
        </div>
      ) : null}
    </>
  );
}

/* =======================
   Founder (✅ ثابت)
======================= */
const founder: Person = {
  name: "محمد أحمد الزهراني",
  role: "المؤسس والرئيس التنفيذي — DASM-e",
  subtitle: "مهندس رؤية المنصة • قائد تشغيل • صانع سوق",
  image: "/team/founder.jpeg", // ✅ هذا لازم يكون موجود في public/team
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
   Technical Team (CV داخل /cv)
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
   Management (✅ عبدالله أحمد بفول-باك)
   - لاحظ: صور الإدارة في public/management
   - CV في public/cv
======================= */
const management: Person[] = [
  {
    name: "عبدالله احمد",
    role: "المدير التنفيذي",
    subtitle: "قيادة تنفيذية • حوكمة • استراتيجية",
    image: [
      "/management/عبدالله احمد.jpeg",
      "/management/عبدالله احمد.jpg",
      "/management/عبدالله_احمد.jpeg",
      "/management/abdullah-ahmed.jpeg",
    ],
    tags: ["Leadership", "Strategy", "Execution", "Governance"],
    accent: "gold",
  },
  {
    name: "محمد العتيبي",
    role: "رئيس العمليات والتشغيل",
    subtitle: "تشغيل • جودة • متابعة",
    image: [
      "/management/محمد العتيبي.jpeg",
      "/management/محمد العتيبي.jpg",
    ],
    tags: ["Operations", "Process", "Quality", "Delivery"],
    accent: "navy",
  },
  {
    name: "يوسف احمد",
    role: "العلاقات العامة",
    subtitle: "تواصل • شراكات • تمثيل",
    image: [
      "/management/يوسف احمد.jpeg",
      "/management/يوسف احمد.jpg",
    ],
    tags: ["PR", "Communication", "Brand", "Partnerships"],
    accent: "emerald",
  },
  {
    name: "فيصل محمد أحمد الزهراني",
    role: "Finance & Operations",
    subtitle: "محاسبة • تسويات • تقارير",
    image: [
      "/management/فيصل.jpg",
      "/management/فيصل.jpeg",
    ],
    tags: ["Accounting", "Settlements", "Reporting", "Operations"],
    accent: "gold",
    cvUrl: "/cv/Faisal_Alzahrani_CV.pdf",
  },
  {
    name: "فارس العتيق",
    role: "التنسيق والتسويق",
    subtitle: "تنظيم • حملات • محتوى",
    image: [
      "/management/فارس العتيق.jpeg",
      "/management/فارس العتيق.jpg",
    ],
    tags: ["Marketing", "Coordination", "Campaigns"],
    accent: "navy",
  },
];

/* =======================
   Control Room (صورهم في management حسب كلامك)
======================= */
const controlRoom: Person[] = [
  {
    name: "اشرف فراج",
    role: "الكنترول روم",
    subtitle: "إدارة تشغيل البث",
    image: [
      "/management/اشرف فراج.jpeg",
      "/management/اشرف فراج.jpg",
    ],
    tags: ["Control Room", "Broadcast", "Ops"],
    accent: "emerald",
  },
  {
    name: "موسى محمد",
    role: "التشغيل",
    subtitle: "تنفيذ البث والمتابعة",
    image: [
      "/management/موسى محمد.jpeg",
      "/management/موسى محمد.jpg",
    ],
    tags: ["Execution", "Monitoring"],
    accent: "navy",
  },
  {
    name: "هيثم سليمان",
    role: "الدعم الفني",
    subtitle: "استجابة وحلول سريعة",
    image: [
      "/management/هيثم سليمان.jpeg",
      "/management/هيثم سليمان.jpg",
    ],
    tags: ["Support", "Troubleshooting"],
    accent: "gold",
  },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function PlayerCard({ person, variant }: { person: Person; variant?: "founder" | "normal" }) {
  const isFounder = variant === "founder";

  const primaryBtn = isFounder
    ? "bg-[#D4AF37] text-black hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]"
    : "bg-white text-black hover:bg-white/90";

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl transition-all duration-300 hover:-translate-y-0.5">
      <div className="grid gap-6 md:grid-cols-[180px_1fr]">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <SmartImage
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Content */}
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

          {/* Actions */}
          <div className="mt-auto pt-6 flex flex-wrap gap-3">
            <a
              href={person.cvUrl ? encodeURI(person.cvUrl) : "#"}
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

function Section({ title, subtitle, data }: { title: string; subtitle?: string; data: Person[] }) {
  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
        {subtitle ? <p className="mt-2 text-sm text-white/60">{subtitle}</p> : null}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((p) => (
          <PlayerCard key={p.name} person={p} />
        ))}
      </div>
    </div>
  );
}

export default function TeamShowcaseSection() {
  return (
    <section dir="rtl" className="py-24 text-white" style={{ backgroundColor: BRAND.dark }}>
      <div className="mx-auto max-w-6xl px-5 space-y-20">

        {/* Founder */}
        <PlayerCard person={founder} variant="founder" />

        {/* Technical */}
        <Section title="الفريق التقني" subtitle="فريق البناء والتنفيذ البرمجي" data={developers} />

        {/* Divider */}
        <div className="h-px w-full bg-white/10" />

        {/* Management */}
        <Section title="فريق الإدارة" subtitle="إدارة التشغيل والتنفيذ المالي والتنسيق" data={management} />

        {/* Divider */}
        <div className="h-px w-full bg-white/10" />

        {/* Control Room */}
        <Section title="الكنترول روم وفريق التشغيل" subtitle="تشغيل البث والمتابعة والدعم الفني" data={controlRoom} />

      </div>
    </section>
  );
}
