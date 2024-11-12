'use client';

import { motion } from 'framer-motion';

export default function LetterCard({ letter, variant }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      className={`letter-card p-6 ${variant}`}
    >
      <p className="text-gray-800 text-lg leading-relaxed">{letter.content}</p>
      <div className="mt-4 flex justify-end">
        <span className="text-sm text-gray-500">
          {letter.timestamp?.toDate().toLocaleDateString()}
        </span>
      </div>
    </motion.div>
  );
}
