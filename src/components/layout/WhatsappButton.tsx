import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const hero = document.getElementById("hero");

      if (hero) {
        const triggerPoint = hero.offsetHeight;
        setVisible(window.scrollY > triggerPoint);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.a
      href="https://wa.me/573001234567?text=Hola%20Hernan,%20vi%20tu%20portafolio%20y%20quiero%20contactarte"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600"

      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}

      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
    >
      <BsWhatsapp size={28} />
    </motion.a>
  );
};

export default WhatsAppButton;