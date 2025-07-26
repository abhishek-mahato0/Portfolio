import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-knewave",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Abhishek Mahato | MERN Stack Developer | Building Scalable Web Apps in Nepal",
  description:
    "Abhishek Mahato is a Fullstack Web Developer from Kathmandu, Nepal, specializing in the MERN Stack, React, and scalable web applications. Explore his projects, resume, and portfolio showcasing innovative development work.",
  applicationName: "Abhishek Mahato Portfolio",
  themeColor: "#000000",
  authors: [{ name: "Abhishek Mahato" }],
  keywords: [
    "Abhishek Mahato",
    "Abishek Mahato",
    "abisekh mahato",
    "Abhishek Mahato",
    "Abishek Mahato",
    "Abisekh Mahato",
    "Abhisekh Mahato",
    "Abhishekh Mahato",
    "Abhishek Mahatoo",
    "Abhisek Mahato",
    "Abhishek Mahatto",
    "Abhishek Mahto",
    "Abhisheik Mahato",
    "Abhishek Mahoto",
    "Abhisek Mahto",
    "abhishek mahato",
    "ABHISHEK MAHATO",
    "Abhishek mahato",
    "abIsHeK mAhAtO",
    "abhishekmahato",
    "abisekhmahto",
    "engineer Abhishek Mahato",
    "software engineer Abhishek Mahato",
    "fullstack developer Abhishek Mahato",
    "fullstack developer",
    "fullstack web developer",
    "fullstack web developer Abhishek Mahato",
    "nepal abhishek mahato",
    "nepal abishek mahato",
    "nepal abisekh mahato",
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
      <head>
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Abhishek Mahato",
  "jobTitle": "Fullstack Web Developer",
  "url": "https://www.abhishek-mahato.com.np",
  "image": "https://www.abhishek-mahato.com.np/profile-2.png",
  "sameAs": [
    "https://www.linkedin.com/in/abhishek-mahato-012272239",
    "https://github.com/abhishek-mahato0"
  ],
  "description": "Fullstack developer from Nepal specializing in MERN stack, React, and scalable web applications.",
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Islington College",
    "sameAs": "https://islington.edu.np"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Innovate Tech",
    "sameAs": "https://innovate.com.np"
  },
  "knowsAbout": ["React", "Next.js", "MongoDB", "Node.js", "Software Engineering"],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Fullstack Web Developer",
    "description": "Builds and maintains web applications using MERN stack.",
    "skills": ["React", "Next.js", "MongoDB", "Node.js", "JavaScript", "TypeScript"]
  }
}
`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
