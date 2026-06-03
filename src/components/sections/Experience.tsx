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
              Freelance Full Stack Developer
            </h3>
            <p className="italic text-gray-400 text-sm md:text-base">
              Enero 2026 - Presente
            </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              <li>
                Desarrollo de soluciones web para clientes y proyectos independiente end-to-end, abordando desde la definición de requerimientos hasta el despliegue en producción.
              </li>

              <li>
                Análisis de requerimientos, identificación y resolución de problemas técnicos mediante análisis de requisitos, optimización de procesos y construcción de software basado en la escalabilidad y mantenibilidad.
              </li>

              <li>
                Construcción de interfaces modernas con React, Angular, Integración y Construcción de APIs REST y desarrollo de funcionalidades enfocadas en UX y rendimiento.
              </li>
            </ul>
          </div>
        </motion.div>

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
              BlackBirdLabs | Marzo 2025 - Noviembre 2025
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
            </ul>
          </div>
        </motion.div>


        {/* MULTIDESPENSAS */}
        <motion.div
          className="relative flex flex-col md:flex-row md:items-center gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[var(--color-primary)] rounded-full shadow-[0_0_12px_var(--color-primary)]"></span>

          <div className="md:w-1/2 md:text-right md:pr-10">
            <h3 className="text-2xl font-semibold text-[var(--color-light)]">
              Full Stack Developer Jr
            </h3>
            <p className="italic text-gray-400 text-sm md:text-base">
              Multidespensas SAS — 2024
            </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              <li>
                Análisis de procesos empresariales y levantamiento de requerimientos junto a usuarios de distintas áreas.
              </li>

              <li>
                Diseño y desarrollo de un ERP interno para centralizar operaciones y mejorar la trazabilidad organizacional.
              </li>

              <li>
                Desarrollo backend con NestJS, TypeScript y PostgreSQL bajo arquitectura modular y APIs REST.
              </li>

              <li>
                Desarrollo frontend con React, TypeScript y PrimeReact para la gestión de procesos internos.
              </li>

              <li>
                Automatización de flujos operativos, optimizando tiempos de gestión y reduciendo tareas manuales.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* TELSOLUTIONS */}
        <motion.div
          className="relative flex flex-col md:flex-row md:items-center gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[var(--color-primary)] rounded-full shadow-[0_0_12px_var(--color-primary)]"></span>

          <div className="md:w-1/2 md:text-right md:pr-10">
            <h3 className="text-2xl font-semibold text-[var(--color-light)]">
              BI Analyst & Data Automation
            </h3>
            <p className="italic text-gray-400 text-sm md:text-base">
              TelSolutions SAS — 2023 - 2024
            </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              <li>
                Diseño de dashboards interactivos en Power BI para monitoreo de indicadores comerciales y toma de decisiones.
              </li>

              <li>
                Automatización de procesos de análisis y transformación de datos utilizando Python y Pandas.
              </li>

              <li>
                Migración y estructuración de información desde Excel hacia PostgreSQL para centralizar y optimizar el acceso a los datos.
              </li>

              <li>
                Implementación de segmentación y perfilamiento de clientes basada en patrones históricos de compra.
              </li>

              <li>
                Generación de reportes estratégicos y modelos de proyección comercial para apoyar procesos de ventas y seguimiento de oportunidades.
              </li>
            </ul>
          </div>
        </motion.div>
        

      </div>
    </div>

    <div className="md:hidden mt-12 w-[2px] h-24 mx-auto bg-[var(--color-primary)]/40 rounded-full"></div>
  </section>
);