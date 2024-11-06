import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhishek Mahato - FullStack Web Developer",
  description:
    "Abhishek Mahato is a FullStack Web Developer from Nepal, specializing in React, Next.js, TailwindCSS, Node.js, Express.js, MongoDB, and other modern web technologies. An Islington College Graduate with experience in building scalable web applications.",
  keywords:
    "Abhishek Mahato, FullStack Developer, MERN Developer, React Developer, Next.js Developer, TailwindCSS, Node.js, MongoDB, Express.js, Web Development, Islington College, Nepal, Kathmandu, Portfolio, Web Technologies",
  authors: [{ name: "Abhishek Mahato" }],
  openGraph: {
    title: "Abhishek Mahato - FullStack Web Developer",
    description:
      "Portfolio of Abhishek Mahato, a FullStack Web Developer specializing in modern web technologies like React, Next.js, TailwindCSS, Node.js, and MongoDB.",
    url: "https://www.abhishek-mahato.com.np",
    siteName: "Abhishek Mahato - Portfolio",
    images: [
      {
        url: "https://www.abhishek-mahato.com.np/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Abhishek Mahato - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.abhishek-mahato.com.np",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-black flex flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
}
