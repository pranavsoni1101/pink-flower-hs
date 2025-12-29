"use client";

import { usePathname } from "next/navigation";
import AdmissionsCTA from "@/components/cta/admissions-cta";

export default function AdmissionsCtaGate() {
    const pathname = usePathname();

    // hide on contact routes
    const hide =
        pathname === "/contact" ||
        pathname.startsWith("/contact/");

    if (hide) return null;

    return <AdmissionsCTA />;
}
