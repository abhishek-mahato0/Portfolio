import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Abhishek Mahato",
  description:
    "Portfolio of Abhishek Mahato a FullStack WebDeveloper from Nepal. Is skilled in React, NextJs, TailwindCSS, NodeJs, ExpressJs, MongoDB, and other web technologies. Islington College Graduate.",
  keywords:
    "Abhishek Mahato, abhishek-mahato, abishek mahato, abishekh mahato, FullStack Developer, Web Developer, React Developer, NextJs Developer, TailwindCSS Developer, NodeJs Developer, ExpressJs Developer, MongoDB Developer, Web Technologies, Islington College Graduate, innovate, naxa, Nepal, Kathmandu",
  authors: [{ name: "Abhishek Mahato" }],
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
