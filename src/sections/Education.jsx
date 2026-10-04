const education = [
  {
    period: "2024 — Present",
    degree: "BSc. in Information Technology",
    institution: "Sri Lanka International Buddhist Academy",
    location: "Pallekele, Sri Lanka",
    description:
      "Building a strong foundation in software development, databases, data analytics, system design, and modern web technologies.",
    highlights: ["Information Technology", "Software Development", "Data Analytics"],
    current: true,
  },
  {
    period: "2022 — 2023",
    degree: "Diploma in English",
    institution: "Sri Lanka International Buddhist Academy",
    location: "Sri Lanka",
    description:
      "Developed communication and language skills that support professional collaboration, documentation, and effective communication.",
    highlights: ["English", "Communication"],
    current: false,
  },
  {
    period: "2019 — 2022",
    degree: "G.C.E. Advanced Level",
    institution: "Bandaranayake College",
    location: "Gampaha, Sri Lanka",
    description:
      "Completed secondary education and developed the academic foundation that led to my studies in Information Technology.",
    highlights: ["Advanced Level"],
    current: false,
  },
  {
    period: "2017 — 2018",
    degree: "G.C.E. Ordinary Level",
    institution: "Parakrama National College",
    location: "Gampaha, Sri Lanka",
    description:
      "Completed foundational secondary education and developed a broad academic base.",
    highlights: ["Ordinary Level"],
    current: false,
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-highlight text-sm font-medium tracking-wider uppercase animate-fade-in">
            Education
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            Learning That,{" "}
            <span className="font-serif italic font-normal text-highlight">
              Shaped Me.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            The academic path that built my foundation in technology,
            communication, and problem-solving.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-highlight/70 via-highlight/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(245,166,35,0.35)]" />

          <div className="space-y-12">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-highlight rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {item.current && (
                    <span className="absolute inset-0 rounded-full bg-highlight animate-ping opacity-60" />
                  )}
                </div>

                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-highlight/25 hover:border-highlight/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,166,35,0.08)]">
                    <span className="text-sm text-highlight font-medium">
                      {item.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">
                      {item.degree}
                    </h3>

                    <p className="text-muted-foreground">
                      {item.institution}
                    </p>

                    <p className="text-xs text-muted-foreground/70 mt-1">
                      {item.location}
                    </p>

                    <p className="text-sm text-muted-foreground mt-4">
                      {item.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {item.highlights.map((highlight, highlightIdx) => (
                        <span
                          key={highlightIdx}
                          className="px-3 py-1 bg-highlight/10 text-xs rounded-full text-highlight border border-highlight/10"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
