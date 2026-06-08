import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

interface LanguageSwitcherProps {
  onLanguageChange?: () => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  onLanguageChange,
}) => {
  const { i18n } = useTranslation();

  // Normalizamos por si i18next devuelve en-US o es-ES
  const currentLanguage = i18n.language.startsWith("es") ? "es" : "en";

  const changeLanguage = () => {
    const newLanguage = currentLanguage === "es" ? "en" : "es";

    i18n.changeLanguage(newLanguage);

    try {
      localStorage.setItem("i18nextLng", newLanguage);
    } catch (error) {
      console.error(error);
    }

    onLanguageChange?.();
  };

  return (
    <button
      onClick={changeLanguage}
      aria-label="Change language"
      className="
        relative
        w-32
        h-10
        bg-gray-800/80
        border
        border-gray-700
        rounded-full
        overflow-hidden
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-[--color-primary]
      "
    >
      {/* Banderas de fondo */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <ReactCountryFlag
          countryCode="ES"
          svg
          className={`
            transition-all duration-300
            ${
              currentLanguage === "es"
                ? "opacity-100 scale-110"
                : "opacity-50"
            }
          `}
          style={{
            width: "1.5rem",
            height: "1.5rem",
          }}
        />

        <ReactCountryFlag
          countryCode="GB"
          svg
          className={`
            transition-all duration-300
            ${
              currentLanguage === "en"
                ? "opacity-100 scale-110"
                : "opacity-50"
            }
          `}
          style={{
            width: "1.5rem",
            height: "1.5rem",
          }}
        />
      </div>

      {/* Thumb deslizante */}
      <motion.div
        className="
          absolute
          top-1
          left-1
          w-10
          h-10
          rounded-full
          bg-[--color-primary]
          flex
          items-center
          justify-center
          shadow-lg
        "
        animate={{
          x: currentLanguage === "es" ? 0 : 60,
        }}
        />
      
    </button>
  );
};