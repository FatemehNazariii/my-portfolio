export default function Experience() {
  const experiences = [
    {
      role: "Backend Intern",
      company: "Bartar Mohajer",
      period: "Sep 2025 — Dec 2025",
      description:
        "eveloped backend features, REST APIs and database models using Laravel, PHP and MySQL.",
    },
    {
      role: "AI Training Support",
      company: "Aioleran Academy",
      period: "May 2025 — Aug 2025",
      description:
        "Contributed to AI data preparation, model evaluation and quality assurance.",
    },
    {
      role: "Support Specialist",
      company: "CS50x Iran",
      period: "Oct 2024 — May 2025",
      description:
        "Provided technical support and helped students solve programming challenges.",
    },
  ];
const education = [
  {
    degree: "B.Sc. Computer Software Engineering",
    school: "Elm-o-Farhang University",
    period: "2024 – Present",
    description:
      "Focused on backend development, software engineering and modern web technologies.",
  },
  {
    degree: "Associate Degree in Computer Software",
    school: "Karaj Technical & Vocational College for Women",
    period: "2022 – 2024",
    description:
      "Built a strong foundation in programming, databases and software development.",
  },
];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-28">

      <h2 className="text-3xl font-bold text-white mb-12">
        Experience & Education
      </h2>

      <div className="grid md:grid-cols-2 gap-12">

        {/* EXPERIENCE */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-8">
            Experience
          </h3>

          <div className="relative border-l border-white/10 pl-8">

            {experiences.map((item) => (
              <div key={item.role} className="relative mb-10">

                <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#0b0f17]" />

                <p className="text-indigo-400 text-sm">
                  {item.period}
                </p>

                <h4 className="text-white font-semibold mt-1">
                  {item.role}
                </h4>

                <p className="text-gray-400 text-sm">
                  {item.company}
                </p>

                <p className="text-gray-500 text-sm leading-6 mt-3">
                  {item.description}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* EDUCATION */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-8">
            Education
          </h3>

          <div className="relative border-l border-white/10 pl-8">

            {education.map((item) => (
              <div key={item.degree} className="relative mb-10">

                <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-sky-500 border-4 border-[#0b0f17]" />

                <p className="text-sky-400 text-sm">
                  {item.period}
                </p>

                <h4 className="text-white font-semibold mt-1">
                  {item.degree}
                </h4>

                <p className="text-gray-400 text-sm">
                  {item.school}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>

    </section>
  );
}