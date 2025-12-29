"use client";

import { cn } from "@/lib/utils";

type AcademicsOverviewProps = {
  className?: string;
};

const ACADEMICS = [
  {
    level: "Pre-Primary",
    range: "Nursery – KG",
    description:
      "A nurturing foundation focused on early literacy, numeracy, motor skills, and social development in a safe and caring environment.",
  },
  {
    level: "Primary School",
    range: "Classes 1 – 5",
    description:
      "Strong emphasis on core subjects, reading habits, handwriting, and conceptual clarity aligned with MP Board guidelines.",
  },
  {
    level: "Middle School",
    range: "Classes 6 – 8",
    description:
      "Increased subject depth with focus on logical thinking, application-based learning, and disciplined academic routines.",
  },
  {
    level: "Secondary & Senior Secondary",
    range: "Classes 9 – 12",
    description:
      "Exam-oriented preparation with structured revision, regular assessments, and focused guidance for MP Board success.",
  },
];

export default function AcademicsOverview({ className }: AcademicsOverviewProps) {
  return (
    <section
      className={cn("border-b border-border/60 bg-background", className)}
    >
      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Academics at Pink Flower Valley School
          </h2>
          <p className="mt-3 text-muted-foreground">
            A structured MP Board curriculum focused on strong fundamentals and steady academic growth.
          </p>
        </div>

        {/* Academic structure */}
        <div className="mt-12 divide-y divide-border/60">
          {ACADEMICS.map((item, index) => (
            <AcademicRow key={item.level} index={index + 1} {...item} />
          ))}
        </div>

        {/* Board note */}
        <div className="p-2 mt-10  border-l-4 border-primary pl-5 bg-chart-3/50">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The academic framework follows the Madhya Pradesh Board of Secondary Education,
            ensuring syllabus continuity, exam preparedness, and age-appropriate evaluation
            at every stage of schooling.
          </p>
        </div>
      </div>
    </section>
  );
}

function AcademicRow({
  level,
  range,
  description,
  index,
}: {
  level: string;
  range: string;
  description: string;
  index: number;
}) {
  return (
    <div className="group grid gap-4 py-8 md:grid-cols-12">
      {/* index */}
      <div className="md:col-span-1 text-sm font-semibold text-muted-foreground">
        {String(index).padStart(2, "0")}
      </div>

      {/* content */}
      <div className="md:col-span-11">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground">
            {level}
          </h3>
          <span className="text-sm text-muted-foreground">
            {range}
          </span>
        </div>

        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
