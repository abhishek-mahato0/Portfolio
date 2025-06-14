import Banner from "@/components/Banner/Banner";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="w-[100vw] bg-gradient-to-r from-black to-gray-900 mx-auto bg-black pb-10">
      <Navbar />
      <div className="max-w-[1300px] mx-auto">
        <Banner />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}
