'use client';

import { motion } from 'framer-motion';

export default function NavBar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white"
    >
      <div className="header-container">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="site-title">
              Love for BTS
            </h1>
            <p className="site-description">
              From ARMY, with love: heartfelt letters to BTS
            </p>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
