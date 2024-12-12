import { motion } from 'framer-motion';

export default function ScrollButton() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      onClick={scrollToProjects}
      className="mt-12 text-gray-400 hover:text-gray-600 transition-colors"
    >
      ↓
    </motion.button>
  );
}