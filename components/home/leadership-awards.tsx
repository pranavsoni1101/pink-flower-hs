"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

type LeadershipAwardsProps = {
    className?: string;
};

export default function LeadershipAwards({ className }: LeadershipAwardsProps) {
    return (
        <section className={cn("border-b border-border/60 bg-background", className)}>
            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="grid gap-12 lg:grid-cols-12">
                    {/* Left: Leadership */}
                    <div className="lg:col-span-7">
                        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                            Leadership & Recognition
                        </h2>

                        <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
                            Pink Flower Valley School is guided by experienced leadership with a strong
                            academic vision and decades of commitment to quality education.
                        </p>

                        <div className="mt-8 space-y-6">
                            <div>
                                <div className="text-sm font-semibold text-foreground">
                                    Principal’s Leadership
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    The school is led by an award-winning Principal, recognised at local,
                                    state and national levels for contributions to education and student development.
                                </p>
                            </div>

                            <div>
                                <div className="text-sm font-semibold text-foreground">
                                    Academic Direction
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    Under consistent leadership, the school has maintained disciplined
                                    academic standards, strong MP Board results, and a structured learning environment.
                                </p>
                            </div>
                        </div>

                        {/* Awards timeline */}
                        <div className="mt-10 border-l-2 border-primary/60 pl-5 space-y-5">
                            <Award
                                year="2013"
                                text="Honoured at the national level for excellence in education."
                            />
                            <Award
                                year="Multiple Years"
                                text="Recognised at local and state levels for academic leadership and school development."
                            />
                            <Award
                                year="Ongoing"
                                text="Continued appreciation for student performance and institutional discipline."
                            />
                        </div>
                    </div>

                    {/* Right: Visual anchor (content-height aligned) */}
                    <div className="lg:col-span-5">
                        <div className="flex h-full">
                            <div className="relative flex w-full flex-col overflow-hidden rounded-3xl bg-card ring-1 ring-border/70">

                                {/* Image */}

                                <div className="relative h-full min-h-[320px] overflow-hidden">
                                    <Image
                                        src="/principal.jpg" // or award.jpg
                                        alt="Principal of Pink Flower Valley School"
                                        fill
                                        className="object-cover"
                                        priority={false}
                                    />
                                </div>

                                {/* Caption */}
                                <div className="border-t border-border/60 p-5">
                                    <div className="text-sm font-semibold text-foreground">
                                        A School Built on Experience
                                    </div>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Leadership that balances discipline, care, and academic focus.
                                    </p>
                                </div>

                                {/* subtle brand edge */}
                                <div aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-primary/50" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function Award({ year, text }: { year: string; text: string }) {
    return (
        <div>
            <div className="text-xs font-semibold text-primary">{year}</div>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {text}
            </p>
        </div>
    );
}
