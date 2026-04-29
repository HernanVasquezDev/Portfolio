import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const text = "<HV/>";

const AnimatedLogo: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let index = 0;

    const type = () => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;

        setTimeout(type, 360); // 👈 velocidad más humana
      }
    };

    type();
  }, []);

  return (
    <div
      onClick={onClick}
      className="cursor-pointer select-none flex items-center"
    >
      <span className="text-[--color-primary] font-bold text-xl tracking-wider">
        {displayedText}
      </span>

      {displayedText.length < text.length && (
        <motion.span
          className="ml-1 text-[--color-primary] font-bold"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      )}
    </div>
  );
};

export default AnimatedLogo;