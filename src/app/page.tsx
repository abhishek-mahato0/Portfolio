"use client";

import Banner from "@/components/Banner";
import CompanyProjects from "@/components/CompanyProjects";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";
import PersonalProjectsV2 from "@/components/PersonalProjectsV2";
import TechStack from "@/components/TechStack";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`${inter.className} w-full overflow-x-hidden flex flex-col gap-0 px-10 items-center justify-center max-w-7xl`}
    >
      <NavBar />
      <Banner />
      <PersonalProjectsV2 />
      <CompanyProjects />
      <Experience />
      <TechStack />
      <Education />
      <Footer />
    </div>
  );
}
