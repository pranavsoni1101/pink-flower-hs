"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type HeroProps = {
    className?: string;
    schoolName?: string;
};

export default function Hero({
    className,
    schoolName = "Pink Flower Valley School",
}: HeroProps) {
    return (
        <section
            className={cn(
                "relative overflow-hidden border-b border-border/60 bg-background",
                className
            )}
        >
            {/* Background */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(0,0,0,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.6)_1px,transparent_1px)] [background-size:42px_42px] dark:opacity-[0.08]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-18 lg:py-22">
                <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
                    {/* Left: Copy */}
                    <div className="lg:col-span-7">
                        <Badge
                            variant="secondary"
                            className="rounded-full bg-muted text-muted-foreground hover:bg-muted"
                        >
                            Honoured by the President of India • 2013
                        </Badge>

                        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                            Shaping Confident Learners for a Stronger Tomorrow
                            <span className="mt-2 block text-base font-medium text-muted-foreground sm:text-lg">
                                A leading MP Board school in Indore, recognised for academic excellence and award-winning leadership.
                            </span>
                        </h1>

                        {/* CTAs */}
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Button
                                asChild
                                className="h-11 px-5 bg-primary text-primary-foreground hover:bg-primary/90"
                            >
                                <Link href="/contact">
                                    Admissions Enquiry
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="h-11 px-5 border-border/70 bg-background hover:bg-muted"
                            >
                                <Link href="/contact">
                                    <PhoneCall className="mr-2 h-4 w-4" />
                                    Book a Visit
                                </Link>
                            </Button>
                        </div>

                        <div className="mt-5 text-sm text-muted-foreground">
                            Mon–Sat: 8:00 AM – 2:00 PM
                            <span className="mx-2 text-border">|</span>
                            <a
                                className="hover:text-foreground transition-colors"
                                href="mailto:info@pinkflowervalley.edu"
                            >
                                info@pinkflowervalley.edu
                            </a>
                        </div>
                    </div>

                    {/* Right: Visual card (kept minimal) */}
                    {/* // Replace only the entire RIGHT column content inside:  */}

                    <div className="lg:col-span-5">
                        <div className="relative overflow-hidden rounded-3xl bg-card ring-1 ring-border/70">
                            <div className="p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <div className="text-sm font-semibold text-foreground">
                                            Admissions Enquiry
                                        </div>
                                        <div className="mt-1 text-sm text-muted-foreground">
                                            Request a call back or book a campus visit.
                                        </div>
                                    </div>

                                    <Badge className="rounded-full bg-primary/15 text-foreground hover:bg-primary/15">
                                        2026–27
                                    </Badge>
                                </div>

                                <div className="mt-5 grid gap-3">
                                    <div className="grid gap-2">
                                        <label className="text-xs font-medium text-muted-foreground">
                                            Parent / Guardian Name
                                        </label>
                                        <input
                                            className="h-11 w-full rounded-xl bg-background/60 px-3 text-sm text-foreground ring-1 ring-border/60 outline-none transition focus-visible:ring-2 focus-visible:ring-ring/50"
                                            placeholder="Full name"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <label className="text-xs font-medium text-muted-foreground">
                                            Phone
                                        </label>
                                        <input
                                            className="h-11 w-full rounded-xl bg-background/60 px-3 text-sm text-foreground ring-1 ring-border/60 outline-none transition focus-visible:ring-2 focus-visible:ring-ring/50"
                                            placeholder="+91 XXXXX XXXXX"
                                            inputMode="tel"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <label className="text-xs font-medium text-muted-foreground">
                                            Applying for Grade
                                        </label>
                                        <select className="h-11 w-full rounded-xl bg-background/60 px-3 text-sm text-foreground ring-1 ring-border/60 outline-none transition focus-visible:ring-2 focus-visible:ring-ring/50">
                                            <option value="">Select grade</option>
                                            <option>Pre-Primary</option>
                                            <option>Class 1</option>
                                            <option>Class 2</option>
                                            <option>Class 3</option>
                                            <option>Class 4</option>
                                            <option>Class 5</option>
                                            <option>Class 6</option>
                                            <option>Class 7</option>
                                            <option>Class 8</option>
                                            <option>Class 9</option>
                                            <option>Class 10</option>
                                            <option>Class 11</option>
                                            <option>Class 12</option>
                                        </select>
                                    </div>

                                    <div className="grid gap-2">
                                        <label className="text-xs font-medium text-muted-foreground">
                                            Preferred Call Time (optional)
                                        </label>
                                        <select className="h-11 w-full rounded-xl bg-background/60 px-3 text-sm text-foreground ring-1 ring-border/60 outline-none transition focus-visible:ring-2 focus-visible:ring-ring/50">
                                            <option value="">Choose a time slot</option>
                                            <option>9:00 AM – 11:00 AM</option>
                                            <option>11:00 AM – 1:00 PM</option>
                                            <option>1:00 PM – 3:00 PM</option>
                                            <option>3:00 PM – 5:00 PM</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mt-5 flex gap-3">
                                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                        Request Call Back
                                    </Button>
                                    <Button variant="outline" className="w-full hover:bg-muted">
                                        <Link href="/contact">Contact</Link>
                                    </Button>
                                </div>

                                <div className="mt-4 text-xs text-muted-foreground">
                                    School hours: Mon–Sat, 8:00 AM – 2:00 PM
                                </div>
                            </div>

                            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-primary/50" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
