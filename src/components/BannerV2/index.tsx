import Image from "next/image";
import { kaiseiTokumin } from "../Banner/Banner";
import FloatingIcons from "../FloatingIcons";
import MotionWrapper from "../AnimateComponent";
import SocialLinks from "../Banner/SocialLinks";
import Link from "next/link";

export default function Hero() {
    return (
        <div
            className={`flex relative overflow-hidden w-full place-content-center flex-col items-center justify-center min-h-[calc(100vh-64px)] text-gray-100 px-2 py-8 gap-4 ${kaiseiTokumin.variable}`}
        >
            <FloatingIcons />
            <div className="w-full mx-auto px-6 grid md:grid-cols-2 gap-12 place-content-center">
                <div className="relative w-full max-w-sm mx-auto">
                    <div className="absolute inset-0 bg-red-900 rounded-2xl translate-x-4 translate-y-4" />
                    <div className="absolute inset-0 border-2 border-white rounded-2xl -translate-x-2 -translate-y-2" />
                    <Image
                        src="/profile-2.png"
                        alt="Abhishek Mahato"
                        className="relative z-10 rounded-2xl object-cover"
                        height={600}
                        width={600}
                    />
                </div>
                <div className="space-y-4 px-[-10px]">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        <span className="text-xl">Hello World, I’m </span><br /><span className="text-red-700">Abhishek Mahato</span>
                    </h1>
                    <MotionWrapper
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-gray-400 mt-4 text-lg md:text-xl max-w-2xl"
                    >
                        Not just pushing pixels – pushing clean code, passion, and purpose into every project.
                    </MotionWrapper>
                    <div className="flex gap-4 mt-4">
                        <SocialLinks />
                    </div>
                    <div className="flex gap-4 pt-4">
                        <Link href="/Abhishek-Mahato-resume.pdf" target="_blank" className="px-6 py-3 bg-red-900 rounded-lg hover:bg-red-700 transition">
                            View Projects
                        </Link>
                        <Link href="/Abhishek-Mahato-resume.pdf" target="_blank" download className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
                            Download Resume
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
