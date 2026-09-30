import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Special Education Needs`,
    template: `%s | ${site.name}`,
  },
  description:
    "Star Flower Centre is a child-friendly school in Mae Sot, Thailand, providing free special education, care and support to migrant children with special educational needs on the Thai–Myanmar border.",
  keywords: ["special education", "charity school", "Mae Sot", "Thailand", "migrant children", "inclusive education", "cerebral palsy", "autism", "donate"],
  openGraph: {
    title: site.fullName,
    description: site.tagline,
    type: "website",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-star-blue focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
