import { motion } from 'framer-motion';

export default function LetterCard({ letter }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="letter-card"
    >
      <div className="p-6 rounded-lg shadow-lg bg-white">
        <p className="text-gray-800">{letter.content}</p>
        <div className="mt-4 flex justify-end">
          <span className="text-sm text-gray-500">
            {letter.timestamp?.toDate().toLocaleDateString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
