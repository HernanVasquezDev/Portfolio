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
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [revealedCards, setRevealedCards] = useState<number[]>([]);

  const handleDeckClick = () => {
    const remaining = softSkills
      .map((_, i) => i)
      .filter((i) => !revealedCards.includes(i));

    if (remaining.length === 0) return;

    const randomIndex =
      remaining[Math.floor(Math.random() * remaining.length)];

    setSelectedCard(randomIndex);

    setTimeout(() => {
      setRevealedCards((prev) => [...prev, randomIndex]);
      setSelectedCard(null);
    }, 700);
  };

  const lastRevealed =
    revealedCards.length > 0
      ? revealedCards[revealedCards.length - 1]
      : null;

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

        {/* SOFT SKILLS GAME */}
        <motion.div
          className="bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-3xl p-10 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Brain className="text-[var(--color-primary)] w-8 h-8" />
            <h3 className="text-2xl font-semibold">Soft Skills</h3>
          </div>

          <p className="text-gray-400 mb-6">
            Descubre cómo trabajo a través de estas cartas 👇
          </p>

          {/* CARTA REVELADA */}
          <div className="h-44 flex items-center justify-center mb-6">
            {lastRevealed !== null ? (
              <motion.div
                key={lastRevealed}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <p className="w-35 h-45 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-xl flex items-center justify-center p-4 shadow-lg">
                  {softSkills[lastRevealed]}
                </p>
              </motion.div>
            ) : (
              <div className="w-36 h-48 border-2 border-dashed border-gray-600 rounded-xl flex items-center justify-center">
                <p className="text-gray-500 text-sm text-center px-2">
                  Haz clic en el mazo para revelar una carta
                </p>
              </div>
            )}
          </div>

          {/* MAZO */}
          <div className="flex items-center justify-center h-64 w-full">

          <motion.div
            className="relative h-38  cursor-pointer"
            onClick={handleDeckClick}
            whileHover={{
              scale: 1.05,
              filter: "drop-shadow(0 0 12px rgba(0,173,181,0.35))",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              rotate: selectedCard !== null ? [0, -5, 5, 0] : 0,
            }}
            transition={{ duration: 0.3 }}
            >
            {softSkills.map((_, i) => {
              const isSelected = selectedCard === i;
              const isRevealed = revealedCards.includes(i);
              
              return (
                <motion.div
                  key={i}
                  
                  className="absolute w-31 h-40 bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-600 rounded-lg shadow-lg flex items-center justify-center"
                  style={{
                    top: i * 2.5,
                    left: i * 1.5,
                    zIndex: isSelected ? 20 : 10 - i,
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
                  {/* Núcleo de la carta */}
                  <div className="w-20 h-25 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-md flex items-center justify-center shadow-inner">
                    <span className="text-white text-xl font-bold">?</span>
                  </div>

                  {/* Glow sutil */}
                  <div className="absolute inset-0 rounded-lg pointer-events-none bg-[var(--color-primary)] opacity-0 hover:opacity-10 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </motion.div>
          </div>

          {/* PROGRESO */}
          <p className="text-sm text-gray-500 mt-4">
            {revealedCards.length} / {softSkills.length} cartas descubiertas
          </p>

          {/* FINAL */}
          {revealedCards.length === softSkills.length && (
            <motion.p
              className="text-[var(--color-primary-light)] mt-4 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Has descubierto todas mis mayores fortalezas
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};