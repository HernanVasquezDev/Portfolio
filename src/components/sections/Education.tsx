import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import SectionTitle from "../ui/SectionTitle";

export const Education = () => {
  const { t } = useTranslation();
  const engineeringBullets = t('education.engineering.bullets', { returnObjects: true }) as string[];
  const generationBullets = t('education.generation.bullets', { returnObjects: true }) as string[];
  const senaBullets = t('education.sena.bullets', { returnObjects: true }) as string[];

  return (
    <section
      id="education"
      className="relative py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-200"
    >
      <SectionTitle>{t('education.title')}</SectionTitle>

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
              {t('education.engineering.degree')}
            </h3>
            <p className="italic text-gray-400 text-sm md:text-base">
              {t('education.engineering.school')} — {t('education.engineering.status')}
            </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              {engineeringBullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
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
              {t('education.generation.degree')}
            </h3>
            <p className="italic text-gray-400 text-sm md:text-base">
              {t('education.generation.school')}
            </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              {generationBullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
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
              {t('education.sena.degree')}
            </h3>
            <p className="italic text-gray-400 text-sm md:text-base">
              {t('education.sena.school')} — {t('education.sena.date')}
            </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              {senaBullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </div>

    <div className="md:hidden mt-8 w-[2px] h-16 mx-auto bg-[var(--color-primary)]/40 rounded-full"></div>
  </section>
)};