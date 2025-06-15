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
  title: "Abhishek Mahato | Fullstack Web Developer in Kathmandu, Nepal",
  description:
    "I'm Abhishek Mahato, a fullstack web developer based in Kathmandu, Nepal, skilled in MERN stack, React, and Next.js. View my projects, resume, and skills.",
  applicationName: "Abhishek Mahato Portfolio",
  themeColor: "#000000",
  authors: [{ name: "Abhishek Mahato" }],
  keywords: [
    "Abhishek Mahato",
    "Fullstack Developer",
    "Web Developer Nepal",
    "Next.js Developer",
    "React Developer",
    "MERN Stack",
    "Portfolio",
    "Kathmandu Developer",
    "Frontend Backend Developer",
    "Associate Software Developer",
    "Software Engineer",
    "Web Development",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "React.js Developer",
    "Next.js Portfolio",
    "Web Applications",
    "Web Design",
    "Web Development Projects",
    "Web Development Portfolio",
    "Fullstack Web Developer",
    "Software Development",
    "Software Development Portfolio",
    "Software Engineer Portfolio",
    "Software Engineer in Nepal",
    "Software Engineer Kathmandu",
    "Software Engineer Portfolio",
    "Software Engineer Projects",
    "Software Engineer Resume",
    "Software Engineer Skills",
    "Innovate Tech",
    "Innovate Tech Portfolio",
    "Innovate Tech Projects",
    "naxa Portfolio",
    "naxa Projects",
    "naxa Software Engineer",
  ],
  creator: "Abhishek Mahato",
  openGraph: {
    title: "Abhishek Mahato – Fullstack Web Developer",
    description:
      "Explore the professional portfolio of Abhishek Mahato. Discover cutting-edge projects built with React, Node.js, and MongoDB.",
    url: "https://www.abhishek-mahato.com.np",
    siteName: "Abhishek Mahato Portfolio",
    images: [
      {
        url: "https://www.abhishek-mahato.com.np/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Mahato Portfolio",
      },
    ],
    type: "website",
  },
  facebook: {
    appId: "abishek.mahato.524",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Mahato – Fullstack Web Developer",
    description:
      "Check out the portfolio of Abhishek Mahato, showcasing modern web apps and development skills.",
    creator: "",
    images: ["https://www.abhishek-mahato.com.np/og-image.png"],
  },
  metadataBase: new URL("https://www.abhishek-mahato.com.np"),
  icons: {
    icon: "/favicon.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
