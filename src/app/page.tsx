import Banner from "@/components/Banner/Banner";
import ContactPage from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-r from-black to-gray-900 mx-auto bg-black pb-10">
      <Navbar />
      <div className="lg:max-w-[1300px] w-[100vw] mx-auto">
        <Banner />
        <Experience />
        <Projects />
        <ContactPage />
        <Footer />
      </div>
    </div>
  );
}
