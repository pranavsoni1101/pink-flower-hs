"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

type TestimonialItem = {
    name: string;
    role: string;
    avatar?: string;
    content: string;
};

const TESTIMONIALS: TestimonialItem[] = [
    {
        name: "Mr. Rajesh Verma",
        role: "Parent of Class 6 student",
        content:
            "We have seen a noticeable improvement in our child’s confidence and academic focus. The teachers are supportive and disciplined.",
    },
    {
        name: "Mrs. Anjali Sharma",
        role: "Parent of Class 3 student",
        content:
            "The school maintains a good balance between studies and activities. We feel confident about our child’s overall development.",
    },
    {
        name: "Mr. Suresh Patel",
        role: "Parent of Class 9 student",
        content:
            "Strong academic focus along with a safe and caring environment. The leadership and teachers are approachable and consistent.",
    },
    {
        name: "Mrs. Neha Gupta",
        role: "Parent of Class 10 student",
        content:
            "The focused preparation and regular assessments have helped our child stay confident during board exams. Teachers are always available for guidance.",
    },
    {
        name: "Mr. Amit Jain",
        role: "Parent of Class 12 student",
        content:
            "The school’s disciplined academic structure and personalised attention played an important role in our child’s board exam preparation.",
    },
];


export default function Testimonials() {
    return (
        <section className="border-b border-border/60 bg-background py-16">
            <Carousel
                className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2"
                opts={{ align: "start" }}
            >
                {/* Left content */}
                <div className="space-y-6">
                    <Badge
                        variant="secondary"
                        className="w-fit rounded-full bg-muted text-muted-foreground"
                    >
                        Parent Testimonials
                    </Badge>

                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        What Parents Say
                    </h2>

                    <p className="max-w-md text-muted-foreground leading-relaxed">
                        Honest feedback from parents who have trusted us with their child’s
                        education and growth.
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                        <CarouselPrevious
                            variant="outline"
                            className="static size-9 translate-y-0"
                        />
                        <CarouselNext
                            variant="outline"
                            className="static size-9 translate-y-0"
                        />
                    </div>
                </div>

                {/* Right carousel */}
                <div className="relative">
                    <CarouselContent className="-ml-4">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-4">
                                <figure className="rounded-3xl bg-card p-6 ring-1 ring-border/70">
                                    {/* Quote */}
                                    <blockquote>
                                        <p className="text-base leading-relaxed text-foreground">
                                            “{testimonial.content}”
                                        </p>
                                        <span
                                            aria-hidden
                                            className="mt-4 block h-px w-12 bg-primary/60"
                                        />
                                    </blockquote>

                                    {/* Author */}
                                    <figcaption className="mt-6 flex items-center gap-3">
                                        <Avatar className="size-11">
                                            {testimonial.avatar ? (
                                                <AvatarImage
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                />
                                            ) : null}
                                            <AvatarFallback className="text-sm">
                                                {testimonial.name
                                                    .split(" ", 2)
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <div className="text-sm font-medium text-foreground">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                {testimonial.role}
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </div>
            </Carousel>
        </section>
    );
}
