import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import type { Project } from "../../types/Projects";

const projects: Project[] = [
  {
    title: "projects.easypos.title",
    description: "projects.easypos.description",
    tech: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Expo EAS",
      "AsyncStorage",
    ],
    image: "/images/project/EasyPOS.png",
    role: "fullstack",
    status: "In Progress",
    links: [
      {
        label: "projects.easypos.product",
        url: "https://landing-easy-pos.vercel.app/",
        variant: "primary",
      },
      {
        label: "projects.easypos.github",
        url: "https://github.com/HernanVasquezDev/EasyPOS.git",
        variant: "secondary",
      },
    ],
  },
  {
  title: "projects.coroto.title",
  description: "projects.coroto.description",
  tech: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "Docker",
    "MySQL",
    "Bootstrap",
    "JWT",
    "OpenPay",
    "PHP"
  ],
  image: "/images/project/Coroto.png",
  featured: true,
  role: "fullstack",
  status: "Live",
  links: [
    {
      label: "projects.coroto.live",
      url: "https://coroto.online/index.html",
      variant: "primary",
    },
    {
      label: "projects.coroto.frontend",
      url: "https://github.com/fabian1031/generation-proyecto-final-ecommerce-grupo9.git",
      variant: "secondary",
    },
    {
      label: "projects.coroto.backend",
      url: "https://github.com/fabian1031/coroto-backend.git",
      variant: "secondary",
    },
  ],
},


  {
    title: "projects.prescription.title",
    description: "projects.prescription.description",
    tech: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
    ],
    image: "/images/project/PrescriptionsLogin.png",
    role: "fullstack",
    status: "Live",
    links: [
      {
        label: "projects.prescription.live",
        url: "https://prescriptionfrontend.onrender.com/login",
        variant: "primary",
      },
      {
        label: "projects.prescription.frontend",
        url: "https://github.com/HernanVasquezDev/PrescriptionFrontend.git",
        variant: "secondary",
      },
      {
        label: "projects.prescription.backend",
        url: "https://github.com/HernanVasquezDev/PrescriptionsBackend.git",
        variant: "secondary",
      },
    ],
  },

  {
    title: "projects.lawyer.title",
    description: "projects.lawyer.description",
    tech: ["Astro", "TypeScript", "SEO", "React"],
    image: "/images/project/landinglaw.png",
    role: "frontend",
    status: "Live",
    links: [
      {
        label: "projects.lawyer.visit",
        url: "https://abogadalizethcarrillo.netlify.app",
        variant: "primary",
      },
    ],
  },
];

export const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<
    "all" | "frontend" | "backend" | "fullstack"
  >("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.role === filter);

  const featured =
    filteredProjects.find((p) => p.featured) || filteredProjects[0];

  const others = filteredProjects.filter((p) => p !== featured);

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        <SectionTitle subtitle={t('projects.subtitle')}>
          {t('projects.title')}
        </SectionTitle>

        {/* FILTERS */}
        <div className="flex justify-center gap-3 mt-8 flex-wrap">
          {["all", "frontend", "backend", "fullstack"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as typeof filter)}
              className={`px-4 py-2 text-sm rounded-full border transition ${
                filter === f
                  ? "bg-[--color-primary] text-gray-900 border-[--color-primary]"
                  : "border-gray-700 text-gray-400 hover:border-[--color-primary]"
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        {/* FEATURED PROJECT */}
        {featured && (
          <motion.div
            layout
            className="mt-14 mb-20 overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              boxShadow: "0 0 40px rgba(0,173,181,0.15)",
            }}
          >
            {/* IMAGE */}
            {featured.image && (
              <div className="w-full h-[280px] overflow-hidden border-b border-gray-800">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-8">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                <div>
                  <p className="text-xs text-[--color-primary] uppercase tracking-widest mb-2">
                    {t('projects.featured.label')}
                  </p>

                  <h3 className="text-3xl font-bold">
                    {t(featured.title)}
                  </h3>
                </div>

                {featured.status && (
                  <span
                    className={`text-xs px-3 py-1 rounded-full border ${
                      featured.status === "Live"
                        ? "border-green-500 text-green-400"
                        : "border-yellow-500 text-yellow-400"
                    }`}
                  >
                    {featured.status}
                  </span>
                )}
              </div>

              <p className="text-gray-400 max-w-3xl leading-relaxed mb-6">
                {t(featured.description)}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {featured.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-300 border border-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* FEATURED LINKS */}
              <div className="flex flex-wrap gap-4">
                {featured.links?.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-5 py-2 rounded-lg transition ${
                      link.variant === "primary"
                        ? "bg-[--color-primary] text-primary-900 font-medium hover:opacity-90"
                        : "border border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-gray-900"
                    }`}
                  >
                    {t(link.label)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* OTHER PROJECTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {others.map((proj, index) => (
            <motion.div
              layout
              key={index}
              className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 text-left"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -6,
                boxShadow: "0 0 25px rgba(0,173,181,0.12)",
              }}
            >
              {proj.image && (
                <div className="h-48 overflow-hidden border-b border-gray-800">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">
                    {t(proj.title)}
                  </h3>

                  {proj.status && (
                    <span
                      className={`text-[10px] px-2 py-1 rounded-full border ${
                        proj.status === "Live"
                          ? "border-green-500 text-green-400"
                          : "border-yellow-500 text-yellow-400"
                      }`}
                    >
                      {proj.status}
                    </span>
                  )}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {t(proj.description)}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-gray-800 px-2 py-1 rounded-full text-gray-300 border border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* PROJECT LINKS */}
                <div className="flex gap-4 flex-wrap">
                  {proj.links?.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm transition ${
                        link.variant === "primary"
                          ? "text-[--color-primary] hover:underline"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {t(link.label)} →
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};