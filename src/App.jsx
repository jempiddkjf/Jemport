import { motion } from 'framer-motion';
import './index.css';

export default function App() {
  return (
    <div className="bg-[#0b0b0b] text-[#b0b0b0] font-sans">
      {/* Navbar */}
      <header className="fixed w-full bg-[#0b0b0b]/80 backdrop-blur-sm z-50 border-b border-[#1f1f1f]">
        <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
          <h1 className="text-xl font-semibold text-[#ededed] glow-soft">Jemrey</h1>
          <ul className="flex space-x-6 text-[#b0b0b0]">
            <li><a href="#about" className="hover:text-[#f4c97a] transition">About</a></li>
            <li><a href="#projects" className="hover:text-[#f4c97a] transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-[#f4c97a] transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center text-center px-4 pt-24 bg-gradient-to-b from-black to-[#121212]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f4c97a] glow-soft mb-4">
            Hello, I'm Jemrey
          </h2>
          <p className="text-lg text-[#b0b0b0]">19 y/o aspiring web developer</p>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20 border-t border-[#1f1f1f]">
        <h3 className="text-2xl font-semibold text-[#ededed] mb-4 glow-soft">About Me</h3>
        <p className="text-[#b0b0b0] leading-relaxed">
          I’m Jemrey, a passionate web developer who enjoys building clean, responsive, and modern web interfaces. I specialize in front-end development using React, TailwindCSS, and Vite.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-20 border-t border-[#1f1f1f]">
        <h3 className="text-2xl font-semibold text-[#ededed] mb-4 glow-soft">Projects</h3>
        <p className="text-[#b0b0b0]">More coming soon... (add your projects here!)</p>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 border-t border-[#1f1f1f]">
        <h3 className="text-2xl font-semibold text-[#ededed] mb-4 glow-soft">Contact</h3>
        <p className="text-[#b0b0b0]">Email me at: <a href="mailto:jemcarx@gmail.com" className="text-[#f4c97a] underline">jemcarx@gmail.com</a></p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-[#555] py-6 border-t border-[#1f1f1f]">
        &copy; 2025 Jemrey. All rights reserved.
      </footer>
    </div>
  );
}
