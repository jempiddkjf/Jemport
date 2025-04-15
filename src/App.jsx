import { useState } from 'react';
import { motion } from 'framer-motion';
import './index.css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-black text-white font-sans electric-bg"
    >
      <div className="electric-overlay"></div>
      <header className="flex items-center justify-between p-4 border-b border-gray-700 relative z-10">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold text-neon-blue glow-text"
        >
          Jemrey's Portfolio
        </motion.h1>
        <button className="md:hidden text-neon-green" onClick={() => setMenuOpen(!menuOpen)}>
          Menu
        </button>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-neon-purple glow-text">About</a>
          <a href="#projects" className="hover:text-neon-purple glow-text">Projects</a>
          <a href="#contact" className="hover:text-neon-purple glow-text">Contact</a>
        </nav>
      </header>
      {menuOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center bg-gray-900 py-4 relative z-10"
        >
          <a href="#about" className="py-2 text-neon-purple glow-text">About</a>
          <a href="#projects" className="py-2 text-neon-purple glow-text">Projects</a>
          <a href="#contact" className="py-2 text-neon-purple glow-text">Contact</a>
        </motion.nav>
      )}
      <motion.section
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 bg-gradient-to-br from-gray-900 to-black relative z-10"
      >
        <h2 className="text-4xl mb-4 text-neon-green glow-text">Hello, I'm Jemrey</h2>
        <p className="text-xl text-gray-300">A passionate web developer</p>
      </motion.section>
      <motion.section
        id="about"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="p-6 bg-black border-t border-gray-700 relative z-10"
      >
        <h3 className="text-2xl mb-4 text-neon-blue glow-text">About Me</h3>
        <p>Name: Jemrey</p>
        <p>Age: 19</p>
        <p>Email: jemcarx@gmail.com</p>
      </motion.section>
    </motion.div>
  );
}
