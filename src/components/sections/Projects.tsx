import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import type { Project } from "../../types/Projects";

const projects: Project[] = [
  {
    title: "EasyPOS",

    description:
      "Aplicación POS mobile offline-first enfocada en accesibilidad para adultos mayores y pequeños comercios.",

    tech: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Expo EAS",
      "AsyncStorage",
    ],

    image: "/images/project/EasyPOS.png",

    featured: true,

    role: "fullstack",

    status: "In Progress",

    links: [
      {
        label: "Ver Producto",
        url: "https://landing-easy-pos.vercel.app/",
        variant: "primary",
      },

      {
        label: "GitHub",
        url: "https://github.com/HernanVasquezDev/EasyPOS.git",
        variant: "secondary",
      },
    ],
  },

  {
    title: "Plataforma de Prescripciones",

    description:
      "Sistema full stack desarrollado con Next.js y NestJS utilizando TypeScript end-to-end y despliegue completo en producción.",

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
        label: "Live",
        url: "https://prescriptionfrontend.onrender.com/login",
        variant: "primary",
      },

      {
        label: "Frontend",
        url: "https://github.com/HernanVasquezDev/PrescriptionFrontend.git",
        variant: "secondary",
      },

      {
        label: "Backend",
        url: "https://github.com/HernanVasquezDev/PrescriptionsBackend.git",
        variant: "secondary",
      },
    ],
  },

  {
    title: "Lawyer Landing Page",

    description:
      "Sitio web corporativo desarrollado con Astro y TypeScript enfocado en rendimiento, accesibilidad y posicionamiento SEO.",

    tech: ["Astro", "TypeScript", "SEO", "React"],

    image: "/images/project/landinglaw.png",

    role: "frontend",

    status: "Live",

    links: [
      {
        label: "Visitar Sitio",
        url: "https://abogadalizethcarrillo.netlify.app",
        variant: "primary",
      },
    ],
  },
];

export const Projects = () => {
  const [filter, setFilter] = useState<
    "all" | "frontend" | "backend" | "fullstack"
  >("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.role === filter);0

  const featured =
    filteredProjects.find((p) => p.featured) || filteredProjects[0];

  const others = filteredProjects.filter((p) => p !== featured);

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        <SectionTitle subtitle="Soluciones enfocadas en producto, arquitectura y experiencia de usuario">
          Proyectos Destacados
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
                    Proyecto Destacado
                  </p>

                  <h3 className="text-3xl font-bold">
                    {featured.title}
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
                {featured.description}
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
                    {link.label}
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
                    {proj.title}
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
                  {proj.description}
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
                      {link.label} →
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