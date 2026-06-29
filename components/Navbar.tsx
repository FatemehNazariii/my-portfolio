"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = ["about", "skills", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkStyle = (id: string) =>
    `text-sm transition ${
      active === id
        ? "text-indigo-400"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0b0f17]/60 backdrop-blur-2xl">
      <div className="max-w-5xl mx-auto flex justify-between px-6 py-4">

        <h1 className="text-white font-semibold">
          Portfolio<span className="text-indigo-400">.</span>
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#about" className={linkStyle("about")}>About</a>
          <a href="#skills" className={linkStyle("skills")}>Skills</a>
          <a href="#projects" className={linkStyle("projects")}>Projects</a>
          <a href="#contact" className={linkStyle("contact")}>Contact</a>
        </div>

      </div>
    </nav>
  );
}