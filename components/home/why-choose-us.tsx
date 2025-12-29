"use client";

import { cn } from "@/lib/utils";

type WhyChooseUsProps = {
  className?: string;
  title?: string;
  subtitle?: string;
};

const ITEMS = [
  {
    title: "Strong MP Board Results",
    text: "Consistent merit-list performance backed by a structured, exam-aligned academic approach.",
  },
  {
    title: "Recognised Leadership",
    text: "Award-winning guidance at local, state and national level, including national recognition in 2013.",
  },
  {
    title: "Safe & Disciplined Campus",
    text: "A secure, supportive environment that prioritises student well-being, values and discipline.",
  },
  {
    title: "Holistic Development",
    text: "Balanced focus on academics, sports, arts and confidence-building activities.",
  },
];

export default function WhyChooseUs({
  className,
  title = "Why Parents Choose Pink Flower School",
  subtitle = "Proven academics, experienced leadership, and a learning environment parents trust.",
}: WhyChooseUsProps) {
  return (
    <section className={cn("border-b border-border/60 bg-background", className)}>
      <div className="mx-auto max-w-6xl px-4 py-14">
        <header className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-muted-foreground">{subtitle}</p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <WhyCard key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCard({ title, text }: { title: string; text: string }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "bg-card",
        "ring-1 ring-border/70",
        "transition-all duration-300",
        "hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20"
      )}
    >
      {/* subtle pink accent rail */}
      <div
        aria-hidden
        className="absolute left-0 top-0 h-full w-1 bg-primary/70"
      />

      {/* soft brand wash */}
      <div
        aria-hidden
        className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative p-5">
        <div className="text-sm font-semibold text-foreground">
          {title}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {text}
        </p>
      </div>
    </div>
  );
}
