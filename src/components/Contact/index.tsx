"use client";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import ContactInfo from "./ContactInfo";

function Spinner() {
  return (
    <svg
      className="animate-spin text-blue-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={25}
      height={25}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="#000000"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="#000000"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}

export default function ContactPage() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isPending, setIsPending] = useState(false);
  const [state, setState] = useState<{ ok: boolean; message: string }>({
    ok: false,
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    setState({ ok: false, message: "" });

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(`https://formspree.io/f/mdkzqlvl`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setState({ ok: true, message: "Message sent successfully!" });
        formRef.current?.reset();
      } else {
        setState({
          ok: false,
          message:
            result?.errors?.[0]?.message ||
            "Something went wrong. Please try again.",
        });
      }
    } catch {
      setState({
        ok: false,
        message: "Network error. Please try again later.",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div
      className="w-full flex flex-col gap-4 relative pt-20 mt-40 lg:px-0 px-2"
      id="contact"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
      <Header title="Get In Touch" />
      <p className="text-center text-gray-400 w-full lg:w-[70%] mx-auto text-base md:text-lg">
        I&apos;m always open to discussing new opportunities and interesting
        projects. Let&apos;s connect and create something amazing together!
      </p>

      <div className="grid gap-12 lg:grid-cols-2 grid-cols-1 mt-12 w-full">
        <ContactInfo />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full flex items-center justify-end"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="border-1 border-gray-900 text-white p-8 rounded-lg shadow-lg w-full lg:w-[95%] space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Subject *
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>

            {state.message && (
              <p
                className={`text-sm text-center ${
                  state.ok ? "text-green-400" : "text-red-400"
                }`}
              >
                {state.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className={`w-full flex items-center bg-white justify-center gap-2 font-semibold py-2 rounded transition cursor-pointer ${
                isPending
                  ? "text-black cursor-not-allowed"
                  : "text-black hover:bg-gray-200"
              }`}
            >
              {isPending && <Spinner />} Send
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
