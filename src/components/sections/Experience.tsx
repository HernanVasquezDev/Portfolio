import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import SectionTitle from "../ui/SectionTitle";

export const Experience = () => {
  const { t } = useTranslation();
  const freelanceBullets = t('experience.freelance.bullets', { returnObjects: true }) as string[];
  const blackbirdBullets = t('experience.blackbird.bullets', { returnObjects: true }) as string[];
  const multidespensasBullets = t('experience.multidespensas.bullets', { returnObjects: true }) as string[];
  const telsolutionsBullets = t('experience.telsolutions.bullets', { returnObjects: true }) as string[];

  return (
    <section
      id="experience"
      className="relative py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-200"
    >
      <SectionTitle>{t('experience.title')}</SectionTitle>

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
              {t('experience.freelance.role')}
            </h3>
            <p className="italic text-gray-400 text-sm md:text-base">
              {t('experience.freelance.date')}
            </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              {freelanceBullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
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
              {t('experience.blackbird.role')}
            </h3>
            <p className="italic text-gray-400 text-sm md:text-base">
              {t('experience.blackbird.company')} | {t('experience.blackbird.date')}
            </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              {blackbirdBullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
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
              {t('experience.multidespensas.role')}
            </h3>
            <p className="italic text-gray-400 text-sm md:text-base">
              {t('experience.multidespensas.company')} — {t('experience.multidespensas.date')}
            </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              {multidespensasBullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
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
              {t('experience.telsolutions.role')}
            </h3>
            <p className="italic text-gray-400 text-sm md:text-base">
              {t('experience.telsolutions.company')} — {t('experience.telsolutions.date')}
            </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              {telsolutionsBullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        </motion.div>
        

      </div>
    </div>

    <div className="md:hidden mt-12 w-[2px] h-24 mx-auto bg-[var(--color-primary)]/40 rounded-full"></div>
  </section>
)};