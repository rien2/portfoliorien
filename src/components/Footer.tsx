import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-24 px-4 border-t border-gray-100">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <a href="tel:+31685587446" className="block hover:text-blue-500 transition-colors">
            +31 685 587 446
          </a>
          <a href="mailto:rderuiter94@gmail.com" className="block hover:text-blue-500 transition-colors">
            rderuiter94@gmail.com
          </a>
          <a 
            href="https://instagram.com/rienderuiter__"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-blue-500 transition-colors"
          >
            @rienderuiter__
          </a>
        </div>
      </div>
    </footer>
  );
}