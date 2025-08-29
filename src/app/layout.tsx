import type { Metadata } from "next";
import { Inter, Public_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rosa Van Kuyk | Recruitment & Employer Brand Leader | Seek Star Award Nominee",
  description: "Transforming candidate journeys and building employer brands that change how people see workplaces. Seek Star Award nominee driving 93 NPS, 45% cost reduction, and 4.4★ Glassdoor ratings.",
  keywords: ["recruitment", "employer brand", "candidate experience", "talent acquisition", "glassdoor", "seek star award", "advocacy programs", "australia", "melbourne"],
  authors: [{ name: "Rosa Van Kuyk" }],
  metadataBase: new URL('https://rvk.alignedapp.com'),
  openGraph: {
    title: "Rosa Van Kuyk | Recruitment & Employer Brand Leader",
    description: "Transforming candidate journeys and building employer brands that change how people see workplaces. Seek Star Award nominee.",
    type: "website",
    locale: "en_AU",
    siteName: "Rosa Van Kuyk Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rosa Van Kuyk | Recruitment & Employer Brand Leader",
    description: "Transforming candidate journeys and building employer brands that change how people see workplaces.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code", // Add actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${publicSans.variable}`}>
      <body className="font-body antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
