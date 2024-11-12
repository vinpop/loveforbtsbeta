import { motion } from 'framer-motion';

export default function NavBar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-lg z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">ARMY Letters</h1>
        <div className="space-x-4">
          <button className="btn-secondary">Latest</button>
          <button className="btn-secondary">Popular</button>
        </div>
      </div>
    </motion.nav>
  );
}
