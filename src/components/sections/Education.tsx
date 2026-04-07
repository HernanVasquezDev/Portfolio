import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

export const Education = () => (
  <section
    id="education"
    className="relative py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-200">
    <SectionTitle>Educación</SectionTitle>

    <div className="max-w-5xl mx-auto mt-10 relative">
      {/* Línea del timeline (solo en desktop) */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[var(--color-primary)]/40" />

      <div className="space-y-12">
        {/* Universidad - CUN */}
        <motion.div
          className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--color-primary)] rounded-full shadow-[0_0_12px_var(--color-primary)]"></span>

          <div className="md:w-1/2 md:text-right pr-0 md:pr-10">
            <h3 className="text-2xl font-semibold text-[var(--color-light)]">Ingeniería de Sistemas</h3>
            <p className="italic text-gray-400 text-sm md:text-base">CUN — En curso</p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              <li>
                Formación amplia en ingeniería: finanzas, redes, administración de sistemas y fundamentos de software.
              </li>
              <li>
                En la CUN la malla tiene énfasis en gestión y frameworks conceptuales de ingeniería; el desarrollo de software se aborda desde lo básico hacia la lógica aplicada.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Técnico - SENA */}
        <motion.div
          className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          viewport={{ once: true }}
        >
          <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--color-primary)] rounded-full shadow-[0_0_12px_var(--color-primary)]"></span>

          <div className="md:w-1/2 md:text-right pr-0 md:pr-10">
            <h3 className="text-2xl font-semibold text-[var(--color-light)]">Técnico en Sistemas</h3>
            <p className="italic text-gray-400 text-sm md:text-base">SENA — 2021 </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              <li>Fundamentos en soporte técnico, mantenimiento, redes y automatización.</li>
              <li>Base práctica que facilitó la transición hacia desarrollo y operación de soluciones.</li>
            </ul>
          </div>
        </motion.div>

        
        {/* línea decorativa móvil */}
        <div className="md:hidden mt-8 w-[2px] h-16 mx-auto bg-[var(--color-primary)]/40 rounded-full"></div>
      </div>
    </div>
  </section>
);
