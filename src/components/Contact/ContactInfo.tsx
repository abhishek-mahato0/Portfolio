"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneOutgoing } from "react-icons/fi";

export const contact = {
  email: "abhishek.mahato98258@gmail.com",
  phone: "9825878517",
  address: "Kathmandu, Nepal",
  website: "https://www.abhishek-mahato.com.np/",
  linkedin: "https://www.linkedin.com/in/abhishek-mahato-012272239/",
  github: "https://github.com/abhishek-mahato0",
};

export default function ContactInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: <MdOutlineEmail />,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: <FiPhoneOutgoing />,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    {
      icon: <IoLocationOutline />,
      label: "Location",
      value: contact.address,
      href: "#",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-8"
      ref={ref}
    >
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">
          Let&apos;s start a conversation
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Whether you have a project in mind, want to collaborate, or just want
          to say hello, I&apos;d love to hear from you. Feel free to reach out
          through any of the channels below.
        </p>
      </div>

      <div className="space-y-4">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
          >
            <div className="hover:shadow-lg transition-shadow duration-300 border-1 border-gray-900 rounded-xl">
              <div className="px-4 py-6">
                <a
                  href={info.href}
                  className="flex items-center space-x-4 group"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {info.label}
                    </p>
                    <p className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl"
      >
        <h4 className="font-bold text-slate-900 dark:text-white mb-2">
          Quick Response Guaranteed
        </h4>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          I typically respond to messages within 24 hours. Looking forward to
          hearing from you!
        </p>
      </motion.div>
    </motion.div>
  );
}
