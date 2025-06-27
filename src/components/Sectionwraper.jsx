// SectionWrapper.jsx
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function SectionWrapper({ children }) {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden'); // 👈 reset on scroll out
        }
      },
      {
        threshold: 0.3, // adjust how much of section must be visible
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: 'easeOut' },
        },
      }}
      style={{ minHeight: '100vh' }}
    >
      {children}
    </motion.section>
  );
}
