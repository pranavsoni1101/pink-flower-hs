"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Footer({ className }: { className?: string }) {
    return (
        <footer
            className={cn(
                "border-t border-border/60 bg-background",
                className
            )}
        >
            <div className="mx-auto max-w-6xl px-4 py-12">
                {/* Top */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* School info */}
                    <div>
                        <div className="text-lg font-semibold">
                            Pink Flower Valley School
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                            A trusted MP Board school focused on strong academics,
                            disciplined learning, and holistic student development.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <div className="text-sm font-semibold">Contact</div>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="mailto:info@pinkflowervalley.edu"
                                    className="hover:text-foreground transition-colors"
                                >
                                    info@pinkflowervalley.edu
                                </a>
                            </li>
                            <li>+91 00000 00000</li>
                            <li>Indore, Madhya Pradesh</li>
                        </ul>
                    </div>

                    {/* Quick links */}
                    <div>
                        <div className="text-sm font-semibold">Quick Links</div>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/" className="hover:text-foreground transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-foreground transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/admissions" className="hover:text-foreground transition-colors">
                                    Admissions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* School hours */}
                    <div>
                        <div className="text-sm font-semibold">School Hours</div>
                        <p className="mt-3 text-sm text-muted-foreground">
                            Monday – Saturday
                            <br />
                            8:00 AM – 2:00 PM
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-border/60" />

                {/* Bottom */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Pink Flower Valley School. All rights reserved.
                    </p>

                    <p className="text-xs text-muted-foreground">
                        Designed & developed by{" "}
                        <a
                            href="https://srizen.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-foreground hover:underline"
                        >
                            Srizen
                        </a>.
                    </p>

                </div>
            </div>
        </footer>
    );
}
