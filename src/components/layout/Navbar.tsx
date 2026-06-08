import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLogo from "./AnimatedLogo";
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from "./LanguageSwitcher";

const sections = [
  { id: "hero", labelKey: "nav.home" },
  { id: "projects", labelKey: "nav.projects" },
  { id: "experience", labelKey: "nav.experience" },
  { id: "education", labelKey: "nav.education" },
  { id: "contact", labelKey: "nav.contact" },
];

export const Navbar = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      setScrolled(window.scrollY > 50);

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActive(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // call once to set initial state (transparency / active section)
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const handleLanguageChange = () => {
    setOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -60 }}
      animate={{ y: 0 }}
    >
      {/* HEADER */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <AnimatedLogo onClick={() => scrollToSection("hero")} />

        <div className="hidden md:flex items-center gap-6">
          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 text-gray-300">
            {sections.map(({ id, labelKey }) => (
              <li
                key={id}
                onClick={() => scrollToSection(id)}
                className={`cursor-pointer hover:text-[--color-primary] transition-colors ${
                  active === id ? "text-[--color-primary] font-medium" : ""
                }`}
              >
                {t(labelKey)}
              </li>
            ))}
          </ul>

          {/* LANGUAGE SWITCHER DESKTOP */}
          <LanguageSwitcher onLanguageChange={handleLanguageChange} />
        </div>

        {/* HAMBURGER */}
        <div
          className="md:hidden flex flex-col justify-center items-center gap-[6px] cursor-pointer w-10 h-10"
          onClick={() => setOpen(!open)}
        >
          <motion.span
            animate={{
              rotate: open ? 45 : 0,
              y: open ? 7 : 0,
            }}
            className={`w-7 h-[3px] rounded-full ${
              open ? "bg-[--color-primary]" : "bg-gray-200"
            }`}
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className={`w-7 h-[3px] rounded-full ${
              open ? "bg-[--color-primary]" : "bg-gray-200"
            }`}
          />
          <motion.span
            animate={{
              rotate: open ? -45 : 0,
              y: open ? -7 : 0,
            }}
            className={`w-7 h-[3px] rounded-full ${
              open ? "bg-[--color-primary]" : "bg-gray-200"
            }`}
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden w-full overflow-hidden bg-gray-950/95 backdrop-blur-md border-t border-gray-800"
          >
            <ul className="flex flex-col items-center py-6 gap-6 text-gray-300 text-lg">
              <li className="flex gap-2">
                <LanguageSwitcher onLanguageChange={handleLanguageChange} />
              </li>
              {sections.map(({ id, labelKey }) => (
                <li
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`cursor-pointer hover:text-[--color-primary] transition-colors ${
                    active === id ? "text-[--color-primary] font-medium" : ""
                  }`}
                >
                  {t(labelKey)}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};