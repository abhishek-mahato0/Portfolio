import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-knewave",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peter Mahato – Fullstack Web Developer",
  description:
    "Portfolio of Peter Mahato, a Fullstack Developer from Nepal specializing in MERN Stack, React, and Next.js. Explore projects and experiences.",
  authors: [{ name: "Peter Mahato" }],
  keywords: [
    "Peter Mahato",
    "Fullstack Developer",
    "Web Developer Nepal",
    "Next.js Developer",
    "React Developer",
    "MERN Stack",
    "Portfolio",
  ],
  creator: "Peter Mahato",
  openGraph: {
    title: "Peter Mahato – Fullstack Web Developer",
    description:
      "Explore the professional portfolio of Peter Mahato. Discover cutting-edge projects built with React, Node.js, and MongoDB.",
    url: "https://www.abhishek-mahato.com.np",
    siteName: "Peter Mahato Portfolio",
    images: [
      {
        url: "https://www.abhishek-mahato.com.np/og-image.png", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Peter Mahato Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Mahato – Fullstack Web Developer",
    description:
      "Check out the portfolio of Peter Mahato, showcasing modern web apps and development skills.",
    creator: "@yourTwitterHandle", // Add if you have Twitter
    images: ["https://www.abhishek-mahato.com.np/og-image.png"], // Update image
  },
  metadataBase: new URL("https://www.abhishek-mahato.com.np"),
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
