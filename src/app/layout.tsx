import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StudyAbroad+ | Your Gateway to Global Education",
  description: "Discover consultancies, universities, and courses tailored to your global academic aspirations. Find the perfect study abroad program with expert guidance.",
  keywords: "study abroad, international education, universities, courses, consultancies, scholarships, student visa, global education",
  authors: [{ name: "StudyAbroad+ Team" }],
  creator: "StudyAbroad+",
  publisher: "StudyAbroad+",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://studyabroadplus.com",
    title: "StudyAbroad+ | Your Gateway to Global Education",
    description: "Discover consultancies, universities, and courses tailored to your global academic aspirations.",
    siteName: "StudyAbroad+",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "StudyAbroad+ - Your Gateway to Global Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StudyAbroad+ | Your Gateway to Global Education",
    description: "Discover consultancies, universities, and courses tailored to your global academic aspirations.",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
