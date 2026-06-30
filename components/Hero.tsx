"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-[#0b0f17]">

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,15,23,0)_0%,rgba(11,15,23,1)_75%)]" />

        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full 
        bg-gradient-radial from-indigo-500/20 via-blue-500/10 to-transparent blur-[120px]" />

        <div className="absolute right-[-200px] top-[20%] h-[500px] w-[500px] rounded-full 
        bg-purple-500/10 blur-[140px]" />

        <div className="absolute bottom-[-250px] left-1/2 h-[700px] w-[700px] -translate-x-1/2 
        bg-blue-500/10 blur-[160px]" />

      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl z-10"
      >

        <div className="flex justify-center mb-6">
<img
  src="/profile.jpg"
  alt="profile"
  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl border border-white/10 shadow-lg"
/>
        </div>

        <h1 className="text-5xl font-bold text-white tracking-tight">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
             Fatemeh Nazari
          </span>
        </h1>

        <p className="mt-6 text-gray-400 leading-8 text-lg">
         Backend Developer specializing in Django, with experience in Laravel and modern web technologies.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-indigo-500 text-white 
            hover:bg-indigo-600 transition hover:scale-[1.03]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-gray-700 text-gray-300 
            hover:bg-white/5 transition hover:scale-[1.03]"
          >
            Contact
          </a>

        </div>

      </motion.div>

    </section>
  );
}