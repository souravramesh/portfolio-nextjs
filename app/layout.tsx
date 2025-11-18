import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head"; // ← for JSON-LD

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sourav Ramesh | Mobile App Developer",
  description:
    "A minimalist portfolio showcasing my React Native apps and development projects.",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://souravramesh.com"),
  openGraph: {
    title: "Sourav Ramesh | Mobile App Developer",
    description:
      "Explore my portfolio featuring React Native apps and development projects.",
    url: "https://souravramesh.com",
    siteName: "Sourav Ramesh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://souravramesh.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* -------- JSON-LD Person Schema -------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sourav Ramesh",
              url: "https://souravramesh.com",
              jobTitle: "Mobile App Developer",
              sameAs: [
                "https://github.com/souravramesh",
                "https://www.linkedin.com/in/sourav-ramesh",
              ],
            }),
          }}
        />
      </Head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
