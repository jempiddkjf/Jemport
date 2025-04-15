import { motion } from 'framer-motion';
import './index.css';

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Navbar */}
      <header className="fixed w-full bg-black/60 backdrop-blur-sm z-50 border-b border-gray-800">
        <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
          <h1 className="text-xl font-bold text-cyan-400 glow-text">Jemrey</h1>
          <ul className="flex space-x-6 text-gray-300">
            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center text-center px-4 pt-24 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400 glow-text mb-4">
            Hello, I'm Jemrey
          </h2>
          <p className="text-lg text-gray-300">19 y/o aspiring web developer</p>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
        <h3 className="text-2xl font-semibold text-cyan-300 mb-4 glow-text">About Me</h3>
        <p className="text-gray-400 leading-relaxed">
          I’m Jemrey, a passionate web developer who enjoys building clean, responsive, and modern web interfaces. I specialize in front-end development using React, TailwindCSS, and Vite.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
        <h3 className="text-2xl font-semibold text-cyan-300 mb-4 glow-text">Projects</h3>
        <p className="text-gray-400">More coming soon... (add your projects here!)</p>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
        <h3 className="text-2xl font-semibold text-cyan-300 mb-4 glow-text">Contact</h3>
        <p className="text-gray-400">Email me at: <a href="mailto:jemcarx@gmail.com" className="text-cyan-400 underline">jemcarx@gmail.com</a></p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-800">
        &copy; 2025 Jemrey. All rights reserved.
      </footer>
    </div>
  );
}
