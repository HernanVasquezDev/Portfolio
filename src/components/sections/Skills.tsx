import { motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import { Code2, Brain } from "lucide-react";
import { 
  SiJavascript, 
  SiTypescript, 
  SiNodedotjs, 
  SiReact, 
  SiFastapi,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiSpringboot
} from "react-icons/si";

import { DiJava } from "react-icons/di";


const technicalSkills = [
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#68A063" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "MySQL", Icon: SiMysql, color: "#00758F" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", Icon: SiMongodb, color: "#13AA52" },
  { name: "TailwindCSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#181717" },
  { name: "Java", Icon: DiJava, color: "#007396" },
  { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
];

const softSkills = [
  "Comunicación efectiva",
  "Pensamiento crítico",
  "Adaptabilidad",
  "Resolución de problemas",
  "Trabajo en equipo",
  "Organización",
  "Liderazgo técnico",
  "Curiosidad analítica",
];

export const Skills = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [revealedCard, setRevealedCard] = useState(null);

  const handleDeckClick = () => {
    if (selectedCardIndex === null) {
      // Seleccionar primera carta disponible
      const availableCards = softSkills.filter((_, i) => !revealedCard || revealedCard !== i);
      if (availableCards.length > 0) {
        const randomIndex = Math.floor(Math.random() * softSkills.length);
        setSelectedCardIndex(randomIndex);
        
        // Después de un delay, revelar la carta
        setTimeout(() => {
          setRevealedCard(randomIndex);
          setSelectedCardIndex(null);
        }, 800);
      }
    }
  };

  return (
  <section
    id="skills"
    className="py-28 px-6 text-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-200"
  >
    <SectionTitle>Habilidades</SectionTitle>

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
      {/* Habilidades técnicas */}
      <motion.div
        className="bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-3xl p-10 shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <Code2 className="text-[var(--color-primary)] w-8 h-8" />
          <h3 className="text-2xl font-semibold text-[var(--color-light)]">Technical Skills</h3>
        </div>

        {/* Grid de logos técnicos */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center">
          {technicalSkills.map((skill, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-2 cursor-pointer group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-800 border-2 border-gray-700 shadow-lg"
                whileHover={{ scale: 1.1, borderColor: skill.color }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ color: "#6b7280" }} // Gris opaco inicial
                  whileHover={{ color: skill.color }}
                  transition={{ duration: 0.2 }}
                >
                  <skill.Icon size={32} />
                </motion.div>
              </motion.div>
              <p className="text-xs text-gray-400 text-center font-medium group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Habilidades blandas - Card Picker */}
      <motion.div
        className="bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-3xl p-10 shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <Brain className="text-[var(--color-primary)] w-8 h-8" />
          <h3 className="text-2xl font-semibold text-[var(--color-light)]">Soft Skills</h3>
        </div>

        <p className="text-gray-400 text-center relative -top.4">Haz click en el mazo para tomar una carta y revelar una habilidad</p>

        {/* Layout principal: carta revelada a la izquierda, mazo a la derecha */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-80">
          {/* Área de carta revelada - Izquierda */}
          <div className="flex items-center justify-center h-64">
            {revealedCard !== null ? (
              <motion.div
                initial={{ x: 100, opacity: 0, rotateY: 0 }}
                animate={{ x: 0, opacity: 1, rotateY: -180 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <motion.div
                  className="w-32 h-44 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] border-2 border-[var(--color-primary)] rounded-lg shadow-2xl flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    initial={{ rotateY: 180, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <div className="text-center p-4">
                      <p className="text-white text-sm font-semibold leading-tight">
                        {softSkills[revealedCard]}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ) : (
              <div className="w-32 h-44 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-sm text-center">Carta revelada aparecerá aquí</p>
              </div>
            )}
          </div>

          {/* Mazo de cartas - Derecha */}
          <div className="flex flex-col items-center justify-center h-64 relative">
            <motion.div
              className="relative cursor-pointer"
              onClick={handleDeckClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ rotate: selectedCardIndex !== null ? [0, -5, 5, 0] : 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Cartas apiladas en el mazo */}
              {softSkills.map((_, i) => {
                const isRevealed = revealedCard === i;
                const isSelected = selectedCardIndex === i;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute w-24 h-32 bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-gray-600 rounded-lg shadow-lg flex items-center justify-center"
                    style={{
                      top: i * 2,
                      left: i * 1,
                      zIndex: isSelected ? 20 : 8 - i,
                    }}
                    initial={{ rotate: i * 2 }}
                    animate={{
                      x: isSelected ? -150 : 0,
                      y: isSelected ? -50 : 0,
                      rotate: isSelected ? 0 : i * 2,
                      scale: isRevealed ? 0 : 1,
                      opacity: isRevealed ? 0 : 1,
                    }}
                    transition={{
                      duration: isSelected ? 0.6 : 0.3,
                      ease: isSelected ? "easeOut" : "easeInOut",
                    }}
                  >
                    <div className="w-16 h-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-md opacity-80 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">?</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  );
};