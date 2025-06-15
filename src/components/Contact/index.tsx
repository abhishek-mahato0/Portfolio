"use client";

import { sendContactForm } from "./actions";
import { useActionState, useTransition } from "react";

const initialState = {
  message: "",
  ok: false,
};

export default function ContactPage() {
  const [state, formAction] = useActionState(sendContactForm, initialState);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div
      className="relative flex items-center justify-center w-full px-4 mt-[120px] pt-24 pb-20"
      id="contact"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
      <div className="absolute top-0 left-[30%] transform -translate-x-1 -translate-y-1/3 w-[500px] h-[200px] bg-white rounded-full blur-2xl mix-blend-soft-light pointer-events-none z-0" />
      <form
        action={handleSubmit}
        className="border-1 border-gray-900 text-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Contact Me</h2>

        <input
          name="name"
          type="text"
          required
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-800 border border-gray-700"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="w-full p-3 rounded bg-gray-800 border border-gray-700"
        />
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Your Message"
          className="w-full p-3 rounded bg-gray-800 border border-gray-700"
        />

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
    </div>
  );
}
