"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type StudentLifeProps = {
    className?: string;
};

export default function StudentLife({ className }: StudentLifeProps) {
    return (
        <section className={cn("border-b border-border/60 bg-background", className)}>
            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="grid gap-10 lg:grid-cols-12">
                    {/* Left: Images */}
                    <div className="lg:col-span-7 grid gap-4">
                        <div className="relative h-[280px] overflow-hidden rounded-3xl">
                            <Image
                                src="/classroom.jpg"
                                alt="Students learning in classroom"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative h-[180px] overflow-hidden rounded-2xl">
                                <Image
                                    src="/sports.jpg"
                                    alt="Students participating in sports activities"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-[180px] overflow-hidden rounded-2xl">
                                <Image
                                    src="/cultural.jpg"
                                    alt="Cultural and co-curricular activities"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:col-span-5">
                        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                            Student Life at Pink Flower School
                        </h2>

                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            School life goes beyond classrooms. We provide a balanced environment
                            where students grow academically, socially, and emotionally in a safe
                            and disciplined campus.
                        </p>

                        <ul className="mt-6 list-disc space-y-3 pl-5 text-sm text-muted-foreground marker:text-primary marker:font-semibold">

                            <li>Structured daily routines and discipline</li>
                            <li>Sports, physical education, and outdoor activities</li>
                            <li>Cultural events, celebrations, and competitions</li>
                            <li>Emphasis on confidence, communication, and teamwork</li>
                        </ul>


                        <p className="mt-6 text-sm text-muted-foreground">
                            All activities are guided by trained faculty with focus on safety,
                            participation, and overall development.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
