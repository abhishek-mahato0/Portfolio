"use client";

import Header from "../Header";
import { sendContactForm } from "./actions";
import { useActionState, useRef, useTransition } from "react";
import ContactInfo from "./ContactInfo";
import { motion, useInView } from "motion/react";

const initialState = {
  message: "",
  ok: false,
};

export default function ContactPage() {
  const [state, formAction] = useActionState(sendContactForm, initialState);
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (formData: FormData) => {
    startTransition(() => {
      formAction(formData);
    });
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
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          ref={ref}
          className="w-full flex items-center justify-end"
        >
          <form
            action={handleSubmit}
            className="border-1 border-gray-900 text-white p-8 rounded-lg shadow-lg w-full lg:w-[95%] space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
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
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
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
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
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
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
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
              className={`w-full font-semibold py-2 rounded transition ${
                isPending
                  ? "bg-gray-600 text-white cursor-not-allowed"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {isPending ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
