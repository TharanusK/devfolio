"use client";

import { Code, Layers, Database, Wrench, Users } from "lucide-react";

// Work experience data
const workExperience = [
  {
    title: "Junior Fullstack Developer",
    period: "2023 - Present",
    company: "Infused Co., Ltd.",
    description:
      "Designed, developed, and maintained responsive webs and e-commerce application, delivering end-to-end solutions from UI/UX and database design to frontend implementation, while improving development processes.",
    highlights: [
      "Developed and maintained an interactive web using TypeScript with Next.js framework with Tailwind CSS, Material UI and other libraries.",
      "Developed a LINE LIFF (LINE Front-end Framework) e-commerce experience using Next.js, with realtime chat in the application.",
      "Designed and developed an Integrated third-party APIs page to facilitate seamless data access and enhance user experience while debugging using Vue.js.",
      "Built responsive web and mobile user interfaces, ensuring cross-platform compatibility.",
      "Designed software system flow and database structures to improve development processes.",
      "Implemented Supabase Edge Functions as a type-safe Backend for Frontend (BFF), delivering optimized, schema-defined API responses to client.",
      "Developed and maintained minor feature on mobile application using React Native.",
      "Collaborated in a Scrum-based Agile team to improve the efficiency of application development.",
    ],
  },
];

// Education data
const education = [
  {
    degree: "Bachelor's in Computer Engineering (CPE)",
    period: "08/2019 – 05/2023",
    institution:
      "Sirindhorn International Institute of Technology (SIIT), Thammasat University",
    description: "Full Scholarship (2019, 2020, 2021, 2022)",
  },
];

// Certifications data
const certifications = [
  {
    name: "IELTS (2019)",
    description: "Overall Band Score 6.0",
    color: "bg-blue-500",
  },
  {
    name: "TOEIC (2023)",
    description: "Total Score 855",
    color: "bg-orange-500",
  },
  {
    name: "GitHub for Developers (2023)",
    description: "Certified by borntoDev",
    color: "bg-gray-500",
  },
];

// Skills data
const skills = [
  {
    category: "Programming Languages",
    icon: Code,
    bgColor: "bg-blue-500",
    iconColor: "text-white",
    items: [
      { name: "HTML", color: "text-blue-500" },
      { name: "CSS", color: "text-blue-500" },
      { name: "JavaScript", color: "text-blue-500" },
      { name: "TypeScript", color: "text-blue-500" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: Layers,
    bgColor: "bg-purple-500",
    iconColor: "text-white",
    items: [
      { name: "React", color: "text-purple-500" },
      { name: "Next.js", color: "text-purple-500" },
      { name: "Tailwind CSS", color: "text-purple-500" },
      { name: "Material UI", color: "text-purple-500" },
      { name: "LINE Front-end Framework (LIFF)", color: "text-purple-500" },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    bgColor: "bg-green-500",
    iconColor: "text-white",
    items: [
      { name: "SQL", color: "text-green-500" },
      { name: "Supabase ( PostgreSQL database )", color: "text-green-500" },
    ],
  },
  {
    category: "Tools",
    icon: Wrench,
    bgColor: "bg-orange-500",
    iconColor: "text-white",
    items: [
      { name: "Git", color: "text-orange-500" },
      { name: "Figma", color: "text-orange-500" },
    ],
  },
  {
    category: "Team Collaboration",
    icon: Users,
    bgColor: "bg-indigo-500",
    iconColor: "text-white",
    items: [
      { name: "Jira", color: "text-indigo-500" },
      { name: "Microsoft Teams", color: "text-indigo-500" },
      { name: "Slack", color: "text-indigo-500" },
      { name: "ClickUp", color: "text-indigo-500" },
    ],
  },
];

export function CurriculumVitae() {
  return (
    <section
      id="cv"
      className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-violet-500 uppercase">
            Professional Background
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Curriculum Vitae
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            My professional experience, education, and skills
          </p>
        </div>

        {/* Work Experience & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
          {/* Work Experience */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Work Experience
              </h3>
            </div>

            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-600"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-2 border-white dark:border-gray-800" />
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 className="font-semibold text-foreground">
                      {job.title}
                    </h4>
                    <span className="text-xs text-blue-500 font-medium bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm text-violet-500 font-medium mb-2">
                    {job.company}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {job.description}
                  </p>
                  {job.highlights.length > 0 && (
                    <ul className="space-y-1">
                      {job.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-xs text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-blue-500 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-6">
            {/* Education */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-500"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Education</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <span className="text-xs text-orange-500 font-medium bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-violet-500 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 ">
                    <div
                      className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${cert.color}`}
                    />
                    <div>
                      <span className="text-sm font-medium text-foreground block">
                        {cert.name}:
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {cert.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div id="skills" className="mb-12">
          <div className="flex flex-col items-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Technical Skills
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((group, index) => {
              const Icon = group.icon;
              return (
                <div
                  key={index}
                  className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1rem)] bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${group.bgColor} shadow-sm`}
                    >
                      <Icon className={`w-6 h-6 ${group.iconColor}`} />
                    </div>
                    <h4 className="text-lg font-bold text-foreground leading-tight">
                      {group.category}
                    </h4>
                  </div>

                  <ul className="space-y-3">
                    {group.items.map((skill, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm text-foreground/80 font-medium"
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${skill.color.replace(
                            "text-",
                            "bg-"
                          )}`}
                        ></span>
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
