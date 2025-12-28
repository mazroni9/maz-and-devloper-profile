// TeamShowcaseSection.tsx
// React + Tailwind (مناسب لـ Next.js)
// ✅ تعديلات نهائية حسب النقاش:
// 1) حذف أي نصوص إضافية تحت العنوان (لا وصف مزدحم)
// 2) إصلاح صورة المؤسس: إظهار الوجه دائمًا (object-top + eager + إزالة التدرج فوق الوجه)
// 3) تعريب الأزرار بالكامل
// 4) تصحيح RTL: استبدال ml-auto بـ mr-auto
// 5) تقليل حركة الكرت (translate) لتفادي قص بصري
// 6) تنظيف أدوار الفريق (إزالة أسطر مكسورة) + تحسين قابلية القراءة

import React from "react";

type Person = {
  name: string;
  role: string;
  subtitle?: string;
  image: string;
  tags: string[];
  stats?: { label: string; value: string }[];
  accent?: "emerald" | "navy" | "gold";
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
  subtitle: "مهندس الرؤية • قائد تشغيل • صانع سوق",
  // ملاحظة: ضع صورة المؤسس في /public بنفس الاسم أو غيّر المسار حسب مشروعك
  image: "/المؤسس-1.jpeg",
  tags: ["المزادات الرقمية", "التدفقات المالية", "تسعير بالذكاء الاصطناعي", "هندسة الأنظمة"],
  stats: [
    { label: "التركيز", value: "تنفيذ" },
    { label: "المنهج", value: "ابنِ → حسّن" },
    { label: "المجال", value: "مزادات + تمويل" },
  ],
  accent: "gold",
};

const developers: Person[] = [
  {
    name: "لؤي أبو جلهوم",
    role: "قائد الفريق التقني — Backend",
    subtitle: "واجهات API • منطق المزادات • وقت حقيقي",
    image: "/team/لؤي ابوجلهوم.png",
    tags: ["Laravel", "PostgreSQL", "WebSockets", "Architecture"],
    stats: [
      { label: "المحور", value: "Backend" },
      { label: "القوة", value: "Systems" },
      { label: "الأسلوب", value: "Clean Logic" },
    ],
    accent: "emerald",
  },
  {
    name: "محمد خالد",
    role: "Frontend Developer",
    subtitle: "واجهات • داشبورد • تجربة منتج",
    image: "/team/محمد خالد.jpg",
    tags: ["React/Next.js", "Tailwind", "UI Components", "UX"],
    stats: [
      { label: "المحور", value: "Frontend" },
      { label: "القوة", value: "UX" },
      { label: "الأسلوب", value: "Fast Iteration" },
    ],
    accent: "navy",
  },
  {
    name: "عامر الحوراني",
    role: "Backend (Node.js) & Streaming Specialist",
    subtitle: "دمج • تسليم • حلول بث",
    image: "/team/عامر الحوراني.jpeg",
    tags: ["Integration", "Delivery", "Streaming", "Quality"],
    stats: [
      { label: "المحور", value: "Backend" },
      { label: "القوة", value: "Delivery" },
      { label: "الأسلوب", value: "Discipline" },
    ],
    accent: "navy",
  },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function AccentDot({ accent }: { accent: Person["accent"] }) {
  const color =
    accent === "gold"
      ? "bg-[#D4AF37]"
      : accent === "emerald"
      ? "bg-[#10B981]"
      : "bg-[#0B3A63]";
  return <span className={cx("h-2 w-2 rounded-full", color)} />;
}

function Chip({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {text}
    </span>
  );
}

function StatLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
      <span className="text-xs text-white/60">{label}</span>
      <span className="text-xs font-semibold text-white">{value}</span>
    </div>
  );
}

