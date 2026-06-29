"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";

type Project = {
  title: string;
  desc: string;
  tech: string;
  image: string;
  github: string;
  highlights?: string[];
};

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Imeno - Real-time System",
      desc: "Full-stack system with authentication, role-based access control and real-time messaging.",
      tech: "Django • React • Socket.io • JWT • PostgreSQL",
      image: "/projects/imeno.png",
      github: "https://github.com/FatemehNazariii/insurance-django",
      highlights: [
        "Real-time messaging system",
        "Role-based access control",
        "Scalable backend architecture",
      ],
    },
    {
      title: "Ticketing System",
      desc: "Role-based ticket management system with admin dashboard and workflow handling.",
      tech: "Django • DRF • React • PostgreSQL",
      image: "/projects/ticket.png",
      github: "https://github.com/FatemehNazariii/ticket-system",
      highlights: [
        "Ticket workflow system",
        "Admin dashboard",
        "Authentication & roles",
      ],
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-28">

      {/* HEADER */}
      <Reveal>
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white">
            Selected Projects
          </h2>

          <p className="text-gray-400 mt-3 max-w-2xl">
            Backend-focused systems built with Django and modern web technologies.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((p, i) => (
            <div
              key={i}
              onClick={() => setSelected(p)}
              className="group cursor-pointer rounded-2xl overflow-hidden
              border border-white/10 bg-white/5
              hover:border-indigo-400/40 transition
              hover:-translate-y-2 hover:shadow-[0_25px_60px_-20px_rgba(99,102,241,0.4)]"
            >

              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">

                <img
                  src={p.image}
                  className="w-full h-full object-cover opacity-80
                  group-hover:opacity-100 group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-white font-semibold text-lg">
                  {p.title}
                </h3>

                <p className="text-gray-400 text-sm mt-3 leading-6">
                  {p.desc}
                </p>

                {/* HIGHLIGHTS SAFE */}
                {p.highlights && p.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-xs text-gray-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/70" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {/* TECH */}
                <p className="text-indigo-300 text-xs mt-5">
                  {p.tech}
                </p>

                {/* LINKS (ONLY GITHUB) */}
                <div className="flex gap-3 mt-5">

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-2 text-xs rounded-lg
                    border border-white/10 bg-white/5
                    text-gray-300 hover:text-white hover:bg-white/10 transition"
                  >
                    GitHub
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>
      </Reveal>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />

    </section>
  );
}