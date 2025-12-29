"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { ThemeToggle } from "@/components/theme/theme-toggle";

const NAV = {
    about: [
        {
            title: "About the School",
            href: "/#about",
            description: "Our story, values, and approach to learning.",
        },
        {
            title: "Principal’s Message",
            href: "/#principal",
            description: "A note from the leadership team.",
        },
        {
            title: "Infrastructure",
            href: "/#infrastructure",
            description: "Campus, classrooms, labs, and facilities.",
        },
    ],
    academics: [
        {
            title: "Curriculum",
            href: "/#curriculum",
            description: "Structured learning for every grade.",
        },
        {
            title: "Co-curricular",
            href: "/#cocurricular",
            description: "Sports, arts, clubs, and competitions.",
        },
        {
            title: "Achievements",
            href: "/#achievements",
            description: "Highlights, awards, and milestones.",
        },
    ],
    admissions: [
        {
            title: "Admissions Overview",
            href: "/#admissions",
            description: "Eligibility, process, and important dates.",
        },
        {
            title: "Book a Visit",
            href: "/contact",
            description: "Schedule a campus tour or call back.",
        },
        {
            title: "Enquiry Form",
            href: "/contact",
            description: "Share details and we’ll reach out.",
        },
    ],
};

function isActive(pathname: string, href: string) {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/"; // anchors on home
    return pathname.startsWith(href);
}

/**
 * Calm, grown-up nav styles:
 * - No button fills
 * - No accent/green hovers
 * - Hover = text emphasis + soft underline
 * - Active = pink underline only
 */
const navItemBase =
    "relative px-1 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm bg-transparent";

const navItemHoverUnderline =
    "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-foreground/35 after:transition-[width] after:duration-200 hover:after:w-full";

const navItemActive =
    "text-foreground after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-primary after:!w-full";


