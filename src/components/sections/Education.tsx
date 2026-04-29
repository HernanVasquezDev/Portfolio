import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

export const Education = () => (
  <section
    id="education"
    className="relative py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-200"
  >
    <SectionTitle>Educación</SectionTitle>

    <div className="max-w-5xl mx-auto mt-10 relative">
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[var(--color-primary)]/40" />

      <div className="space-y-12">

        {/* UNIVERSIDAD */}
        <motion.div
          className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--color-primary)] rounded-full shadow-[0_0_12px_var(--color-primary)]"></span>

          <div className="md:w-1/2 md:text-right md:pr-10">
            <h3 className="text-2xl font-semibold text-[var(--color-light)]">
              Ingeniería de Sistemas
            </h3>
            <p className="italic text-gray-400 text-sm md:text-base">
              CUN — En curso
            </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              <li>
                Formación en fundamentos de ingeniería de software, bases de datos, redes y arquitectura de sistemas.
              </li>
              <li>
                Desarrollo de pensamiento lógico y estructurado aplicado a problemas computacionales.
              </li>
              <li>
                Enfoque complementado con aprendizaje autodidacta en desarrollo web moderno (React, Node.js, Spring Boot).
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Generation */}
        <motion.div
          className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--color-primary)] rounded-full shadow-[0_0_12px_var(--color-primary)]"></span>

          <div className="md:w-1/2 md:text-right md:pr-10">
            <h3 className="text-2xl font-semibold text-[var(--color-light)]">
              Full Stack Java Bootcamp
            </h3>
            <p className="italic text-gray-400 text-sm md:text-base">
              Generation — Formación intensiva (3 meses · 8h/día) · En curso
            </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              <li>
                Formación intensiva en desarrollo Full Stack con Java, Spring Boot, APIs REST y arquitectura backend moderna.
              </li>
              <li>
                Desarrollo de aplicaciones web completas con frontend en Javascript con Boostrap y backend en Java con SpringBoot.
              </li>
              <li>
                Enfoque en buenas prácticas, trabajo en equipo, metodologías ágiles y simulación de entorno laboral real.
              </li>
              <li>
                Resolución de problemas reales mediante proyectos prácticos y entregables semanales.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* SENA */}
        <motion.div
          className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--color-primary)] rounded-full shadow-[0_0_12px_var(--color-primary)]"></span>

          <div className="md:w-1/2 md:text-right md:pr-10">
            <h3 className="text-2xl font-semibold text-[var(--color-light)]">
              Técnico en Sistemas
            </h3>
            <p className="italic text-gray-400 text-sm md:text-base">
              SENA — 2021
            </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              <li>
                Bases en soporte técnico, mantenimiento de equipos y redes de computadoras.
              </li>
              <li>
                Introducción a la programación y resolución de problemas técnicos.
              </li>
              <li>
                Formación práctica que fortaleció la transición hacia el desarrollo de software.
              </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </div>

    <div className="md:hidden mt-8 w-[2px] h-16 mx-auto bg-[var(--color-primary)]/40 rounded-full"></div>
  </section>
);