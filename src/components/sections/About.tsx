import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import SectionTitle from "../ui/SectionTitle";

export const About = () => {
  const { t } = useTranslation();

  return (
  <section
    id="about"
    className="relative py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-200"
  >
    {/* Línea de acento superior */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-[2px] bg-[var(--color-primary-light)] rounded-full blur-[1px]" />

    <motion.div
      className="max-w-4xl mx-auto text-center backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-3xl shadow-lg p-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <SectionTitle>{t('about.title')}</SectionTitle>

      <motion.p
        className="text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        {t('about.paragraph1')}
      </motion.p>

      <motion.p
        className="text-lg leading-relaxed text-gray-400 max-w-3xl mx-auto mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        {t('about.paragraph2')}
      </motion.p>

      <motion.p
        className="text-base text-gray-500 mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        {t('about.paragraph3')}
      </motion.p>

    </motion.div>
  </section>
)};
