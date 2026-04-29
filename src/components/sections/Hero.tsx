import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

export const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
  >
    <motion.div
      className="max-w-3xl mx-auto flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >

      {/* foto de perfil */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mb-6 relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[var(--color-primary)] shadow-[0_0_25px_rgba(0,173,181,0.2)]"
      >
        <img
          src="/images/profile.jpg"
          alt="Hernán Vásquez"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Nombre */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[--color-light] leading-tight">
        Hernán Vásquez
      </h1>

      {/* Rol */}
      <motion.h2
        className="text-xl md:text-2xl text-[--color-primary] font-medium mb-6 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Desarrollador Full Stack Java
      </motion.h2>

      {/* Descripción */}
      <motion.p
        className="max-w-2xl mx-auto text-gray-300 mb-8 leading-relaxed text-base md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Disfruto construir soluciones web claras y funcionales, poniendo especial atención en la estructura y la calidad del código.
        Trabajo con tecnologías como Java, Spring Boot y React, buscando siempre mejorar y aprender en cada proyecto.
      </motion.p>

      {/* Iconos */}
      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.a
          href="https://wa.me/573043132152?text=Hola%20Hernan,%20vi%20tu%20portafolio%20y%20me%20interesa%20contactarte"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-[--color-primary]/50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Mi Whatsapp"
        >
          <BsWhatsapp size={28} />
        </motion.a>

        <motion.a
          href="https://github.com/HernanVasquezDev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-[--color-primary]/50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Mi GitHub"
        >
          <Github size={28} />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/hernan-jose-vasquez-araujo-fullstack-java-developer/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-[--color-primary]/50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Mi LinkedIn"
        >
          <Linkedin size={28} />
        </motion.a>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="flex gap-4 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <button
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-6 py-3 rounded-lg border border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-gray-900 transition"
        >
          Ver proyectos
        </button>

        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-6 py-3 rounded-lg border border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-gray-900 transition"
        >
          Contactarme
        </button>
      </motion.div>
    </motion.div>
  </section>
);