function PlayerCard({
  person,
  variant,
}: {
  person: Person;
  variant: "founder" | "dev";
}) {
  const isFounder = variant === "founder";

  const ribbonText = isFounder ? "بطاقة المؤسس" : "الفريق التقني";
  const roleLabel = isFounder ? "الدور" : "الدور";
  const accent = person.accent ?? (isFounder ? "gold" : "emerald");

  const badgeBorder =
    accent === "gold"
      ? "border-[#D4AF37]/40"
      : accent === "emerald"
      ? "border-[#10B981]/35"
      : "border-[#0B3A63]/40";

  const badgeTitle =
    accent === "gold"
      ? "text-[#D4AF37]"
      : accent === "emerald"
      ? "text-[#10B981]"
      : "text-[#9CC6FF]";

  const primaryBtn = isFounder
    ? "bg-[#D4AF37] text-black hover:shadow-[0_0_60px_rgba(212,175,55,0.35)]"
    : "bg-white text-black hover:bg-white/90";

  const secondaryBtn = "border border-white/15 bg-white/5 text-white/90 hover:bg-white/10";

  return (
    <article
      className={cx(
        "group relative overflow-hidden rounded-3xl border border-white/10",
        "bg-gradient-to-b from-white/10 to-white/5",
        "shadow-[0_20px_80px_rgba(0,0,0,0.45)]",
        "transition-transform duration-300 hover:-translate-y-0.5"
      )}
    >
      {/* Glow */}
      <div
        className={cx(
          "pointer-events-none absolute -inset-24 opacity-70 blur-2xl",
          isFounder
            ? "bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,55,0.22),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.14),transparent_45%)]"
            : "bg-[radial-gradient(circle_at_20%_10%,rgba(11,58,99,0.20),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.16),transparent_45%)]"
        )}
      />

      {/* Top ribbon */}
      <div className="absolute right-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs text-white/80 backdrop-blur">
        <AccentDot accent={accent} />
        {ribbonText}
      </div>

      <div className="relative z-10 grid gap-6 p-6 md:grid-cols-[180px_1fr]">
        {/* Portrait */}
        <div className="relative">
          {isFounder ? (
            <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-[#D4AF37]/10 blur-2xl" />
          ) : null}

          <div
            className={cx(
              "relative overflow-hidden rounded-2xl border border-white/10 bg-black/20",
              isFounder ? "aspect-[3/4]" : "aspect-[4/5]"
            )}
          >
            {/* ✅ FIX: face visibility */}
            <img
              src={person.image}
              alt={person.name}
              className={cx(
                "h-full w-full object-cover transition-transform duration-500",
                isFounder ? "object-top group-hover:scale-[1.02]" : "object-top group-hover:scale-[1.03]"
              )}
              loading={isFounder ? "eager" : "lazy"}
            />

            {/* ❌ REMOVED: overlay that darkens/obscures face */}
            {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" /> */}
          </div>

          {/* Role badge */}
          <div
            className={cx(
              "absolute -bottom-3 right-3 rounded-2xl border bg-black/70 px-3 py-2 backdrop-blur",
              badgeBorder
            )}
          >
            <div className={cx("text-[10px] uppercase tracking-wide", badgeTitle)}>{roleLabel}</div>
            <div className="text-xs font-semibold text-white">{person.role}</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <header className="space-y-1">
            <h3 className="text-xl font-bold text-white md:text-2xl">{person.name}</h3>
            {person.subtitle ? <p className="text-sm text-white/70">{person.subtitle}</p> : null}
          </header>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {person.tags.map((t) => (
              <Chip key={t} text={t} />
            ))}
          </div>

          {/* Stats */}
          {person.stats?.length ? (
            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {person.stats.map((s) => (
                <StatLine key={s.label} label={s.label} value={s.value} />
              ))}
            </div>
          ) : null}

          {/* CTA row */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className={cx("rounded-2xl px-4 py-2 text-sm font-semibold transition", primaryBtn)}>
              عرض الملف
            </button>

            <button className={cx("rounded-2xl px-4 py-2 text-sm font-semibold transition", secondaryBtn)}>
              تواصل
            </button>

            {/* ✅ RTL fix: mr-auto instead of ml-auto */}
            <div className="mr-auto hidden items-center gap-2 text-xs text-white/55 sm:flex">
              <span className={cx("h-1.5 w-1.5 rounded-full", isFounder ? "bg-[#D4AF37]" : "bg-[#10B981]")} />
              {isFounder ? "تنفيذ بقيادة المؤسس" : "جاهز للتوسع"}
            </div>
          </div>

          <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
    </article>
  );
}

export default function TeamShowcaseSection() {
  return (
    <section dir="rtl" className="relative py-14 text-white" style={{ backgroundColor: BRAND.dark }}>
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* Brand radial glow (Emerald + Gold) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.23),transparent_55%)]" />

      {/* Subtle navy wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(11,58,99,0.22),transparent_60%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-5">
        {/* Headline */}
        <div className="mb-8 flex flex-col gap-3">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-[#10B981]" />
            DASM-e • ملفات تعريف
          </div>

          <h2 className="text-2xl font-extrabold md:text-4xl">
            المؤسس والفريق التقني الذي حوّل الفكرة إلى منصة تعمل
          </h2>

          {/* ✅ حسب طلبك: لا يوجد وصف إضافي هنا */}
        </div>

        {/* Founder */}
        <div className="mb-10">
          <PlayerCard person={founder} variant="founder" />
        </div>

        {/* Dev grid */}
        <div className="mb-4 flex items-end justify-between gap-4">
          <h3 className="text-lg font-bold md:text-xl">الفريق التقني</h3>
          <div className="text-xs text-white/60">مرر/اضغط لعرض البطاقة</div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {developers.map((p) => (
            <PlayerCard key={p.name} person={p} variant="dev" />
          ))}
        </div>

        {/* رابط صفحة المخطط المعماري */}
        <div className="mt-10 text-center">
          <a
            href="/architecture"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
          >
            📊 عرض مخطط المعمارية
          </a>
        </div>
      </div>
    </section>
  );
}
