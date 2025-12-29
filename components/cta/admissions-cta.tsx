"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AdmissionsCTAProps = {
    className?: string;
};

export default function AdmissionsCTA({ className }: AdmissionsCTAProps) {
    return (
        <section
            className={cn(
                "relative bg-background",
                "border-t border-border/60",
                className
            )}
        >
            {/* subtle brand wash */}
            <div
                aria-hidden
                className="absolute inset-0 bg-primary/5"
            />

            <div className="relative mx-auto max-w-6xl px-4 py-16">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        Admissions Open for the 2026–27 Academic Session
                    </h2>

                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        We invite parents to visit the campus, interact with our faculty,
                        and understand how we support every child’s academic and personal growth.
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            asChild
                            className="h-11 px-6 bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                            <Link href="/contact">
                                Enquire About Admissions
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            className="h-11 px-6 hover:bg-muted"
                        >
                            <Link href="/contact">
                                Book a Campus Visit
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-6 text-sm text-muted-foreground">
                        School Hours: Mon–Sat, 8:00 AM – 2:00 PM
                        <span className="mx-2 text-border">|</span>
                        <a
                            href="mailto:info@pinkflowervalley.edu"
                            className="hover:text-foreground transition-colors"
                        >
                            info@pinkflowervalley.edu
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
