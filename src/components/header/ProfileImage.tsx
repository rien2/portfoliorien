import { motion } from 'framer-motion';

export default function ProfileImage() {
  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      src="https://res.cloudinary.com/dq97fr01g/image/upload/v1733537295/pf_48B7E45E-5291-4D48-8EE3-913868A82749_qie2s3.jpg"
      alt="Rien de Ruiter"
      className="w-32 h-32 rounded-full mx-auto mb-12 object-cover"
    />
  );
}