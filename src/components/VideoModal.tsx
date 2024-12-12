import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Project } from '../types/Project';

interface VideoModalProps {
  project: Project;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-95"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-4xl"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative pt-[56.25%]">
            <video
              className="absolute inset-0 w-full h-full"
              controls
              autoPlay
              src={project.video}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}