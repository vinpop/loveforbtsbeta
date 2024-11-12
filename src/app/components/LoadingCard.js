'use client';

import { motion } from 'framer-motion';

export default function LoadingCard() {
  return (
    <div className="letter-card p-5">
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
        <div className="space-y-3">
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        </div>
        <div className="mt-4 flex justify-between">
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
}
