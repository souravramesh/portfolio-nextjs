import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sourav Ramesh | Mobile App Developer",
  description:
    "A minimalist portfolio showcasing my React Native apps and development projects.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
