import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ dark, toggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-[95] px-4 pt-4"
    >
      <nav
        className={`max-w-[72rem] mx-auto flex items-center justify-between rounded-[26px] px-5 py-3 transition-all duration-500 ${
          scrolled ? 'glass-strong' : 'glass'
        }`}
      >
        <a href="#home" className="flex items-center gap-2 font-extrabold text-lg">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF7A00] ring-2 ring-[#FF7A00]/40 shadow-lg shadow-[#FF7A00]/30 flex-shrink-0">
              <img src="https://horizons-cdn.hostinger.com/ccf663bc-1d78-4200-99ec-25ed813be7f4/e55d06f5401623adf9066a90183c2b12.png" alt="RI Billing Pro" className="h-7 w-7 object-contain rounded-full" />
            </span>
          <span className="hidden sm:inline">RI Billing Pro</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium opacity-75 hover:opacity-100 hover:text-[#FF7A00] transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="w-10 h-10 rounded-full grid place-items-center glass hover:text-[#FF7A00] transition-colors"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-white bg-[#FF7A00] hover:bg-[#e56d00] transition-colors">
            Let&apos;s Talk
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-10 h-10 rounded-full grid place-items-center glass"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden max-w-[72rem] mx-auto mt-2 glass-strong rounded-3xl p-4 flex flex-col gap-1"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-2xl font-medium hover:bg-[#FF7A00]/10 hover:text-[#FF7A00] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
