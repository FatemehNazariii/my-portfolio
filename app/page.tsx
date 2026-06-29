"use client";

import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Particles from "../components/Particles";
import Footer from "../components/Footer";
import MouseGlow from "../components/MouseGlow";
import Experience from "@/components/Experience";


export default function Home() {
  return (
    <main className="relative bg-[#0b0f17] text-white">

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Particles />
        <MouseGlow />
      </div>

    </main>
  );
}
