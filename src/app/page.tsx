import NavBar from "@/components/NavBar";
import TechCard from "@/components/TechCard";

export default function Home() {
  return (
    <div className=" w-full h-screen">
      <NavBar />
      <div className=" w-full flex h-[calc(100%-96px)] flex-col items-start justify-center md:pl-10 px-3 gap-3">
        <h1 className="md:text-6xl text-4xl tracking-wider">Abhishek Mahato</h1>
        <p className=" text-orange-600 text-xl">FullStack WebDeveloper</p>
        <TechCard />
      </div>
    </div>
  );
}