export function Navbar() {
    const pathname = usePathname();
    const [sheetOpen, setSheetOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            {/* Top strip: timings + email (above separator) */}
            <div className="hidden md:block">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                        <span>Mon–Sat: 8:00 AM – 2:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link
                            className="hover:text-foreground transition-colors"
                            href="mailto:info@pinkflowervalley.edu"
                        >
                            info@pinkflowervalley.edu
                        </Link>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <Link
                            className="hover:text-foreground transition-colors"
                            href="tel:+910000000000"
                        >
                            +91 00000 00000
                        </Link>
                    </div>
                </div>
                <Separator />
            </div>

            {/* Main row */}
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-card ring-1 ring-border/70">
                        <span className="text-sm font-semibold text-foreground">PFV</span>
                    </div>
                    <div className="leading-tight">
                        <div className="font-semibold tracking-tight">Pink Flower Valley</div>
                        <div className="text-xs text-muted-foreground">School</div>
                    </div>
                </Link>

                {/* Desktop */}
                <div className="hidden lg:flex items-center gap-8">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-8">
                            {/* Home */}
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/"
                                        className={cn(
                                            navItemBase,
                                            navItemHoverUnderline,
                                            isActive(pathname, "/") && navItemActive
                                        )}
                                    >
                                        Home
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* About */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger
                                    className={cn(
                                        navItemBase,
                                        navItemHoverUnderline,
                                        // hard force: never look like a button
                                        "bg-transparent shadow-none border-0 hover:bg-transparent",
                                        // open state underline (pink)
                                        "data-[state=open]:text-foreground data-[state=open]:after:w-full data-[state=open]:after:bg-primary"
                                    )}
                                >
                                    About
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-[420px] p-3">
                                        <div className="mb-2 px-2 text-xs font-semibold tracking-wide text-muted-foreground">
                                            ABOUT
                                        </div>
                                        <ul className="grid gap-2">
                                            {NAV.about.map((item) => (
                                                <DropItem key={item.title} {...item} />
                                            ))}
                                        </ul>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Academics */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger
                                    className={cn(
                                        navItemBase,
                                        navItemHoverUnderline,
                                        "bg-transparent shadow-none border-0 hover:bg-transparent",
                                        "data-[state=open]:text-foreground data-[state=open]:after:w-full data-[state=open]:after:bg-primary"
                                    )}
                                >
                                    Academics
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-[480px] p-3">
                                        <div className="mb-2 px-2 text-xs font-semibold tracking-wide text-muted-foreground">
                                            ACADEMICS
                                        </div>
                                        <ul className="grid gap-2 md:grid-cols-2">
                                            {NAV.academics.map((item) => (
                                                <DropItem key={item.title} {...item} />
                                            ))}
                                        </ul>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Admissions */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger
                                    className={cn(
                                        navItemBase,
                                        navItemHoverUnderline,
                                        "bg-transparent shadow-none border-0 hover:bg-transparent",
                                        "data-[state=open]:text-foreground data-[state=open]:after:w-full data-[state=open]:after:bg-primary"
                                    )}
                                >
                                    Admissions
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-[460px] p-3">
                                        <div className="mb-2 px-2 text-xs font-semibold tracking-wide text-muted-foreground">
                                            ADMISSIONS
                                        </div>
                                        <ul className="grid gap-2">
                                            {NAV.admissions.map((item) => (
                                                <DropItem key={item.title} {...item} />
                                            ))}
                                        </ul>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Contact */}
                            <NavigationMenuItem>
                                <Link
                                    href="/contact"
                                    className={cn(
                                        navItemBase,
                                        navItemHoverUnderline,
                                        isActive(pathname, "/contact") && navItemActive
                                    )}
                                >
                                    Contact
                                </Link>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        {/* CTA: pink only */}
                        <Button
                            asChild
                            className="bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                            <Link href="/contact">Admissions Enquiry</Link>
                        </Button>
                    </div>
                </div>

                {/* Mobile */}
                <div className="flex items-center gap-2 lg:hidden">
                    <ThemeToggle />
                    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" aria-label="Open menu">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-[360px] sm:w-[420px]">
                            <SheetHeader>
                                <SheetTitle className="text-left">Menu</SheetTitle>
                            </SheetHeader>

                            <div className="mt-4 space-y-6">
                                <div className="space-y-2">
                                    <MobileLink href="/" onNavigate={() => setSheetOpen(false)}>
                                        Home
                                    </MobileLink>
                                    <MobileLink
                                        href="/contact"
                                        onNavigate={() => setSheetOpen(false)}
                                    >
                                        Contact
                                    </MobileLink>
                                </div>

                                <Section
                                    title="About"
                                    items={NAV.about}
                                    onNavigate={() => setSheetOpen(false)}
                                />
                                <Section
                                    title="Academics"
                                    items={NAV.academics}
                                    onNavigate={() => setSheetOpen(false)}
                                />
                                <Section
                                    title="Admissions"
                                    items={NAV.admissions}
                                    onNavigate={() => setSheetOpen(false)}
                                />

                                <Button
                                    asChild
                                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                                    onClick={() => setSheetOpen(false)}
                                >
                                    <Link href="/contact">Admissions Enquiry</Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

function DropItem({
    title,
    href,
    description,
}: {
    title: string;
    href: string;
    description: string;
}) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className={cn(
                        "group relative block rounded-xl p-3",
                        // key: no fill, no green, no button feel
                        "transition-colors hover:text-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    )}
                >
                    {/* subtle pink indicator only */}
                    <span className="absolute left-0 top-3 hidden h-4 w-[2px] bg-primary group-hover:block" />
                    <div className="text-sm font-semibold leading-none text-foreground">
                        {title}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {description}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
}

function MobileLink({
    href,
    children,
    onNavigate,
}: {
    href: string;
    children: React.ReactNode;
    onNavigate: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onNavigate}
            className={cn(
                "block rounded-xl px-3 py-2 text-sm font-semibold",
                "text-foreground/90 hover:text-foreground",
                "border border-transparent hover:border-border"
            )}
        >
            {children}
        </Link>
    );
}

function Section({
    title,
    items,
    onNavigate,
}: {
    title: string;
    items: { title: string; href: string }[];
    onNavigate: () => void;
}) {
    return (
        <div>
            <div className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground">
                {title.toUpperCase()}
            </div>
            <div className="space-y-1">
                {items.map((i) => (
                    <Link
                        key={i.title}
                        href={i.href}
                        onClick={onNavigate}
                        className={cn(
                            "block rounded-lg px-3 py-2 text-sm",
                            "text-muted-foreground hover:text-foreground",
                            "border border-transparent hover:border-border"
                        )}
                    >
                        {i.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}
