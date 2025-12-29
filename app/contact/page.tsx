"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
    return (
        <main className="bg-background">
            <div className="mx-auto max-w-6xl px-4 py-16">
                {/* Header */}
                <div className="max-w-2xl">
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Contact Us
                    </h1>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        We welcome parents to get in touch for admissions enquiries,
                        campus visits, or any general questions about the school.
                    </p>
                </div>

                {/* Content */}
                <div className="mt-12 grid gap-12 lg:grid-cols-12">
                    {/* Left: Image */}
                    <div className="lg:col-span-6">
                        <div className="relative h-[320px] overflow-hidden rounded-3xl bg-muted/40">
                            <Image
                                src="/campus.webp"
                                alt="Pink Flower School campus"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <p className="p-2 mt-4 text-sm text-muted-foreground border-l-4 border-primary/60 ">
                            School campus – Indore, Madhya Pradesh
                        </p>
                        <div className="mt-6 rounded-2xl bg-card p-5 ring-1 ring-border/70">
                            <div className="text-sm font-semibold">
                                Visit the School
                            </div>

                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                Parents are welcome to visit the campus during school hours to
                                understand our environment, teaching approach, and facilities.
                            </p>

                            <p className="mt-3 text-sm text-muted-foreground">
                                <span className="font-medium text-foreground">Visiting Hours:</span>{" "}
                                Monday – Saturday, 9:00 AM – 1:00 PM
                            </p>
                        </div>

                    </div>

                    {/* Right: Contact info + form */}
                    <div className="lg:col-span-6">
                        <div className="space-y-8">
                            {/* Contact details */}
                            <div className="rounded-2xl bg-card p-6 ring-1 ring-border/70">
                                <div className="text-sm font-semibold">School Office</div>

                                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                                    <p>
                                        Email:{" "}
                                        <a
                                            href="mailto:info@pinkflower.edu"
                                            className="hover:text-foreground transition-colors"
                                        >
                                            info@pinkflower.edu
                                        </a>
                                    </p>
                                    <p>Phone: +91 00000 00000</p>
                                    <p>Location: Indore, Madhya Pradesh</p>
                                    <p className="pt-2">
                                        School Hours: Monday – Saturday, 8:00 AM – 2:00 PM
                                    </p>
                                </div>
                            </div>

                            {/* Simple contact form */}
                            <form className="space-y-5 rounded-2xl bg-card p-6 ring-1 ring-border/70">
                                <div className="text-sm font-semibold">
                                    Send us a message
                                </div>

                                <Input
                                    placeholder="Parent / Guardian Name"
                                    className="h-11"
                                />

                                <Input
                                    placeholder="Phone Number"
                                    className="h-11"
                                />

                                <Input
                                    placeholder="Email (optional)"
                                    className="h-11"
                                />

                                <Textarea
                                    placeholder="Your message"
                                    className="min-h-[120px]"
                                />

                                <Button
                                    type="submit"
                                    className="h-11 bg-primary text-primary-foreground hover:bg-primary/90"
                                >
                                    Submit Enquiry
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
