import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abhishek Mahato – Fullstack Web Developer",
  description:
    "Portfolio of Abhishek Mahato, a passionate Fullstack Developer specializing in MERN, Next.js, TypeScript, and modern web technologies.",
  authors: [{ name: "Abhishek Mahato" }],
  keywords: [
    "Abhishek Mahato",
    "Fullstack Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "MERN Stack",
    "Web Developer in Nepal",
  ],
  creator: "Abhishek Mahato",
  openGraph: {
    title: "Abhishek Mahato – Fullstack Web Developer",
    description:
      "Explore the portfolio of Abhishek Mahato, showcasing modern web development projects built with React, Next.js, MongoDB, and more.",
    url: "https://yourdomain.com", // replace with actual domain
    siteName: "Abhishek Mahato Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.png", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "Abhishek Mahato Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Mahato – Fullstack Web Developer",
    description:
      "Explore projects and skills of Abhishek Mahato, a skilled fullstack developer from Nepal.",
    creator: "@yourTwitterHandle", // optional
    images: ["https://yourdomain.com/og-image.png"],
  },
  metadataBase: new URL("https://yourdomain.com"), // replace with real domain
};
