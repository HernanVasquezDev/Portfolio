import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

export const Experience = () => (
  <section
    id="experience"
    className="relative py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-200"
  >
    <SectionTitle>Experiencia</SectionTitle>

    <div className="max-w-5xl mx-auto mt-10 relative">
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[var(--color-primary)]/40"></div>

      <div className="space-y-20">

        {/* BLACKBIRD LABS */}
        <motion.div
          className="relative flex flex-col md:flex-row md:items-center gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[var(--color-primary)] rounded-full shadow-[0_0_12px_var(--color-primary)]"></span>

          <div className="md:w-1/2 md:text-right md:pr-10">
            <h3 className="text-2xl font-semibold text-[var(--color-light)]">
              Full Stack Developer
            </h3>
            <p className="italic text-gray-400 text-sm md:text-base">
              BlackBirdLabs (Riwi) — 2025
            </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              <li>
                Desarrollo de aplicaciones web y móviles con React, React Native, Node.js y TypeScript.
              </li>
              <li>
                Construcción de APIs escalables con Express y NestJS bajo arquitectura modular.
              </li>
              <li>
                Implementación de bases de datos SQL/NoSQL (MySQL, PostgreSQL, MongoDB, Firebase).
              </li>
              <li>
                Uso de ORMs, autenticación, logging (Morgan) y consumo de APIs externas.
              </li>
              <li>
                Trabajo bajo metodologías ágiles (Scrum) en equipos de desarrollo colaborativo.
              </li>
              <li>
                Consolidación de TypeScript como estándar en el desarrollo de aplicaciones modernas.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* GENERATION (JAVA BOOTCAMP) */}
        <motion.div
          className="relative flex flex-col md:flex-row md:items-center gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[var(--color-primary)] rounded-full shadow-[0_0_12px_var(--color-primary)]"></span>

          <div className="md:w-1/2 md:text-right md:pr-10">
            <h3 className="text-2xl font-semibold text-[var(--color-light)]">
              Full Stack Java Bootcamp
            </h3>
            <p className="italic text-gray-400 text-sm md:text-base">
              Generation — Formación intensiva (3 meses · 8h/día)
            </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              <li>
                Desarrollo de aplicaciones Full Stack con Java, Spring Boot y React.
              </li>
              <li>
                Construcción de APIs REST, autenticación y manejo de bases de datos relacionales.
              </li>
              <li>
                Aplicación de principios SOLID, arquitectura limpia y buenas prácticas backend.
              </li>
              <li>
                Simulación de entorno laboral real con metodologías ágiles (Scrum).
              </li>
            </ul>
          </div>
        </motion.div>

        {/* BASE PERSONAL / INICIO */}
        <motion.div
          className="relative flex flex-col md:flex-row md:items-center gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[var(--color-primary)] rounded-full shadow-[0_0_12px_var(--color-primary)]"></span>

          <div className="md:w-1/2 md:text-right md:pr-10">
            <h3 className="text-2xl font-semibold text-[var(--color-light)]">
              Desarrollo de Software Independiente
            </h3>
            <p className="italic text-gray-400 text-sm md:text-base">
              2024 — Presente
            </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              <li>
                Creación de proyectos personales full stack enfocados en práctica y mejora técnica.
              </li>
              <li>
                Desarrollo de interfaces modernas con React y consumo de APIs REST.
              </li>
              <li>
                Aplicación progresiva de buenas prácticas, patrones de diseño y arquitectura básica.
              </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </div>

    <div className="md:hidden mt-12 w-[2px] h-24 mx-auto bg-[var(--color-primary)]/40 rounded-full"></div>
  </section>
);