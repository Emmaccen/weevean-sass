import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import "./globals.css";

const _geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Weevean - Team Chat with AI Assistance | Open Source",
  description:
    "Open-source team chat with AI-powered assistance, code execution, and markdown support. Self-hosted Slack alternative built for modern collaboration.",
  openGraph: {
    title: "Weevean - Team Chat with AI Assistance",
    description:
      "Open-source collaboration with AI-powered context, smart summaries, and code execution.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weevean - Team Chat with AI Assistance",
    description: "Open-source team chat built for modern collaboration.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png", // Placeholder
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png", // Placeholder
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png", // Placeholder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased ${_geist.variable} ${_geistMono.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
