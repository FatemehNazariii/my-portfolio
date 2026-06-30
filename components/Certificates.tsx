"use client";

import { useState } from "react";
import {
  Award,
  Eye,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const certificates = [
  {
    title: "CS50x Iran Certificate",
    year: "2025",
    description:
      "Participation in CS50x Iran’s Winter course 2025 as a member of science and TA’s team.",
    image: "/certificates/cs50xiran.png",
  },
  {
    title: "CS50 – Introduction to Programming",
    year: "2024",
    description:
      "Completed CS50’s Introduction to Programming with Python, including problem sets and final project.",
    image: "/certificates/CS50P.png",
  },
  {
    title: "CS50x Puzzle Day 2025",
    year: "2025",
    description: "Solved 9 out of 9 puzzles in CS50x Puzzle Day 2025.",
    image: "/certificates/puzzle-day.png",
  },
];

export default function Certificates() {
  const [selected, setSelected] = useState<number | null>(null);

  const next = () => {
    if (selected === null) return;
    setSelected((selected + 1) % certificates.length);
  };

  const prev = () => {
    if (selected === null) return;
    setSelected((selected - 1 + certificates.length) % certificates.length);
  };

  return (
    <section id="certificates" className="max-w-6xl mx-auto px-6 py-28">
      <div className="text-center mb-14">
        <p className="text-indigo-400 text-sm font-semibold tracking-wider uppercase mb-3">
          Achievements
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Certificates
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-7">
          Some of my certificates and achievements from my learning journey.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={cert.title}
            className="group flex flex-col min-h-[430px] overflow-hidden rounded-3xl
            border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03]
            hover:border-indigo-400/40 hover:-translate-y-1
            hover:shadow-[0_20px_60px_-25px_rgba(99,102,241,0.5)]
            transition-all duration-300"
          >
            <div className="p-3">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-44 object-cover rounded-2xl border border-white/10"
              />
            </div>

            <div className="flex flex-col flex-1 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-indigo-300 shrink-0" />
                <h3 className="text-white font-semibold leading-snug">
                  {cert.title}
                </h3>
              </div>

              <p className="text-gray-500 text-sm leading-6">
                {cert.description}
              </p>

              <div className="mt-auto pt-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  {cert.year}
                </div>

                <button
                  onClick={() => setSelected(index)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                  border border-white/10 bg-indigo-500/10 text-indigo-300
                  hover:bg-indigo-500/20 hover:text-white transition text-sm"
                >
                  <Eye className="w-4 h-4" />
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected !== null && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center px-6">
          <div className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-[#0b0f17] p-6">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white transition"
            >
              <X className="w-6 h-6" />
            </button>

            <p className="text-gray-400 text-sm mb-4">
              {selected + 1} / {certificates.length}
            </p>

            <img
              src={certificates[selected].image}
              alt={certificates[selected].title}
              className="w-full max-h-[70vh] object-contain rounded-2xl"
            />

            <button
              onClick={prev}
              className="absolute left-5 top-1/2 -translate-y-1/2
              w-10 h-10 rounded-full border border-white/10 bg-white/5
              flex items-center justify-center text-white hover:bg-white/10 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={next}
              className="absolute right-5 top-1/2 -translate-y-1/2
              w-10 h-10 rounded-full border border-white/10 bg-white/5
              flex items-center justify-center text-white hover:bg-white/10 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}