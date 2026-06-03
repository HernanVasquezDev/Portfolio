import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

export const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#0B0B0F]"
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center"
      >
        {/* Foto */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={reduceMotion ? undefined : { y: -4 }}
          className="mb-8"
        >
          <img
            src="/images/profile.png"
            alt="Hernan Vasquez"
            className="h-[65vh] object-contain"
          />
        </motion.div>

        {/* Nombre */}
        <motion.h1
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4"
        >
          Hernan Vasquez
        </motion.h1>

        {/* Cargo */}
        <motion.h2
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-lg md:text-4xl text-cyan-300 font-medium mb-6"
        >
          Full Stack Developer
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl text-gray-400 text-base md:text-lg leading-relaxed mb-10"
        >
          Analizo procesos, identifico oportunidades de mejora y las transformo en soluciones digitales funcionales. Disfruto entender cómo funcionan las cosas, encontrar lo que puede optimizarse y construir herramientas que generen un impacto real.
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 15 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-xl bg-cyan-300 text-black font-medium hover:opacity-90 transition"
          >
            Ver proyectos
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
          >
            Contactarme
          </button>

          <a
            href="/images/project/CV_HernanVasquez.pdf"
            download
            className="px-6 py-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition"
          >
            Descargar CV
          </a>
        </motion.div>

        {/* Redes */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center gap-4"
        >
          {[
            {
              icon: <BsWhatsapp size={20} />,
              href: "https://wa.me/573043132152",
            },
            {
              icon: <Github size={20} />,
              href: "https://github.com/HernanVasquezDev",
            },
            {
              icon: <Linkedin size={20} />,
              href: "https://www.linkedin.com/in/hernan-jose-vasquez-araujo-fullstack-java-developer/",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.96 }}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-gray-300 hover:text-cyan-300 hover:border-cyan-300/40 transition-all"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};