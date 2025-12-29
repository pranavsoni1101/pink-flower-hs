import type { Metadata } from "next";
import { Inter, Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Header } from "@/components/navigation/header";
import AdmissionsCtaGate from "@/components/cta/admissions-cta-gate";
import { Footer } from "@/components/navigation/footer";
// import { ThemeToggle } from "@/components/theme"; // move into Header ideally

const fontBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const fontHeading = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pink Flower School",
  description: "Demo site for Pink Flower School",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontBody.variable} ${fontHeading.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <AdmissionsCtaGate />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
