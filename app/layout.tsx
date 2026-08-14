import type { Metadata } from "next";
import { Geist, Geist_Mono, Patrick_Hand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hand = Patrick_Hand({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: "400",
});

const desc =
  "Muhammad Hamza Nadeem is an AI-First Full Stack Engineer building production-grade full-stack applications, AI systems, RAG pipelines, and scalable web products.";

export const metadata: Metadata = {
  title: site.name,
  description: desc,
  metadataBase: new URL("https://mhamzanadeem.github.io"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Muhammad Hamza Nadeem",
    "AI-First Full Stack Engineer",
    "Full Stack Engineer",
    "AI Engineer",
    "React",
    "Next.js",
    "FastAPI",
    "LangChain",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    title: site.name,
    description: desc,
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: desc,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `
  (function () {
    try {
      var stored = localStorage.getItem("theme");
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var theme = stored ? stored : (prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", theme === "dark");
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${hand.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent-strong focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-stone-950 dark:focus:bg-accent"
        >
          Skip to content
        </a>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
