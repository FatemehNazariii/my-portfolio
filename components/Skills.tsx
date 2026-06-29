import { Server, Monitor, Database, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Django",
      "Python",
      "REST API Design",
      "Authentication (JWT)",
      "Backend Architecture",
    ],
  },
  {
    title: "Frontend",
    icon: Monitor,
    skills: ["React", "Next.js", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      "SQL",
      "Database Design",
      "Data Modeling",
      "Relationships (Foreign Key)",
    ],
  },
  {
    title: "Tools & Concepts",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Problem Solving", "Clean Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-28">
      <h2 className="text-3xl font-bold text-white mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <div
              key={group.title}
              className="group relative overflow-hidden p-7 rounded-3xl border border-white/10
              bg-gradient-to-br from-white/[0.07] to-white/[0.03]
              hover:border-indigo-400/40 hover:-translate-y-1
              hover:shadow-[0_20px_60px_-25px_rgba(99,102,241,0.5)]
              transition-all duration-300"
            >
              <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-indigo-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-500/15 border border-indigo-400/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-indigo-300" />
                  </div>

                  <h3 className="text-white font-semibold text-lg">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-full text-sm
                      border border-white/10 bg-black/30 text-gray-300
                      hover:text-white hover:border-indigo-400/40
                      hover:bg-indigo-500/10 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}