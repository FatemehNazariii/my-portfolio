"use client";

import Reveal from "./Reveal";

export default function About() {
  const cards = [
    {
      label: "Focus",
      title: "Backend Development",
      desc: "Building scalable APIs, secure authentication systems and reliable server-side architectures.",
    },
    {
      label: "Stack",
      title: "Python • Django • DRF • React • Next.js • PostgreSQL",
      desc: "Technologies I use to build clean, maintainable and production-ready web applications.",
    },
    {
      label: "Goal",
      title: "Solving real-world problems with modern web technologies",
      desc: "I enjoy turning ideas into useful products with simple, efficient and well-structured solutions.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070b14] px-6 py-28 text-white"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="absolute bottom-10 right-20 h-52 w-52 rounded-full bg-purple-500/10 blur-[100px]" />

      {/* Small stars */}
      <div className="pointer-events-none absolute inset-0">
        {[
          "left-[8%] top-[22%]",
          "left-[18%] top-[64%]",
          "left-[35%] top-[35%]",
          "left-[48%] top-[18%]",
          "left-[70%] top-[28%]",
          "left-[86%] top-[56%]",
          "left-[74%] top-[78%]",
          "left-[25%] top-[12%]",
          "left-[14%] top-[42%]",
          "left-[58%] top-[66%]",
        ].map((pos, index) => (
          <span
            key={index}
            className={`absolute ${pos} h-1.5 w-1.5 rounded-full bg-indigo-400/50 shadow-[0_0_12px_rgba(129,140,248,0.8)]`}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_1.05fr]">
        {/* Left content */}
        <Reveal>
          <div>
            <span className="mb-4 inline-flex rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-1.5 text-sm font-medium text-indigo-200">
              About Me
            </span>

            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Backend-focused developer
            </h2>

            <p className="max-w-xl text-lg leading-9 text-slate-400">
              I am a backend developer focused on building scalable, secure and
              maintainable web applications. I enjoy designing clean APIs,
              structuring databases and creating reliable systems using Django,
              React and Next.js.
            </p>

            <p className="mt-6 max-w-xl text-lg leading-9 text-slate-500">
              I prefer simple, readable and practical solutions over unnecessary
              complexity.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {["Clean APIs", "Database Design", "Authentication", "Scalable Systems"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </Reveal>

        {/* Right cards */}
        <div className="space-y-6">
          {cards.map((card, index) => (
            <Reveal key={card.label} delay={index * 0.12}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.07]">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl transition-all duration-300 group-hover:bg-indigo-500/20" />

                <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                  {card.label}
                </p>

                <h3 className="text-xl font-bold leading-8 text-white">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}