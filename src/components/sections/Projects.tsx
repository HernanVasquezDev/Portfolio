import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import type { Project } from "../../types/Projects";

const projects: Project[] = [
  {
    title: "Vibrant Release",
    description:
      "Aplicación de reservas con gestión de disponibilidad y generación automática de facturas en PDF. Diseñada para manejar flujos reales de negocio.",
    tech: ["React", "Node.js", "Express", "PDF"],
    github: "https://github.com/nachjv19/vibrant-release-1",
    featured: true,
    role: "fullstack"
  },
  {
    title: "Bookverse",
    description:
      "Plataforma tipo e-commerce con autenticación, inventario y panel admin orientado a procesos comerciales.",
    tech: ["React", "Node.js", "PostgreSQL", "JWT"],
    github: "https://github.com/nachjv19/bookverse",
    role: "backend"
  },
  {
    title: "API de Tareas",
    description:
      "API REST con CRUD completo y manejo de estado para consumo dinámico de datos.",
    tech: ["JavaScript", "Axios", "JSON"],
    github: "https://github.com/nachjv19",
    role: "backend"
  },
  {
    title: "Calculadora Avanzada",
    description:
      "Aplicación en Python con operaciones extendidas e historial exportable.",
    tech: ["Python"],
    github: "https://github.com/nachjv19",
    role: "frontend"
  },
];

export const Projects = () => {
  const [filter, setFilter] = useState<
    "all" | "frontend" | "backend" | "fullstack"
  >("all");

  // 🔥 FILTRADO
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.role === filter);

  // 🔥 FEATURED DINÁMICO SEGÚN FILTRO
  const featured = filteredProjects.find((p) => p.featured) || filteredProjects[0];

  const others = filteredProjects.filter((p) => p !== featured);

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        <SectionTitle subtitle="Proyectos donde aplico lógica, arquitectura y resolución de problemas reales">
          Proyectos Destacados
        </SectionTitle>

        {/* 🎛️ FILTROS */}
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

        {/* 🔥 HERO PROJECT DINÁMICO */}
        {featured && (
          <motion.div
            layout
            className="mt-12 mb-16 p-8 rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{
              boxShadow: "0 0 30px rgba(0,173,181,0.2)",
            }}
          >
            <p className="text-xs text-[--color-primary] mb-2 uppercase tracking-wide">
              Proyecto Destacado
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              {featured.title}
            </h3>

            <p className="text-gray-400 mb-4 max-w-3xl">
              {featured.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {featured.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg border border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-gray-900 transition"
              >
                Ver código
              </a>
            </div>
          </motion.div>
        )}

        {/* ⚡ GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((proj, index) => (
            <motion.div
              layout
              key={index}
              className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 p-6 text-left"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 20px rgba(0,173,181,0.15)",
              }}
            >
              <h3 className="text-lg font-semibold mb-2">{proj.title}</h3>

              <p className="text-gray-400 text-sm mb-4">
                {proj.description}
              </p>

              <p className="text-xs text-gray-500 mb-4">
                {proj.tech.join(" · ")}
              </p>

              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[--color-primary] hover:underline"
              >
                Ver código →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};