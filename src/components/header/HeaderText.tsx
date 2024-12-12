import { motion } from 'framer-motion';

export default function HeaderText() {
  return (
    <motion.h1 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="text-3xl md:text-4xl font-light leading-relaxed"
    >
      <span className="block">Rien de Ruiter is creating</span>
      <span className="block mt-2">
        <span className="font-medium">Video</span>
        {' / '}
        <span className="font-medium">Animation</span>
        {' / '}
        <span className="font-medium">VFX</span>
      </span>
      <span className="block mt-2">in Amsterdam</span>
    </motion.h1>
  );
}