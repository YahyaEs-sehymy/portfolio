import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const updateMousePosition = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    }
  };

  return (
    <>
      {/* Glowing ring */}
      <motion.div
        variants={variants}
        animate="default"
        transition={{ type: "tween", ease: "linear", duration: 0.05 }}
        className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] border border-[var(--color-accent-cyan)] shadow-[0_0_10px_var(--color-accent-cyan)]"
      />
      {/* Center dot */}
      <motion.div
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
        className="hidden md:block fixed top-0 left-0 w-2 h-2 bg-[var(--color-accent-cyan)] rounded-full pointer-events-none z-[9999]"
      />
    </>
  );
};

export default CustomCursor;
