import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#0B0B0F]"
    >
      {/* Background subtle */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center"
      >
        {/* PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="relative mb-10"
        >
          {/* subtle glow */}
          <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-2xl scale-110" />

          {/* image container */}
          <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/images/profile.jpg"
              alt="Hernán Vásquez"
              className="w-full h-full object-cover scale-[1.03]"
            />
          </div>

          {/* floating badge */}
          <div className="absolute bottom-2 -right-3 px-4 py-2 rounded-full bg-[#111] border border-white/10 backdrop-blur-md shadow-lg">
            <span className="text-sm text-gray-300">
              Java • Spring • React • Angular 
            </span>
          </div>
        </motion.div>

        {/* NAME */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hernán Vásquez
        </motion.h1>

        {/* ROLE */}
        <motion.h2
          className="text-lg md:text-2xl text-cyan-300 font-medium mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          Full Stack Developer
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          className="max-w-2xl text-gray-400 text-base md:text-lg leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Desarrollo aplicaciones web modernas enfocadas en rendimiento,
          estructura limpia y experiencia de usuario. Me gusta construir
          soluciones claras, escalables y funcionales utilizando tecnologías
          como Java, Spring Boot y React.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 rounded-xl bg-cyan-300 text-black font-medium hover:opacity-90 transition"
          >
            Ver proyectos
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
          >
            Contactarme
          </button>
        </motion.div>

        {/* SOCIALS */}
        <motion.div
          className="flex items-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[
            {
              icon: <BsWhatsapp size={22} />,
              href: "https://wa.me/573043132152?text=Hola%20Hernan,%20vi%20tu%20portafolio%20y%20me%20interesa%20contactarte",
            },
            {
              icon: <Github size={22} />,
              href: "https://github.com/HernanVasquezDev",
            },
            {
              icon: <Linkedin size={22} />,
              href: "https://www.linkedin.com/in/hernan-jose-vasquez-araujo-fullstack-java-developer/",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-gray-300 hover:text-cyan-300 hover:border-cyan-300/40 transition-all duration-300"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};